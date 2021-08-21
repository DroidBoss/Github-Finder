import React, { Fragment } from "react";
import Users from "./Users";
import Search from "./Search";

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;
