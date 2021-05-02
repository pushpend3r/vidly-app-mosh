import React from "react";
import Form from "./form";
import Joi from "joi-browser";

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

  render() {
    let { id } = this.props.match.params;
    let { movies } = this.props;

    if (!movies?.map(m => m.id).find(e => e === id))
      this.props.history.replace("/not-found");

    return (
      <div className="movie">
        <h1>Movie {id}</h1>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            this.props.history.push("/movies");
          }}
        >
          Save
        </button>
      </div>
    );
  }
}

export default MovieDetails;
