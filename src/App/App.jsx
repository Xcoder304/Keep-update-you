import React from "react";
import Header from "./components/HeaderSections/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Styles from "./Styles/Main.css";
import AllRoutes from "./Routes";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <AllRoutes />
      </React.Fragment>
    );
  }
}

export default App;
