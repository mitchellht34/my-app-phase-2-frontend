import '../App.css';
import NavBar from './NavBar';
import SearchPage from './SearchPage';
import FavoritesPage from './FavoritesPage';
import FormPage from './FormPage';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [movieList, setMovieList] = useState({ Search: [], totalResults: 0, imdbID: '' })
  const [searchBarValue, setSearchBarValue] = useState("Guardians of the Galaxy");
  const [movie, setMovie] = useState({ Title: "", Year: '', Type: 'movie', imdbID: '' })
  const [favorites, setFavorites] = useState([])
  const [reload, setReload] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:3000/movies`)
      .then((response) => response.json())
      .then((data) => {
        setFavorites(data)
        console.log("print")
      })
  }, [reload])

  function addToLikes() {
    fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "Title": movie.Title,
        "Year": movie.Year,
        "Type": movie.Type,
        "imdbID": movie.imdbID,
        "Poster": movie.Poster,
        "Genre": movie.Genre,
        "Released": movie.Released,
        "Runtime": movie.Runtime,
        "Rated": movie.Rated,
        "Director": movie.Director,
        "Writer": movie.Writer,
        "Actors": movie.Actors,
        "Awards": movie.Awards,
        "Plot": movie.Plot,
        "totalSeasons": movie.totalSeasons,
      })
    })
    setReload(!reload)
  }

  return (
    <div>
      <BrowserRouter >
        <NavBar />
        <Switch>
          <Route exact path="/">
            <h1>This is my Home Page</h1>
          </Route>
          <Route path="/search">
            <SearchPage movieList={movieList} setMovieList={setMovieList}
              searchBarValue={searchBarValue} setSearchBarValue={setSearchBarValue}
              movie={movie} setMovie={setMovie}
              clickedLikeButton={addToLikes} />
          </Route>
          <Route path="/favorites">
            <FavoritesPage favorites={favorites} setFavorites={setFavorites}
              movie={movie} setMovie={setMovie}
              reload={reload} setReload={setReload} />
          </Route>
          <Route path="/new-entry">
            <FormPage reload={reload} setReload={setReload}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
