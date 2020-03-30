import React from 'react'

export class Todos extends React.Component {
    render() {
        console.log(this.props.todos)
        return (
            <div id="todo">
                <ol>
                    {this.props.todos.map((todo, i) => {
                        return (

                            <li className={todo.done ? "marked-done" : ""} key={i}>
                                <span>{todo.todos}</span>
                                <input type="checkbox"
                                    id={todo.id}
                                    checked={todo.done}
                                    value={todo.done}
                                    onChange={() => { this.props.checkBoxChange(todo) }}
                                ></input>
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
}