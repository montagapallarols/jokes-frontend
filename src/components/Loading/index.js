import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./spinner.css";

export default function Loading() {
  return (
    <div className="loading_spinner">
      <Spinner animation="grow" size="sm" />
    </div>
  );
}