import React from 'react';

import loadable from 'react-loadable';
// contact route component
const LoadingComponent = () => <h3>please wait...</h3>;
const ContactComponentPromise = () => {
    return import('./UsersList');
}
const AsyncContactComponent = loadable({
    loader: ContactComponentPromise,
    loading: LoadingComponent
});

export default class LoadableDashboard extends React.Component {
    render() {
        return <AsyncContactComponent />;
    }
}