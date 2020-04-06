import React from 'react'
import { Grocery } from './Grocery'

export class App extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {
            grocery: [
                { quantity: 0, item: "Bread" },
                { quantity: 1, item: "Milk" },
                { quantity: 2, item: "Coffe" },
                { quantity: 3, item: "Apple" }
            ],
            newShop: ""
        }
    }

    handleShopChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addToShop = (inputItem) => {
        if (inputItem !== "")
        {var item = {
            quantity: this.state.grocery.length + 1,
            item : inputItem
        }}
        else{
            alert("Fill the input")
        }
        this.setState({
            grocery:[...this.state.grocery,item],
            newShop:""
        })
    }

    removeGrocery = (id) =>{
        var shop = [...this.state.grocery]
        shop.splice(id,1)
        this.setState({
            grocery:shop
        })
        console.log(shop,id)
    }
    

    render() {
        return (
            <div id="app">
                <input type="text" name="newShop" value={this.state.newShop} placeholder="New Shop Article" onChange={this.handleShopChange} />
                <button onClick={()=>{this.addToShop(this.state.newShop)}}>Add</button>
                <Grocery
                    groceryList={this.state.grocery}
                    remove={this.removeGrocery}
                />
            </div>
        )
    }
}