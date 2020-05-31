import fs from "fs";
import path from "path";

import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { StaticRouter, matchPath } from "react-router-dom";
import { renderToString } from "react-dom/server";

import configureStore from "src/store";
import { routes } from "src/routes";
import App from "src/App";

let indexHtmlData;

const initialData = {

};

const prepHTML = (data, { html, head, body }) => {
    // data = data.replace('<html lang="vi">', `<html lang="vi" ${html}`);
    data = data.replace('</head>', `${head}</head>`);
    data = data.replace('<div id="root"></div>', `<div id="root">${body}</div>`);

    return data;
};

const loadIndexHtml = () => {
    return new Promise((resolve, reject) => {
        if (indexHtmlData) {
            resolve(indexHtmlData);
        } else {
            const filePath = path.resolve(__dirname, '../build/index.html');
            fs.readFile(filePath, 'utf8', (error, htmlData) => {
                if (error) {
                    console.error('Read error', error);
                    reject(error);
                } else {
                    indexHtmlData = htmlData;
                    resolve(htmlData);
                }
            });
        }
    });
};

export function universalLoader(req, res) {
    const promises: any[] = [];
    routes.some((route: any) => {
        const match = matchPath(req.path, route);
        console.log("Path: " + req.path);
        console.log("Route: " + JSON.stringify(route));
        console.log("Match " + JSON.stringify(match));
        if (match) {
            if (route.loadData) {
                promises.push(route.loadData(match));
            } else {
                promises.push(Promise.resolve(null));
            }
        }
        return match;
    });

    Promise.all(promises)
        .then(data => {
            loadIndexHtml()
                .then(function (htmlData) {
                    const context: any = { href: 'https://' + req.get('host') + req.originalUrl }; // req.protocol + '://' + req.get('host') + req.originalUrl
                    const helmetContext: any = {};
                    const store = configureStore();

                    console.log("Data: " + data);
                    if (Array.isArray(data) && data.length > 0 && !!data[0]) {
                        store.dispatch(data[0]);
                    }

                    const renderObj = renderToString(
                        <Provider store={store} >
                            <StaticRouter location={req.url} context={context} >
                                <HelmetProvider context={helmetContext}>
                                    <App {...initialData} />
                                </HelmetProvider>
                            </StaticRouter>
                        </Provider>
                    );

                    if (context.url) {
                        res.redirect(301, context.url);
                        return;
                    }

                    const { helmet } = helmetContext;
                    const html = prepHTML(htmlData, {
                        html: helmet.htmlAttributes.toString(),
                        head:
                            helmet.title.toString() +
                            helmet.meta.toString() +
                            helmet.link.toString(),
                        body: renderObj,
                    });

                    res.send(html);
                })
                .catch(function (error) {
                    console.error('Read error', error);
                    return res.status(404).end();
                });
        });
}
