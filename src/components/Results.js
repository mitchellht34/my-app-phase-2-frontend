import React from 'react';
import { Link } from 'react-router-dom';

function Results({ movieList, url, id }) {

    const list = Object.keys(movieList).map((movieId) => (
        <li key={movieId}>
            <Link to={`${url}/${movieList[movieId][id]}`}>
                {movieList[movieId].Title}
            </Link>
        </li>
    ))

    return (
        <div>
            <ul>{list}</ul>
        </div>
    )
}

export default Results;