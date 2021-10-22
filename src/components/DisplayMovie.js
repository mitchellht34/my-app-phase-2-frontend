import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DisplayMovie({ movie, setMovie, dataFetch, searchID  }) {

    const params = useParams();

    useEffect(() => {
        dataFetch(params)
    }, [params[searchID]])


    return (
        <div>
            <h2>Title: {movie.Title}</h2>
            <img src={movie.Poster} alt="movie poster" />
            <h3>Type: {movie.Type}</h3>
            <p>{movie.Plot}</p>
            <h3>Genre: {movie.Genre}</h3>
            <h3>Year: {movie.Year}</h3>
            <h3>Released: {movie.Released}</h3>
            <h3>Runtime: {movie.Runtime}</h3>
            <h3>Rated: {movie.Rated}</h3>
            <h3>Director: {movie.Director}</h3>
            <h3>Writer: {movie.Writer}</h3>
            <h3>Actors: {movie.Actors}</h3>
            {movie.Type === 'series' ? <h3>Seasons: {movie.totalSeasons}</h3> : null}
            <h3>Awards: {movie.Awards}</h3>
        </div>
    )
}

export default DisplayMovie;