import React, { useState, useEffect } from 'react';
import { Route, useRouteMatch, useParams, useHistory } from 'react-router-dom';
import Results from './Results';
import DisplayMovie from './DisplayMovie';

function FavoritesPage({ favorites, setFavorites, movie, setMovie, reload, setReload }) {

    const match = useRouteMatch();
    const params = useParams();
    const history = useHistory();

    function favDataFetch(params) {
        fetch(`http://localhost:3000/movies/${params.id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(params)
                setMovie(data)
            })
            setReload(!reload)
    }

    function handleClick() {
        fetch(`http://localhost:3000/movies/${movie.id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then(() => {
                const newFavorites = favorites.filter((newMovie) => newMovie.id !== movie.id)
                setFavorites(newFavorites)
            })
        setReload(!reload)
        history.push('/favorites')
    }

    return (
        <div>
            <h3>My Favorites</h3>
            <Results movieList={favorites} url={match.url} id="id" />
            <Route path={`${match.url}/:id`}>
                <DisplayMovie movie={movie} setMovie={setMovie} dataFetch={favDataFetch} searchID={'id'} />
                <button onClick={handleClick}>Delete</button>
            </Route>
        </div>
    )
}

export default FavoritesPage;