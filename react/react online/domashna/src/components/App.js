import React from 'react';

export class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            ime: "",
            prezime: "",
            telefon: 0,
            showing: false
        }
    }
    handlerInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // buttonClick = () => {

    // }

    render() {
        const { showing } = this.state

        return (
            <div id="app">
                <input type="text" placeholder="Ime" name="ime" value={this.state.ime} onChange={this.handlerInputChange}></input><br /><br />
                <input type="text" placeholder="Prezime" name="prezime" value={this.state.prezime} onChange={this.handlerInputChange}></input><br /><br />
                <input type="number" placeholder="Telefon" name="telefon" value={this.state.telefon} onChange={this.handlerInputChange}></input><br /><br />
                <button type="button" onClick={() => this.setState({ showing: !showing })}>Submit</button><br /><br />

                {showing
                    ? <table border="1" width="100">
                        <thead>
                            <tr>
                                <th>Ime:</th>
                                <th>Prezime:</th>
                                <th>Telefon:</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>{this.state.ime}</td>
                            <td>{this.state.prezime}</td>
                            <td>{this.state.telefon}</td>
                        </tr>
                    </table>
                    : null
                }


            </div>
        )
    }
} 