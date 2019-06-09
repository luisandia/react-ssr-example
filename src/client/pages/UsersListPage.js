import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
// import  UsersListPage from  './pages/UsersListPage';

export class UsersListPage extends Component {

    async componentDidMount() {

        // await this.props.fetchUsers();
        // import('./pages/UsersListPage').then(Bar => {
        //     this.setState({ Bar });
        //   });
    }

    renderUsers() {
        console.log("renderizando users")
        // console.log(this.props);
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



// export { loadData };

// export default {loadData,component:connect(mapStateToProps, { fetchUsers })(UsersListPage)};
export default connect(mapStateToProps, { fetchUsers })(UsersListPage);
// export default UsersListPage;
