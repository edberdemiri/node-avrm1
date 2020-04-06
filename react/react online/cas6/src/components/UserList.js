import React from 'react';

export function UserList(props) {
    return (
        <div>
            {props.users.length > 1 ?
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>E Mail</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.users.map((user, i) => {
                        return (
                                <tr key={i}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                </tr>
                        )
                    })}
                    </tbody>
                </table> : <h2>loading</h2>}
        </div>
    )
}