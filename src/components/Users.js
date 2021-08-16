import React from "react";
import UserItem from "./UserItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

function Users(props) {
  if (props.loading) {
    return <Spinner />;
  } else {
    return (
      <div style={UserStyle}>
        {props.users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const UserStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
