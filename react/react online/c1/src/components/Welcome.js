import React from 'react';

export class Welcome extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div id="welcome">
                <h2>Welcome, {this.props.name} {this.props.prezime} </h2>
                <p>{this.props.age}</p>

                {this.props.flag === true ? 
                <h2>This is a conditional Header</h2> : <h3>Conditional False</h3>}
            </div>
        )
    }
}