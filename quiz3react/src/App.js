import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Context from "./Component/Context";
import EditContent from "./Component/EditContent";
import About from "./Component/About";

function App() {
    return (
        <Router>
            <Context>
                <Navbar />
                <Routing />
                <Footer />
            </Context>
        </Router>
    );
}

const Routing = () => {
    return (
        
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/movies" component={EditContent} />
            </Switch>
        
    );
};

export default App;
