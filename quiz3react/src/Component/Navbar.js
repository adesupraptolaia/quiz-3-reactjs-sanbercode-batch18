import React, { useContext } from "react";
import { QuizContext } from "./Context";
import { Link } from "react-router-dom";

const logo = require("./Images/logo.png");

const Navbar = () => {
    const context = useContext(QuizContext);

    let isAdmin = localStorage.getItem("isAdmin")

    console.log("isAdmin Navbar", isAdmin);

    let adminContent =
        isAdmin !== "true" ? (
            <li>
                <Link to="/login">Login</Link>
            </li>
        ) : (
            <>
                <li>
                    <Link to="movies">Movie List Editor</Link>
                </li>
                <li onClick={()=>{localStorage.removeItem("isAdmin"); window.location.replace("/");}}>
                    <Link>Logout</Link>
                </li>
            </>
        );

        console.log("adminContent", adminContent)

    return (
        <header>
            <img id="logo" src={logo} width="200px" alt="logo-sanber" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    {adminContent}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
