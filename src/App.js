import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Portfolio from "./Pages/Portfolio";
import Home from "./Pages/Home";
import "./style.css"

function App() {
    return (
        <div id="page-container">
            <div id="content-wrap">
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/portfolio">
                            <Portfolio />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>
    );
};

export default App;