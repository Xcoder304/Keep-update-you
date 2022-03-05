import React from 'react'
import NewsSection from "./NewsSection";
import { Route, Routes } from "react-router-dom";
const AllRoutes = () => {
    const CountryName = "us"
    const articalsPerPageNumber = "6"
    return (
        <Routes>
            <Route path="/"
                element={
                    <NewsSection
                        key={"business"}
                        CurrentUrl={
                            "https://newsapi.org/v2/top-headlines?apiKey=03543da1eaaf430391b929bd52e910fa"
                        }
                        articalsPerPage={articalsPerPageNumber}
                        Country={CountryName}
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
                        articalsPerPage={articalsPerPageNumber}
                        Country={CountryName}
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
                        articalsPerPage={articalsPerPageNumber}
                        Country={CountryName}
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
                        articalsPerPage={articalsPerPageNumber}
                        Country={CountryName}
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
                        articalsPerPage={articalsPerPageNumber}
                        Country={CountryName}
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
                        articalsPerPage={articalsPerPageNumber}
                        Country={CountryName}
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
                        articalsPerPage={articalsPerPageNumber}
                        Country={CountryName}
                        categroy="technology"
                    />
                }
            />
        </Routes>
    )
}

export default AllRoutes