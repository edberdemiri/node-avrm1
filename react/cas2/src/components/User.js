import React from 'react';
import PropTypes from 'prop-types'

export class User extends React.Component {
    render() {
        return (
            <div id="user">
                <h2>Hello, {this.props.name} {this.props.lastName}</h2>
            </div>
        )
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
}