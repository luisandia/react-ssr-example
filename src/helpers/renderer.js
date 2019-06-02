import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';

export default () => {
    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            <Routes />
        </StaticRouter>
    );
    return `
    <html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
    `;
}