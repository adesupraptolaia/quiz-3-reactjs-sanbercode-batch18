import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div style={{marginTop: "60px", height: "100%"}}>
            <h1 style={{textAlign: "center"}}>
                Data Peserta Sanbercode Bootcamp ReactJS
            </h1>

            <ol type="1">
                <li>
                    <strong>Nama:</strong> Ade Suprapto Laia Putra
                </li>
                <li>
                    <strong>Email:</strong> adesupraptolaia@gmail.com
                </li>
                <li>
                    <strong>Sistem Operasi yang digunakan:</strong> Mac OS
                </li>
                <li>
                    <strong>Akun Github:</strong> adesupraptolaia
                </li>
                <li>
                    <strong>Akun Telegram:</strong> adesupraptolaia
                </li>
            </ol>
            <Link to="/">Kembali Ke Index</Link>
        </div>
    );
};

export default About;
