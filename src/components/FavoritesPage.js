import React, { useState, useEffect } from 'react';
import { Route, useRouteMatch, useHistory } from 'react-router-dom';
import Results from './Results';
import DisplayMovie from './DisplayMovie';

function FavoritesPage({ favorites, setFavorites, movie, setMovie, reload, setReload }) {

    const [isSorted, setIsSorted] = useState(false)
    const match = useRouteMatch();
    const history = useHistory();
    const sortProperty = "Rated"
    const sorted = [...favorites].sort((a, b) => {
        if (a[sortProperty] < b[sortProperty]) {
            return -1;
        }
        if (a[sortProperty] > b[sortProperty]) {
            return 1;
        }
        return 0;
    })
    const toBeSorted = isSorted ? sorted : favorites

    useEffect(() => {
        setReload(!reload)
        // eslint-disable-next-line
    }, [])

    function favDataFetch(params) {
        fetch(`http://localhost:3000/movies/${params.id}`)
            .then((response) => response.json())
            .then((data) => {
                setMovie(data)
            })
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
        history.push('/favorites')
    }

        function handleSort() {
            setIsSorted(!isSorted)
        }

return (
    <div>
        <h3>My Favorites</h3>
        <button onClick={handleSort}>Sort</button>
        <Results
            movieList={toBeSorted}
            url={match.url}
            id="id"
        />
        <Route path={`${match.url}/:id`}>
            <DisplayMovie
                movie={movie}
                dataFetch={favDataFetch}
                searchID={'id'}
            />
            <button onClick={handleClick}>Delete</button>
        </Route>
    </div>
)
}

export default FavoritesPage;