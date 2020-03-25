import React from 'react'

export class App extends React.Component {

    constructor(props) {
        super(props)
        console.log("this is a constructor")

        this.state = {
            username: "",
            password: "",
            age: 0
        }
    }

    // handleUsernameChange = (event) => {
    //     this.setState({
    //         username: event.target.value
    //     })
    // }
    // handlePasswordChange = (event) => {

    //     this.setState({
    //         password: event.target.value
    //     })
    // }

    componentDidMount(){
        console.log("component did mount")
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    showValues = (user, pass, age) => {
        alert(`Username:${user}\nPassword:${pass}\nAge:${age}`)
    }
    render() {
        console.log("render is called")
        return (
            <div id="app">
                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInputChange}></input><br /><br />
                <h3>{this.state.username}</h3>
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}></input><br /><br />
                <h3>{this.state.password}</h3>
                <input type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.handleInputChange}></input><br /><br />
                <h3>{this.state.age}</h3>

                <button type="button"
                    onClick={() => { this.showValues(this.state.username, this.state.password, this.state.age) }}
                >Submit</button>
            </div>
        )
    }
}