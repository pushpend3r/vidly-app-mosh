import React from "react";
import Form from "./form";
import Joi from "joi-browser";
import uuid from "uuid";

class MovieDetails extends Form {
  state = {
    data: { ...this.props.movie },
    error: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    stock: Joi.number().required().min(0).max(100).label("Number in Stock"),
    rate: Joi.number().required().min(0).max(10).label("Daily Rental Rate"),
  };

  doSubmit = () => {
    const { title, genre, stock, rate } = this.state.data;
    this.props.onSubmitNewMovieDetails({
      id: uuid(),
      title,
      genre,
      stock,
      rate,
    });
  };

  // render() {
  //   let { id } = this.props.match.params;
  //   let { movies, onSubmitNewMovieDetails } = this.props;

  //   if (!movies?.map(m => m.id).find(e => e === id))
  //     this.props.history.replace("/not-found");

  //   return (
  //     <div className="movie">
  //       <h1>Movie {id}</h1>
  //       <button
  //         className="btn btn-primary btn-sm"
  //         onClick={() => {
  //           this.props.history.push("/movies");
  //         }}
  //       >
  //         Save
  //       </button>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className="Movie Form">
        <h1 className="mb-4">Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default MovieDetails;
