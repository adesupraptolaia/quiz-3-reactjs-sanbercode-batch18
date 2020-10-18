import React, { useContext } from "react";
import Axios from "axios";
import { QuizContext } from "./Context";

const Home = () => {
    const context = useContext(QuizContext)

    const [movie, setMovie] = context.getMovie

    let content =
        movie.length === 0 ? (
            <></>
        ) : (
            movie.map((item) => {
                return <ListMovie item={item} />;
            })
        );

    return (
        <div className="section">
            <h1>Daftar Film-Film terbaik</h1>
            <div className="article">{content}</div>
        </div>
    );
};

const ListMovie = ({ item }) => {
    let jam = Math.floor(item.duration / 60);
    let menit = item.duration - jam * 60;

    if (menit < 10) {
        let menitConv = "0" + menit;
        menit = menitConv;
    }

    let duration =
        menit === "00" ? (
            <h3>Durasi {jam} Jam</h3>
        ) : (
            <h3>
                Durasi {jam} Jam {menit} menit
            </h3>
        );

    return (
        <div>
            <h3>{item.title}</h3>
            <table className="tableImage">
                <tr>
                    <td width="60%">
                        <img
                            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT7w1Dj-lkTL1CooOXihJ3WBIxyt3K9H6UZ08Ktjv8Ba3gLgC7B"
                            alt="gambar"
                            style={{
                                width: "100%",
                                "object-fit": "cover",
                                height: "300px",
                            }}
                        />
                    </td>
                    <td height="100%" style={{ verticalAlign: "top" }}>
                        <h3>Rating: {item.rating}</h3>
                        {duration}
                        <h3>genre: {item.genre}</h3>
                    </td>
                </tr>
            </table>
            <p>
                <strong>deskripsi</strong> {item.description}
            </p>
            <p>Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in. </p>
            <hr />
        </div>
    );
};

export default Home;
