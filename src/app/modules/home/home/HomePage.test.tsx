import React from 'react';
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react';

import { renderConnectedComponent2 } from 'src/testUtils';

import HomePage from 'src/app/modules/home/home/HomePage';

describe('Test Homepage', () => {

    // test('can render with redux with defaults', () => {
    //     render(
    //         // @ts-ignore
    //         <HomePage />,
    //         { initialState: {} },
    //     )
    //     // fireEvent.click(screen.getByText('+'));
    //     expect(screen.getByTestId('test_id')).toHaveTextContent('GREAT SUCCESS!');
    // })

    let festFn: any = undefined;
    let container: any = undefined;
    const originalError = console.error;
    // const server = setupServer(
    //     rest.post('/api/login', (req, res, ctx) => {
    //         return res(ctx.json({ token: 'fake_user_token' }));
    //     })
    // )

    beforeAll(() => {
        // console.error = (...args) => {
        //     if (/Warning.*not wrapped in act/.test(args[0])) {
        //         return
        //     }
        //     originalError.call(console, ...args)
        // }
        // server.listen();
        // global.fetch = jest.fn();
        festFn = jest.fn();
        //window.fetch = jest.fn(); if running browser environment
    })
    
    afterEach(() => {
        // server.resetHandlers()
    });

    afterAll(() => {
        // server.close();
        // console.error = originalError;
    })

    describe('Test Homepage render', () => {
        test('it should render with class home-page', (done) => {
            renderConnectedComponent2(
                // @ts-ignore
                <HomePage />,
                { initialState: {} },
            )
            // fireEvent.click(screen.getByText('+'));
            // console.log(container.container);
            // expect(getByTestId("home_page")).toHaveClass('home-page');
            // expect(screen.getByTestId("initial_loading")).toBeInTheDocument();
            done();
        })
    })
})
