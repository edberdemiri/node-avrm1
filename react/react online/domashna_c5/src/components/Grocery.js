import React from 'react'

export class Grocery extends React.Component {
    render() {
        return (
            <div id="grocery">
                <h2>Grocery</h2>
                <ol>
                    {this.props.groceryList.map((grocery, i) => {
                        return (
                            <li key={i}>{grocery.item}
                                <button
                                    type="button"
                                    value={grocery.id}
                                    onClick={()=>{this.props.remove(i)}}
                                >
                                    Del</button>
                            </li>

                        )
                    })}
                </ol>
            </div>
        )
    }
}