import React, { Component } from "react";
import { Redirect, Route, Switch, useParams } from "react-router-dom";
import { getMovies } from "../services/fakeMovies";
import Navbar from "./navbar";
import Movies from "./movies";
import Customers from "./customers";
import MoviesDetails from "./movieDetails";
import Rentals from "./rentals";
import NotFound from "./not-found";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

class App extends Component {
  state = {
    movies: [],
    activeGenre: "",
  };

  componentDidMount() {
    this.setState({
      movies: getMovies().map(m => {
        let newMovie = { ...m, liked: false };
        return newMovie;
      }),
    });
  }

  uniqueGenres = movies => [...new Set(movies.map(m => m.genre))];

  handleGenreClick = genreName => {
    this.setState({ activeGenre: genreName });
  };

  handleDeleteMovie = movie => {
    this.setState({ movies: this.state.movies.filter(m => m.id !== movie.id) });
  };

  handleLikeClick = movie => {
    let newMovies = [...this.state.movies];
    let index = newMovies.indexOf(movie);
    let clickedMovie = { ...movie };
    clickedMovie.liked = !clickedMovie.liked;
    newMovies[index] = clickedMovie;
    this.setState({ movies: newMovies });
  };

  handleSubmitNewMovieDetails = movie => {
    const newMovies = { ...this.state.movies };
    const index = newMovies.indexOf(movie);
    if (!index) newMovies.push(movie);
    else newMovies[index] = { ...movie };

    this.setState({ movies: newMovies });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="content container mt-3">
          <Switch>
            <Route path="/not-found" component={NotFound} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route
              path="/movies"
              component={props => (
                <Movies
                  movies={this.state.movies}
                  uniqueGenres={this.uniqueGenres}
                  onGenreClick={this.handleGenreClick}
                  onDeleteMovie={this.handleDeleteMovie}
                  onLikeClick={this.handleLikeClick}
                  activeGenre={this.state.activeGenre}
                  {...props}
                />
              )}
            />
            {/* <Route
              path="/movies/:id"
              component={props => {
                console.log("movielist page");
                return (
                  <MoviesDetails
                    movie={this.state.movies.find(m => m.id === useParams().id)}
                    onSubmitNewMovieDetails={this.handleSubmitNewMovieDetails}
                    {...props}
                  />
                );
              }}
            /> */}
            <Route path="/movies/:id" component={<h1>Hello World</h1>} />
            {/* <Route
              path="/movies/new"
              component={props => (
                <MoviesDetails
                  movie={{
                    title: "",
                    genre: "",
                    stock: "",
                    rate: "",
                    liked: false,
                  }}
                  onSubmitNewMovieDetails={this.handleSubmitNewMovieDetails}
                  {...props}
                />
              )}
            /> */}
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Redirect exact from="/" to="/movies" />
            <Route component={NotFound} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
