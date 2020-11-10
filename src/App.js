import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Project />
                <Footer />
            </div>
        </Router>
    );
};

export default App;