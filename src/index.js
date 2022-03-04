import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App/App"
import { BrowserRouter as Routers } from "react-router-dom"

ReactDOM.render(
    <Routers>
        <App />
    </Routers>,
    document.getElementById('root')
)