import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={this.state.text}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-block btn-dark"
        />
      </form>
    );
  }
}

export default Search;
