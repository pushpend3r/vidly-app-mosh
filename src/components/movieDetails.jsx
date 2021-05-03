import React from "react";
import Form from "./form";
import Joi from "joi-browser";
import { v4 as uuidv4 } from "uuid";

class MovieDetails extends Form {
  state = {
    data: {},
    error: {},
  };

  componentDidMount() {
    this.setState({ data: { ...this.props.movie } });
  }

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    stock: Joi.number().required().min(0).max(100).label("Number in Stock"),
    rate: Joi.number().required().min(0).max(10).label("Daily Rental Rate"),
  };

  doSubmit = () => {
    const { title, genre, stock, rate, liked } = this.state.data;
    this.props.onSubmitNewMovieDetails({
      id: uuidv4(),
      title,
      genre,
      stock,
      rate,
      liked,
    });
  };

  render() {
    if (!this.props.movie) this.props.history.replace("/not-found");

    return (
      <div className="Movie Form">
        <h1 className="mb-4">Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          <select className="form-select" id="genreSelect">
            <option selected value=""></option>
            <option value="1">Action</option>
            <option value="2">Thriller</option>
            <option value="3">Comedy</option>
          </select>
          {this.renderInput("stock", "Stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieDetails;
