import React, { Component } from "react";
import ListItems from "./listItems";
import Like from "./../utils/like";
import { Link } from "react-router-dom";

class Movies extends Component {
  render() {
    let {
      movies,
      handleDeleteMovie,
      handleGenreClick,
      handleLikeClick,
      uniqueGenres,
      activeGenre,
    } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <ListItems
              activeItem={activeGenre}
              list={uniqueGenres(movies)}
              onItemClick={handleGenreClick}
            />
          </div>
          <div className="col-12 col-lg-9">
            <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
              Showing {movies.length} movies in the database
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
                        onClick={() => handleLikeClick(m)}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteMovie(m)}
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
