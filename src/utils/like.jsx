import React, { Component } from "react";
import Heart from "bootstrap-icons/icons/heart.svg";
import SolidHeart from "bootstrap-icons/icons/heart-fill.svg";

class Like extends Component {
  state = {};
  render() {
    return (
      <img
        src={this.props.liked ? SolidHeart : Heart}
        alt="likedlogo"
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
      />
    );
  }
}

export default Like;
