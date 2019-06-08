import React from 'react';
import HomePage from './pages/HomePage';
import { loadData } from './pages/UsersListPage';
import { loadData as loadDataApp } from './App';
import loadable from 'react-loadable';
function Loading({ error }) {
    if (error) {
        return 'Oh nooess!';
    } else {
        return <h3>Loading...</h3>;
    }
}
// import UsersListPage from './pages/UsersListPage';
const AsyncUsersListPage = loadable({
    loader: () => import('./pages/UsersListPage'),
    loading: Loading
});

const AsyncApp = loadable({
    loader: () => import('./App'),
    loading: Loading
});


export default [
    {
        component: AsyncApp,
        loadData: loadDataApp,
        routes: [
            {
                path: '/',
                ...HomePage,
                exact: true
            },
            {
                loadData,
                path: '/users',
                component: AsyncUsersListPage,
                // component: UsersListPage,
            }
        ]

    }
]


