import React, { useContext } from "react";
import { QuizContext } from "./Context";
import Axios from "axios";

const FormEditContent = () => {
    const context = useContext(QuizContext);

    const [movie, setMovie] = context.getMovie;
    const [statusForm, setStatusForm] = context.getStatusForm;
    const [idxEdit, setIdxEdit] = context.getIdxEdit;
    const [formMovie, setFormMovie] = context.getFormMovie;
    const defaultFormValue = context.defaultFormValue;


    const reloadData = () => {
        console.log("RELOAD DATA");

        Axios.get("http://backendexample.sanbercloud.com/api/movies")
            .then((res) => setMovie(res.data))
            .catch((err) => alert(err));
    };

    const handleSubmit = (event) => {
        // menahan submit
        event.preventDefault();

        if (statusForm !== "edit") {
            console.log("Submit Tambah");

            Axios.post(
                "http://backendexample.sanbercloud.com/api/movies",
                formMovie
            )
                .then(() => reloadData())
                .catch((err) => alert(err));
        } else if (statusForm === "edit") {
            Axios.put(
                "http://backendexample.sanbercloud.com/api/movies/" + idxEdit,
                formMovie
            )
                .then(() => reloadData())
                .catch((err) => alert(err));

            console.log("Submit Edit");
        }
        setFormMovie(defaultFormValue);
        setIdxEdit(-1);
        setStatusForm("");
    };

    const handleChange = (event) => {
        let key = event.target.name;

        setFormMovie({ ...formMovie, [key]: event.target.value });
    };

    const handleCancel = () => {
        setFormMovie(defaultFormValue);
        setStatusForm("");
        setIdxEdit(-1);
        console.log(
            "formMovie",
            formMovie,
            "statusForm",
            statusForm,
            "idxEdit",
            idxEdit
        );
    };

    return (
        <div>
            <h1>Movies Form</h1>
            <div style={{ width: "50%", margin: "0 auto", display: "block" }}>
                <div style={{ border: "1px solid #aaa", padding: "20px" }}>
                    <form onSubmit={handleSubmit}>
                        <label style={{ float: "left" }}>Title:</label>
                        <input
                            style={{ float: "right" }}
                            type="text"
                            name="title"
                            value={formMovie.title}
                            onChange={handleChange}
                        />
                        <br />
                        <br />
                        <label style={{ float: "left" }}>Description:</label>
                        <textarea
                            style={{ float: "right" }}
                            type="text"
                            name="description"
                            value={formMovie.description}
                            onChange={handleChange}
                        />
                        <br />
                        <br />
                        <label style={{ float: "left" }}>Year:</label>
                        <input
                            style={{ float: "right" }}
                            type="number"
                            name="year"
                            value={formMovie.year}
                            onChange={handleChange}
                            min={1980}
                        />
                        <br />
                        <br />
                        <label style={{ float: "left" }}>Duration:</label>
                        <input
                            style={{ float: "right" }}
                            type="number"
                            name="duration"
                            value={formMovie.duration}
                            onChange={handleChange}
                        />
                        <br />
                        <br />
                        <label style={{ float: "left" }}>Genre:</label>
                        <input
                            style={{ float: "right" }}
                            type="text"
                            name="genre"
                            value={formMovie.genre}
                            onChange={handleChange}
                        />
                        <br />
                        <br />
                        <label style={{ float: "left" }}>Rating:</label>
                        <input
                            style={{ float: "right" }}
                            type="number"
                            name="rating"
                            value={formMovie.rating}
                            onChange={handleChange}
                            max={10}
                            min={0}
                        />
                        <br />
                        <br />
                        <label style={{ float: "left" }}>Image URL:</label>
                        <input
                            style={{ float: "right" }}
                            type="text"
                            name="image_url"
                            value={formMovie.image_url}
                            onChange={handleChange}
                        />
                        <br />
                        <br />
                        <div style={{ width: "100%" }}>
                            <button type="submit">submit</button>
                        </div>
                    </form>
                    <button onClick={handleCancel}>cancel</button>
                </div>
            </div>
        </div>
    );
};

export default FormEditContent;
