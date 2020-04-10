import React from 'react'
import { connect } from 'react-redux'
import { PutUser } from './../actions/PutUser'

class User extends React.Component {

    componentDidMount() {
        this.props.putUser();
    }

    render() {
        return (
            <div>
                <h2>Name: {this.props.user.name} </h2>
                <h2>E-mail: {this.props.user.email} </h2>
                <h2>Phone: {this.props.user.phone} </h2>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

        user:  state.PutUserReducer.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        putUser: () => {
            dispatch(PutUser())
        }
    }
}

export default connect( mapStateToProps,mapDispatchToProps)(User)