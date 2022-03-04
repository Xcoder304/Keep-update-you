import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Styles from "./Styles/Main.css";
import NewsSection from "./NewsSection";
import { Router, Route, Routes } from "react-router-dom";

class App extends React.Component {
  CountryName = "us"
  render() {
    return (
      <React.Fragment>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <NewsSection
              key={"business"}
                CurrentUrl={
                  "https://newsapi.org/v2/top-headlines?apiKey=03543da1eaaf430391b929bd52e910fa"
                }
                articalsPerPage={6}
                Country = {this.CountryName}
                categroy="business"
              />
            }
          />

          <Route
            path="/entertainment"
            element={
              <NewsSection
              key={"entertainment"}
                CurrentUrl={
                  "https://newsapi.org/v2/top-headlines?apiKey=03543da1eaaf430391b929bd52e910fa"
                }
                articalsPerPage={6}
                Country = {this.CountryName}
                categroy="entertainment"
              />
            }
          />

          <Route
            path="/general"
            element={
              <NewsSection
              key={"general"}
                CurrentUrl={
                  "https://newsapi.org/v2/top-headlines?apiKey=03543da1eaaf430391b929bd52e910fa"
                }
                articalsPerPage={6}
                Country = {this.CountryName}
                categroy="general"
              />
            }
          />

          <Route
            path="/health"
            element={
              <NewsSection
              key={"health"}
                CurrentUrl={
                  "https://newsapi.org/v2/top-headlines?apiKey=03543da1eaaf430391b929bd52e910fa"
                }
                articalsPerPage={6}
                Country = {this.CountryName}
                categroy="health"
              />
            }
          />

          <Route
            path="/science"
            element={
              <NewsSection
              key={"science"}
                CurrentUrl={
                  "https://newsapi.org/v2/top-headlines?apiKey=03543da1eaaf430391b929bd52e910fa"
                }
                articalsPerPage={6}
                Country = {this.CountryName}
                categroy="science"
              />
            }
          />

          <Route
            path="/sports"
            element={
              <NewsSection
                key={"sports"}
                CurrentUrl={
                  "https://newsapi.org/v2/top-headlines?apiKey=03543da1eaaf430391b929bd52e910fa"
                }
                articalsPerPage={6}
                Country = {this.CountryName}
                categroy="sports"
              />
            }
          />

          <Route
            path="/technology"
            element={
              <NewsSection
                key={"technology"}
                CurrentUrl={
                  "https://newsapi.org/v2/top-headlines?apiKey=03543da1eaaf430391b929bd52e910fa"
                }
                articalsPerPage={6}
                Country = {this.CountryName}
                categroy="technology"
              />
            }
          />
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
