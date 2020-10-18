import React, { useState } from "react";

const Login = () => {
    let isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin === "true") {
        window.location.replace("/");
    }

    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");

    const handleChange = (event) => {
        let key = event.target.name;

        if (key === "username") {
            setUsername(event.target.value);
        } else if (key === "password") {
            setpassword(event.target.value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username === "admin" && password === "admin") {
            localStorage.setItem("isAdmin", "true");
            window.location.replace("/");
        } else {
            alert("Username atau Password Salah");
        }
    };

    if (isAdmin !== "true") {
        return (
            <div
                style={{
                    width: "50%",
                    margin: "0 auto",
                    display: "block",
                    marginTop: "60px",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        border: "1px solid #aaa",
                        padding: "20px",
                        backgroundColor: "white",
                        textAlign: "center",
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        <label>Username: </label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleChange}
                        />
                        <br />
                        <br />
                        <label>Password: </label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                        <br />
                        <br />
                        <div style={{ width: "100%" }}>
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default Login;
