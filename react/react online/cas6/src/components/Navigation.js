import React from 'react'
import { Link } from 'react-router-dom'

export class Navigation extends React.Component {
    render() {
        return (
            <div id="nav">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/home/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/user-list">User List</Link></li>
                </ul>
            </div>
        );
    }
}