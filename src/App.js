import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
    
                <Footer />
            </div>
        </Router>
    );
};

export default App;