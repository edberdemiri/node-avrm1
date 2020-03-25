import React from 'react';
import { Movies } from './Movies'

export class App extends React.Component {
    render() {
        var movies = [
            { name: "Fight Club", cast: ["Edward Norton, ", "Brad Pitt, ", "Meat Loaf"], genre: ["Action, ", "Drama, ", "Thriller"], year: 1999 },
            { name: "Memento", cast: ["Guy Pearce, ", "Carrie-Anne Moss, ", "Joe Pantoliano"], genre: ["Crime, ", "Mystery, ", "Thriller"], year: 2000 },
            { name: "The Godfather", cast: ["Marlon Brando, ", "Al Paciono, ", "James Caan"], genre: ["Mafia, ", "Drama, ", "Crime"], year: 1972 }
        ]
        return (
            <div id="app">
                <h2>Movies:</h2>
                <Movies
                    filmovi={movies} />
            </div>
        )
    }
}