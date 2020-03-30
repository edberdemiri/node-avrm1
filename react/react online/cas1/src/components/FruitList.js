import React from 'react';

export class FruitList extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div id="fruits">
                fruits : {this.props.ovosje.map((fruit, i) => {
                return (<h3 key={i}>{fruit}</h3>)
            })}
            </div>
        )
    }
}