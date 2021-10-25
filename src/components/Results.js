import React from 'react';
import { Link } from 'react-router-dom';

function Results({ movieList, url, id, promise, isSorted, setIsSorted }) {

    const list = promise ? <h3>Try another movie</h3> : (
        Object.keys(movieList).map((movieId) => (
            <li key={movieId}>
                <Link to={`${url}/${movieList[movieId][id]}`}>
                    {movieList[movieId].Title} - Movie Rating: {movieList[movieId].Rated}
                </Link>
            </li>
        ))
    )

    return (
        <ul>{list}</ul>
    )
}

export default Results;