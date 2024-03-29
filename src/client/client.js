// startup point for the client side application
import 'babel-polyfill';
import React from 'react'
import reactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Routes from './Routes';
import reducers from './reducers';
import { renderRoutes } from 'react-router-config';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:'/api',

});
const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(
    reducers,
    window.INITIAL_STATE,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
);

reactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                {renderRoutes(Routes)}
            </div>
        </BrowserRouter>
    </Provider>
    ,
    document.querySelector('#root'));
