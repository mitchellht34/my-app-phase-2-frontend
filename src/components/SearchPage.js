import React from 'react';
import { Route, useRouteMatch, useHistory } from 'react-router-dom';
import Results from './Results';
import DisplayMovie from './DisplayMovie';

function SearchPage({ movieList, setMovieList, searchBarValue, setSearchBarValue, movie, setMovie, clickedLikeButton }) {

    function dataFetch(params) {
        fetch(`http://www.omdbapi.com/?i=${params.imdbID}&plot=full&apikey=7a5c8a4f`)
            .then((response) => response.json())
            .then((data) => {
                console.log(params)
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
        event.preventDefault();
        fetch(`http://www.omdbapi.com/?s=${searchBarValue}&apikey=7a5c8a4f`)
            .then((response) => response.json())
            .then((data) => {
                setMovieList(data)
            })
    }

    function handleClick(){
        clickedLikeButton()
    }

    return (
        <div>
            <h1>This is my Search Page</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Movie Title"
                    value={searchBarValue}
                    onChange={handleSearchBarChange}
                />
                <button type="submit">Submit</button>
            </form>
            <Results movieList={movieList.Search} url={match.url} id="imdbID"/>
            <Route path={`${match.url}/:imdbID`}>
                <DisplayMovie movie={movie} setMovie={setMovie} dataFetch={dataFetch} searchID={'imdbID'}/>
                <button onClick={handleClick}>Add to Favorites</button>
            </Route>
        </div>
    )
}

export default SearchPage;