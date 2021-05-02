import React, { Component } from "react";

class ListItems extends Component {
  state = {};
  render() {
    return (
      <div className="list-group">
        <button
          type="button"
          className={`list-group-item list-group-item-action${
            this.props.activeItem === "" ? " active" : ""
          }`}
          onClick={() => this.props.onItemClick("")}
        >
          All Genres
        </button>
        {this.props.list.map(item => (
          <button
            key={item}
            type="button"
            className={`list-group-item list-group-item-action${
              this.props.activeItem === item ? " active" : ""
            }`}
            onClick={() => this.props.onItemClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }
}

export default ListItems;
