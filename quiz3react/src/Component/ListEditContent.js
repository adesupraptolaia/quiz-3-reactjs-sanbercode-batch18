import React, { useContext } from "react";
import { QuizContext } from "./Context";
import Axios from "axios";

const ListEditContent = () => {
    const context = useContext(QuizContext);

    const [movie, setMovie] = context.getMovie;
    const [statusForm, setStatusForm] = context.getStatusForm;
    const [idxEdit, setIdxEdit] = context.getIdxEdit;
    const [formMovie, setFormMovie] = context.getFormMovie;

    const reloadData = () => {
        console.log("RELOAD DATA");

        Axios.get("http://backendexample.sanbercloud.com/api/movies")
            .then((res) => setMovie(res.data))
            .catch((err) => alert(err));
    };

    const handleEdit = (e, index) => {
        e.preventDefault();
        console.log("EDIT" + index, movie);

        let data = movie[index];

        setFormMovie(data);
        setStatusForm("edit");
        setIdxEdit(data.id);
    };

    const handleDelete = (event, id) => {
        event.preventDefault();

        console.log("DELETE DATA ID", id);

        if (id === idxEdit) {
            alert(
                "Data yang anda Edit dan Delete SAMA \nSilahkan Tekan Cancel Terlebih Dahulu Jika ingin melanjutkan"
            );
            return;
        }
        Axios.delete("http://backendexample.sanbercloud.com/api/movies/" + id)
            .then(() => reloadData())
            .catch((err) => alert(err));
    };

    let content =
        movie.length === 0 ? (
            <></>
        ) : (
            movie.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td id="description">{item.title}</td>
                        <td id="description">{item.description}</td>
                        <td>{item.year}</td>
                        <td>{item.duration}</td>
                        <td>{item.genre}</td>
                        <td>{item.rating}</td>
                        <td>
                            <button
                                value={item.id}
                                onClick={(e) => handleEdit(e, index)}
                            >
                                Edit
                            </button>
                            &nbsp;
                            <button
                                value={item.id}
                                onClick={(e) => handleDelete(e, item.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                );
            })
        );

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Year</th>
                        <th>Duration</th>
                        <th>Genre</th>
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{content}</tbody>
            </table>
        </>
    );
};

export default ListEditContent;
