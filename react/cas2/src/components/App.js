import React from 'react';
import { Car } from './Car';
import { Comments } from './Comments';
import { User } from './User';

export class App extends React.Component {

  render() {
    var tablici = { tablica: "TE-0000-AB" }
    var vozila = [{ brand: "Ford", model: "Fiesta", year: 2004 },
    { brand: "Opel", model: "Corsa", year: 2008 },
    { brand: "Ford", model: "Focus", year: 2018 }];
    var registracija = [
      { grad: "Skopje", oznaka: "SK", tablica: tablici },
      { grad: "Tetovo", oznaka: "TE", tablica: tablici },
      { grad: "Kumanovo", oznaka: "KU", tablica: tablici }
    ];
    var komentari = [{ author: "Edber", content: "This is a comment" },
    { author: "Semir", content: "No internet" },
    { author: "Bari", content: "No Mic" }];
    return (
      <div id="app">
        <h2>Hello</h2>
        <Car cars={vozila}
          reg={registracija}
        />
        <Comments
          date={"23-03-2020"}
          broj={55}
          cifra={1}
          comments={komentari}
        />
        <User name={"Edber"} lastName={"Demiri"} />
        <User name={"Semir"} lastName={"Arifi"} />
        <User name={"Dardan"} lastName={"Asani"} />
      </div>
    )
  }
}