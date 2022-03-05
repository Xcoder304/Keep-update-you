import React from 'react'
import NewsSection from "./NewsSection";
import { Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


class AllRoutes extends React.Component {
    CountryName = "us"
    articalsPerPageNumber = "6"

    state = {
        progress: 0,
    }

    SetProgress = (progress) => {
        this.setState({ progress: progress })
    }

    render() {
        return (
            <>
                <LoadingBar
                    color='#f11946'
                    progress={this.state.progress}
                />
                <Routes>
                    <Route path="/"
                        element={
                            <NewsSection ChangeProgress={this.SetProgress}
                                key={"business"}
                                CurrentUrl={
                                    "https://newsapi.org/v2/top-headlines?apiKey=03543da1eaaf430391b929bd52e910fa"
                                }
                                articalsPerPage={this.articalsPerPageNumber}
                                Country={this.CountryName}
                                categroy="business"
                            />
                        }
                    />

                    <Route
                        path="/entertainment"
                        element={
                            <NewsSection ChangeProgress={this.SetProgress}
                                key={"entertainment"}
                                CurrentUrl={
                                    "https://newsapi.org/v2/top-headlines?apiKey=03543da1eaaf430391b929bd52e910fa"
                                }
                                articalsPerPage={this.articalsPerPageNumber}
                                Country={this.CountryName}
                                categroy="entertainment"
                            />
                        }
                    />

                    <Route
                        path="/general"
                        element={
                            <NewsSection ChangeProgress={this.SetProgress}
                                key={"general"}
                                CurrentUrl={
                                    "https://newsapi.org/v2/top-headlines?apiKey=03543da1eaaf430391b929bd52e910fa"
                                }
                                articalsPerPage={this.articalsPerPageNumber}
                                Country={this.CountryName}
                                categroy="general"
                            />
                        }
                    />

                    <Route
                        path="/health"
                        element={
                            <NewsSection ChangeProgress={this.SetProgress}
                                key={"health"}
                                CurrentUrl={
                                    "https://newsapi.org/v2/top-headlines?apiKey=03543da1eaaf430391b929bd52e910fa"
                                }
                                articalsPerPage={this.articalsPerPageNumber}
                                Country={this.CountryName}
                                categroy="health"
                            />
                        }
                    />

                    <Route
                        path="/science"
                        element={
                            <NewsSection ChangeProgress={this.SetProgress}
                                key={"science"}
                                CurrentUrl={
                                    "https://newsapi.org/v2/top-headlines?apiKey=03543da1eaaf430391b929bd52e910fa"
                                }
                                articalsPerPage={this.articalsPerPageNumber}
                                Country={this.CountryName}
                                categroy="science"
                            />
                        }
                    />

                    <Route
                        path="/sports"
                        element={
                            <NewsSection ChangeProgress={this.SetProgress}
                                key={"sports"}
                                CurrentUrl={
                                    "https://newsapi.org/v2/top-headlines?apiKey=03543da1eaaf430391b929bd52e910fa"
                                }
                                articalsPerPage={this.articalsPerPageNumber}
                                Country={this.CountryName}
                                categroy="sports"
                            />
                        }
                    />

                    <Route
                        path="/technology"
                        element={
                            <NewsSection ChangeProgress={this.SetProgress}
                                key={"technology"}
                                CurrentUrl={
                                    "https://newsapi.org/v2/top-headlines?apiKey=03543da1eaaf430391b929bd52e910fa"
                                }
                                articalsPerPage={this.articalsPerPageNumber}
                                Country={this.CountryName}
                                categroy="technology"
                            />
                        }
                    />
                </Routes>
            </>
        )
    }

}

export default AllRoutes