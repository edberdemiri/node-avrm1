import React from 'react'
import PropTypes, { string } from 'prop-types'

export class Movies extends React.Component {
    render() {
        return (

            <div id="movie">
                <ol>
                    {this.props.filmovi.map((film, i) => {
                        return(
                        <li key={i}>
                            <span><b>Name:</b> {film.name}</span>&nbsp;
                            <span><b>Actors:</b> {film.cast}</span>&nbsp;
                            <span><b>Genre:</b> {film.genre}</span>&nbsp;
                            <span><b>Year:</b> {film.year}</span>
                        </li>)
                    })}
                </ol>

            </div>
        )
    }
}

Movies.propTypes = {
    filmovi: PropTypes.array.isRequired

}
