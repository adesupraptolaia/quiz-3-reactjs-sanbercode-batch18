import Axios from "axios";
import React, { useState, createContext, useEffect } from "react";


export const QuizContext = createContext();

const Context = (props) => {
    useEffect(() => {
        console.log("useEffect Context");


        Axios.get("http://backendexample.sanbercloud.com/api/movies")
            .then((res) => setMovie(res.data))
            .catch((err) => alert(err));        
    }, []);

    const [movie, setMovie] = useState([]);
    const [statusForm, setStatusForm] = useState("");
    const [idxEdit, setIdxEdit] = useState(-1);

    let defaultFormValue = {
        title: "",
        description: "",
        year: 2020,
        duration: 120,
        genre: "",
        rating: 0,
        review: null,
        image_url: "",
    };

    const [formMovie, setFormMovie] = useState(defaultFormValue);

    return (
        <div style={{height: "100%"}}>

        <QuizContext.Provider
            value={{
                getMovie: [movie, setMovie],
                getStatusForm: [statusForm, setStatusForm],
                getIdxEdit: [idxEdit, setIdxEdit],
                getFormMovie: [formMovie, setFormMovie],
                defaultFormValue,
            }}
            >
            {props.children}
        </QuizContext.Provider>
            </div>
    );
};

export default Context;
