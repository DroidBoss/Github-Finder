import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = (event) => {
    const SearchText = this.state.text;
    this.props.searchUsers(SearchText);
    this.setState({ text: "" });
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search User..."
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
