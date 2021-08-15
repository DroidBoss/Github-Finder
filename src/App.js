import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import axios from "axios";

class App extends React.Component {
  static = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
