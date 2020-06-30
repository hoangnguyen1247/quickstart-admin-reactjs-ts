import React from 'react';

import { history, renderConnectedComponent, mediaQueries, MockMatchMedia, getMockImplementation } from 'src/testUtils';

import App from './App';

export function jestMockMatchMedia({media, matches = false}: MockMatchMedia) {
    const mockedImplementation = getMockImplementation({media, matches});
    window.matchMedia = jest.fn().mockImplementation(mockedImplementation);
}

describe('Test App', () => {

    afterEach(() => {
        jestMockMatchMedia({
            media: mediaQueries.minWidth992,
            matches: false,
        });
    });
    
    describe('Test App render', () => {

        test('renders learn react link', () => {
            jestMockMatchMedia({
                media: mediaQueries.minWidth992,
                matches: true,
            });

            const { getByTestId } = renderConnectedComponent(<App history={history} />);
            // const linkElement = getByText(/learn react/i);
            const routerContainer = getByTestId("router_container");
            expect(routerContainer).toBeInTheDocument();
        });
    })
})
7