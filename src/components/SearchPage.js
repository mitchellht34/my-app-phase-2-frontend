import React, { useState } from 'react';
import { Route, useRouteMatch, useHistory } from 'react-router-dom';
import Results from './Results';
import DisplayMovie from './DisplayMovie';

function SearchPage({ movieList, setMovieList, searchBarValue, setSearchBarValue, movie, setMovie, clickedLikeButton }) {

    const [promise, setPromise] = useState()
    const [isLoaded, setIsLoaded] = useState(false)

    function dataFetch(params) {
        fetch(`http://www.omdbapi.com/?i=${params.imdbID}&plot=full&apikey=7a5c8a4f`)
            .then((response) => response.json())
            .then((data) => {
                setMovie(data)
            })
    }

    const match = useRouteMatch();
    const history = useHistory();

    function handleSearchBarChange(event) {
        setSearchBarValue(event.target.value)
    }

    function handleSubmit(event) {
        history.push('/search')
        setIsLoaded(true)
        event.preventDefault();
        fetch(`http://www.omdbapi.com/?s=${searchBarValue}&apikey=7a5c8a4f`)
            .then((response) => response.json())
            .then((data) => {
                if (data.Response !== "False") {
                    setPromise(false)
                    setMovieList(data)
                }
                else{
                    setPromise(true)
                }
            })
    }

    function handleClick() {
        clickedLikeButton()
    }

    return (
        <div>
            <h1>Search for a Movie</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Movie Title"
                    value={searchBarValue}
                    onChange={handleSearchBarChange}
                />
                <button type="submit">Submit</button>
            </form>
            {isLoaded ? (
                <Results
                    movieList={movieList.Search}
                    url={match.url}
                    id="imdbID"
                    promise={promise}
                />) : null}
            <Route path={`${match.url}/:imdbID`}>
                <DisplayMovie
                    movie={movie}
                    dataFetch={dataFetch}
                    searchID={'imdbID'}
                />
                <button onClick={handleClick}>Add to Favorites</button>
            </Route>
        </div>
    )
}

export default SearchPage;