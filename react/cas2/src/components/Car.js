import React from 'react';

export class Car extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div id="car">
                <ul>
                    {this.props.cars.map((car, i) => {
                        return (<li key={i}>
                            <span>{car.brand}</span>&nbsp;
                            <span>{car.model}</span>&nbsp;
                            <span>{car.year}</span>
                        </li>)
                    })}
                </ul>

                <ol>
                    {this.props.reg.map((reg, i) => {
                        return (
                            <li key={i}>
                                <span>{reg.grad}</span>&nbsp;
                                <span>{reg.oznaka}</span>&nbsp;
                                <span>{reg.tablica.tablica}</span>

                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
}