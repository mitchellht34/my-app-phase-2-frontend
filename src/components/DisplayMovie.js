import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DisplayMovie({ movie, dataFetch, searchID }) {

    const params = useParams();
    const check = params[searchID]

    useEffect(() => {
        dataFetch(params)
        // eslint-disable-next-line
    }, [check])


    return (
        <div>
            <h2>Title: {movie.Title}</h2>
            {movie.Poster !== '' ? <img src={movie.Poster} alt="movie poster" /> : null}
            {movie.Type !== '' ? <h3>Type: {movie.Type}</h3> : null}
            {movie.Genre !== '' ? <h3>Genre: {movie.Genre}</h3> : null}
            {movie.Year !== '' ? <h3>Year: {movie.Year}</h3> : null}
            {movie.Type === 'series' && movie.totalSeasons !== 'N/A' ? <h3>Seasons: {movie.totalSeasons}</h3> : null}
            {movie.Plot !== '' && movie.Plot !== 'N/A' ? <p>{movie.Plot}</p> : null}
            {movie.Runtime !== '' && movie.Runtime !== 'N/A' ? <h3>Runtime: {movie.Runtime}</h3> : null}
            {movie.Released !== '' && movie.Released !== 'N/A' ? <h3>Released: {movie.Released}</h3> : null}
            {movie.Rated !== '' && movie.Rated !== 'N/A' ? <h3>Rated: {movie.Rated}</h3> : null}
            {movie.Director !== '' && movie.Director !== 'N/A' ? <h3>Director: {movie.Director}</h3> : null}
            {movie.Writer !== '' && movie.Writer !== 'N/A' ? <h3>Writer: {movie.Writer}</h3> : null}
            {movie.Actors !== '' && movie.Actors !== 'N/A' ? <h3>Actors: {movie.Actors}</h3> : null}
            {movie.Awards !== '' && movie.Awards !== 'N/A' ? <h3>Awards: {movie.Awards}</h3> : null}
        </div>
    )
}

export default DisplayMovie;