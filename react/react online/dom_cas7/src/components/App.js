import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'

export class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            users: [
                { id: 0, name: "Edber", username: "edberdemiri" },
                { id: 1, name: "Semir", username: "semira" },
                { id: 2, name: "Bari", username: "abdulbari" }
            ],
            disabled: "disabled",
            name: "",
            email: ""
        }
    }
    deleteUser = (userId) => {
        this.setState({
            users: this.state.users.filter((user) => {
                return (user.id !== userId)
            })
        })
    }
    changeDisable = () => {
        this.setState({
            disabled: this.state.disabled === "disabled" ? "" : "disabled"
        })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    showAlert = () => {
        alert(`Name: ${this.state.name}\nEmail: ${this.state.email}`)
        this.setState({
            name: "",
            email: ""
        })
    }

    render() {
        return (
            <div id="App">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <Switch>
                    <Route path="/home" render={() => {
                        return (
                            <Home
                                user={this.state.users}
                                deleteUser={this.deleteUser}
                            />
                        )
                    }} />
                    <Route path="/about" render={() => {
                        return (
                            <About
                                disabled={this.state.disabled}
                                changeDisabled={this.changeDisable}
                                valueName={this.state.name}
                                valueEmail={this.state.email}
                                handleChange={this.handleChange}
                                showAlert={this.showAlert}
                            />
                        )
                    }} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        )
    }
}