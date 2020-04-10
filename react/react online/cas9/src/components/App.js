import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import  Hello  from './Hello'
import Cake from './Cake'
import Comments from './Comments'
import {Comment} from './Comment'

export class App extends React.Component {
    render() {
        return (
            <div id="app">
                <h2>App</h2>
                <ul>
                    <li> <Link to='/'>Home</Link></li>
                    <li> <Link to='/hello'>Hello</Link></li>
                    <li> <Link to='/cake'>Cake</Link></li>
                    <li> <Link to='/comments'>Comments</Link></li>
                </ul>
                <Switch>
                <Route path='/hello' component={Hello} />
                <Route path='/cake' component={Cake} />
                <Route exact path='/comments' component={Comments} />
                <Route path='/comments/:commentId' component={Comment} />
                </Switch>
            </div>
        );
    }
}