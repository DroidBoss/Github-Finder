import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = (props) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setText(value);
  };

  const onSubmit = (event) => {
    if (text === "") {
      props.setAlert("Please enter something", "light");
    } else {
      props.searchUsers(text);
      setText("");
    }

    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search User..."
          value={text}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {props.showClear && (
        <button className="btn btn-light btn-block" onClick={props.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
