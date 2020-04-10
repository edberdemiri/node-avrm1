import React from 'react'
import { connect } from 'react-redux'
import { SayHello } from '../actions/SayHelloActions'

class Hello extends React.Component {

    componentDidMount = () => {
        this.props.kaziZdravo();
    }

    render() {
        return (
            <div id="hello">
                <h2>Hello, {this.props.ime}</h2>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ime: state.SayHelloReducer.name
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        kaziZdravo: () => {
            dispatch(SayHello())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Hello)