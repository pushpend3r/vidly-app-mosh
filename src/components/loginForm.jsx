import React from "react";
import Joi from "joi-browser";
import Form from "./form";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("Email Address"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div className="loginForm">
        <h1 className="mb-4">Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email Address")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
