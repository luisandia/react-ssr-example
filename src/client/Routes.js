import React from 'react';
import HomePage from './pages/HomePage';
import { loadData } from './pages/UsersListPage';
import loadable from 'react-loadable';
function Loading({ error }) {
    if (error) {
        return 'Oh nooess!';
    } else {
        return <h3>Loading...</h3>;
    }
}
const AsyncUsersListPage = loadable({
    loader: () => import('./pages/UsersListPage'),
    loading: Loading
});

export default [
    {
        path: '/',
        ...HomePage,
        exact: true
    },
    {
        loadData,
        path: '/users',
        component: AsyncUsersListPage,
    }

]


