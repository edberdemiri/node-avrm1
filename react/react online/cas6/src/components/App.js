import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { Navigation } from './Navigation'
import axios from 'axios'
import { UserList } from './UserList'

export class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }
    componentDidMount() {
        this.fetchUsers();
    }
    fetchUsers = () => {
        axios({
            url: `https://jsonplaceholder.typicode.com/users`,
            method: "GET"
        })
            .then((res) => {
                this.setState({
                    users: res.data
                })
            })
            .catch((err) => {
                alert(err)
            })
    }

    render() {
        console.log(this.state)
        return (
            <div id="app">
                <h2>Hello</h2>

                <Navigation />

                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path="/home/contact" component={Contact} />
                    <Route path="/about" component={About} />
                    <Route path="/user-list" render={() => {
                        return <UserList users={this.state.users} />
                    }} />
                </Switch>
            </div>
        );
    }
}