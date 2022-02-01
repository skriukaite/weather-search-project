import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="Search form-inline form-group">
      <input
        type="text"
        placeholder="Enter a city"
        className="form-control input-line"
      ></input>
      <input type="submit" value="Search" className="btn btn-secondary"></input>
    </form>
  );
}
