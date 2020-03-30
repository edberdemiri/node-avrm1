import React, { useImperativeHandle } from 'react'
import { Todos } from './components/Todos'

export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            days: ["Monday", "Tuesday", "Wednesday"],

            car: {
                model: "Volvo",
                year: 2000
            },
            todos: [
                { id: 1, todos: "React Course", done: false },
                { id: 2, todos: "Eat Lunch", done: false },
                { id: 3, todos: "Go To Sleep", done: false }
            ],
            newToDo: ""
        }

    }

    updateCar = (carModel, carYear) => {
        console.log("Update State")
        this.setState({
            car: {
                // ...this.state.car,
                model: carModel,
                // year:carYear
            }
        })
    }

    addDays = () => {
        this.setState({
            days: ["Sunday", ...this.state.days, "Thursday"]
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addToDo = (item) => {
        if (item !== "") {
            var objekt = {
                id: this.state.todos.length + 1,
                todos: item,
                done: false
            }
        }
        else {
            alert("Write Something")
        }
        this.setState({
            todos: [...this.state.todos, objekt],
            newToDo: ""
        })
    }

    boxChange = (todoObject) => {
        this.setState({
            todos: [...this.state.todos.map((row) =>
                (row.id === todoObject.id) ? { id: row.id, todos: row.todos, done: !row.done } : row)]
        })
    }

    render() {
        console.log(this.state)
        return (
            <div id="app">
                {/* <h2>{this.state.car.model}</h2>
                <p>{this.state.car.year}</p>
                <button onClick={()=>{this.updateCar("Nissan",2012)}}>Change Details</button>

                {this.state.days.map((day,i)=>{
                    return(
                        <p key={i}>{day}</p>
                    )
                })}
                <button type="button" onClick={()=>{this.addDays()}}>Add Days</button> */}
                <input
                    type="text"
                    name="newToDo"
                    value={this.state.newToDo}
                    placeholder="Add New To Do"
                    onChange={this.handleChange}
                />
                <button type="button" onClick={() => { this.addToDo(this.state.newToDo) }} >Add</button>
                <Todos
                    todos={this.state.todos}
                    checkBoxChange={this.boxChange}
                />
            </div>
        )
    }
}