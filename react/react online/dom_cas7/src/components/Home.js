import React from 'react'
import { render } from 'react-dom'

export function Home(props) {
    return (
        <div id="Home">
            <h2>Delete Users</h2>
            <ol>
                {props.user.map((user,i) => {
                    return (
                        <li key={user.id}>
                            <span> {user.name} </span>
                            <span> {user.username} </span>
                            <button 
                            type="button"
                            onClick={()=>{props.deleteUser(user.id)}}
                            >
                                Del
                                </button>
                        </li>
                    )
                })}
            </ol>
        </div>
    )

}