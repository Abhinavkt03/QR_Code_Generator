import React, { useState } from "react";
import MovieTrailer from "movie-trailer";
import ReactPlayer from "react-player";
import "./Trailer.css";

export default function Trailer() {
    let [movie, setmovie] = useState("Mirzapur");
    let [url, setUrl] = useState("https://www.youtube.com/watch?v=33o3s4Vs4Sw");

    let inputValue = (e) => {
        setmovie(e.target.value);
    }

    async function handleSearch() {
        setUrl(await MovieTrailer(movie));
    }
    return (
        <>
            <div className="container">
            <h3>Movie Trailer Website</h3>
                <div className="trailer-searchBox">
                    <input type="text" className="trailer-input" onChange={inputValue} placeholder="Mirzapur Season 3" />
                    <button className="trailer-button" onClick={handleSearch}>Search</button>
                </div>
                <div className="react-player">
                    <ReactPlayer url={url} width='30rem' height='20rem'/>
                </div>
            </div>
        </>
    )
}