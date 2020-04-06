import React from 'react'
import { connect } from 'react-redux'
import { SayHello } from './../actions/SayHello'
import { LastName } from './../actions/SayHello'


class Hello extends React.Component {

    componentDidMount() {
        this.props.sayHello();
        this.props.lastName();
    }

    render() {
        return (
            <div id="hello">
                <h2>Hello, {this.props.name} {this.props.lastname}</h2>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.SayHelloReducer.name,
        lastname: state.SayHelloReducer.lastname
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sayHello: () => {
            dispatch(SayHello())
        },
        lastName: () => {
            dispatch(LastName())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)