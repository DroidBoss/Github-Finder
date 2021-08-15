import React from "react";
import PropTypes from "prop-types";
import { GitHub } from "@material-ui/icons";

function navbar(props) {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <GitHub /> {props.title}
      </h1>
    </nav>
  );
}

//Default props will appear if developer didn't pass any props on component
navbar.defaultProps = {
  title: "Github Finder",
};

//Checking if right data type props are passesd
navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default navbar;
