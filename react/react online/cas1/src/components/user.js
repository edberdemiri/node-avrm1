import React from 'react';

export class User extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div id="user">
                <h2>Adress: {this.props.korisnik.adress}</h2>
            </div>
        )
    }
}