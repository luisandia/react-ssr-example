import React from 'react';
// import HomePage from './pages/HomePage';
import { loadDataUsers } from './loadData';
import App from './App';
import loadable from 'react-loadable';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';
// import  UsersListPage from  './pages/UsersListPage';

const LoadingComponent = () => <h3>please wait...</h3>;

const AsyncUsersListPage = loadable({
    loader: async () => await import('./pages/UsersListPage'),
    loading: LoadingComponent,
    ssr: false
});
AsyncUsersListPage.preload()



const AsyncHome = loadable({
    loader: () => import('./pages/HomePage'),
    loading: LoadingComponent
});
export default [
    {
        ...App,
        routes: [
            {
                path: '/',
                component: AsyncHome,
                exact: true
            },
            {
                ...AdminsListPage,
                path: '/admins'
            },
            {
                loadData: loadDataUsers,
                path: '/users',
                component: AsyncUsersListPage,
                // component: UsersListPage,
            },
            {
                ...NotFoundPage
            }
        ]

    }
]


