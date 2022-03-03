import React from 'react'
import Header from "./components/Header"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Styles from "./Styles/Main.css"
import MainSection from "./MainSection"

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                <MainSection />
            </React.Fragment>
        )
    }
}

export default App
