import React, { Component } from "react";
import { useParams } from "react-router";

const Test = () => {
  const { id } = useParams();
  return <h1>Hello World {id}</h1>;
};

export default Test;
