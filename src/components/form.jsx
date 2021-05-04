import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import SelectInput from "./selectInput";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const { error } = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    let data = { ...this.state.data };
    let errors = { ...this.state.errors };
    data[input.name] = input.value;
    errors[input.name] = this.validateProperty(input);
    this.setState({ data, errors });
  };

  renderButton = label => {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderSelectInput = (name, label, options) => {
    const { data, errors } = this.state;

    return (
      <SelectInput
        name={name}
        options={options}
        selectedOption={data[name]}
        label={label}
        onChange={this.handleChange}
        errors={errors[name]}
      />
    );
  };
}

export default Form;
