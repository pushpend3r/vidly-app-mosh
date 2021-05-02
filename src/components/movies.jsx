import React, { Component } from "react";
import { getMovies } from "../services/fakeMovies";
import ListItems from "./listItems";
import Like from "./../utils/like";
import { Link } from "react-router-dom";

class Movies extends Component {
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

  render() {
    let movies = this.state.movies;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <ListItems
              activeItem={this.state.activeGenre}
              list={this.uniqueGenres(this.state.movies)}
              onItemClick={this.handleGenreClick}
            />
          </div>
          <div className="col-12 col-lg-9">
            <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
              Showing {this.state.movies.length} movies in the database
            </p>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {movies.map(m => (
                  <tr key={m.id}>
                    <td>
                      <Link to={`/movies/${m.id}`}>{m.title}</Link>
                    </td>
                    <td>{m.genre}</td>
                    <td>{m.stock}</td>
                    <td>{m.rate}</td>
                    <td>
                      <Like
                        liked={m.liked}
                        onClick={() => this.handleLikeClick(m)}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => this.handleDeleteMovie(m)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
