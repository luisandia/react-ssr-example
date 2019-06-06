import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

export class UsersListPage extends Component {

    componentDidMount() {

        this.props.fetchUsers();
    }

    renderUsers() {
        console.log(this.props);
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        });
    }

    render() {
        return (
            <div>
                Here
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users
});

function loadData(store) {
    return store.dispatch(fetchUsers());
}

export { loadData };

// export default {loadData,component:connect(mapStateToProps, { fetchUsers })(UsersListPage)};
export default connect(mapStateToProps, { fetchUsers })(UsersListPage);