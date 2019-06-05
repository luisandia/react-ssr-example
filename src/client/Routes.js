import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import AsyncUsersList from './components/AsyncUsersList';
import { BrowserRouter, Switch, NavLink as Link } from 'react-router-dom';

import {loadData} from './components/UsersList';

import loadable from 'react-loadable';
function Loading({ error }) {
    if (error) {
        return 'Oh nooess!';
    } else {
        return <h3>Loading...</h3>;
    }
}
const AsyncContactComponent = loadable({
    loader: () => import('./components/UsersList'),
    loading: Loading
});

// export default () => {
//     return (
//         <div>
//             <div className="menu">
//                 <Link exact to="/" activeClassName="active">Home</Link>
//                 {/* <Link to="/users" activeClassName="active">About</Link> */}
//                 <Link to="/usersasync" activeClassName="active">Contact</Link>
//             </div>
//             <Route exact path="/" component={Home} />
//             {/* <Route exact path="/users" component={UserList} /> */}
//             <Route exact path="/usersasync" component={AsyncContactComponent} />
//             <Route exact path="/hi" component={() => 'hi'} />
//         </div>
//     )
// }

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        loadData,
        path: '/users',
        component: AsyncContactComponent,
    }

]


