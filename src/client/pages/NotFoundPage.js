import React, { Component } from 'react'

class NotFoundPage extends Component {
    render() {
        const { staticContext = {} } = this.props;
        staticContext.notFound = true;
        return (
            <h1>route not found</h1>
        )
    }
}
export default { component: NotFoundPage };