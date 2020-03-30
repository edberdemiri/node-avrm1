import React from 'react';
import {Welcome} from './Welcome';
import {User} from './user';
import {FruitList} from './FruitList';

export class App extends React.Component {

  render() {
    var user = {
      name : "semir",
      adress : 'Tetovo',
      age : 24,
      city : "Tetovo"
    } 
    var fruits = ["apple","banana","orange"]

    return (
      <div id="app">
        <h2>Hello</h2>
        <Welcome 
        name={"Edber"} 
        prezime={"Demiri"} 
        age={24}
        flag={true}

         />

         <User 
          korisnik={user}
         />

        <FruitList
        ovosje = {fruits}
        />

      </div>
    )
  }
}