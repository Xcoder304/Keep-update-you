import React from 'react'
import Header from "./components/Header"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Styles from "./Styles/Main.css"
import NewsSection from "./NewsSection"

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                <NewsSection 
                  CurrentUrl={"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=03543da1eaaf430391b929bd52e910fa"} 
                  articalsPerPage={6}
                />
            </React.Fragment>
        )
    }
}

export default App
