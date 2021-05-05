import Form from "./form";
import Joi from "joi-browser";
import { v4 as uuidv4 } from "uuid";

class MovieForm extends Form {
  state = {
    data: {
      id: null,
      title: "",
      genre: "",
      stock: "",
      rate: "",
      liked: false,
    },
    errors: {},
  };

  componentDidMount() {
    this.setState({ data: { ...this.props.movie } });
  }

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    stock: Joi.number().min(0).max(100).required().label("Stock"),
    rate: Joi.number().min(0).max(10).required().label("Rate"),
  };

  doSubmit = () => {
    const { id, title, genre, stock, rate, liked } = this.state.data;
    this.props.onSubmitMovieForm({
      id: id || uuidv4(),
      title,
      genre,
      stock,
      rate,
      liked,
    });
  };

  render() {
    const { movie, genres } = this.props;

    if (!movie) this.props.history.replace("/not-found");

    return (
      <div className="movieForm">
        <h1 className="mb-4">Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelectInput("genre", "Genre", genres)}
          {this.renderInput("stock", "Stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
