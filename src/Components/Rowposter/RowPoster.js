import React, { useEffect, useState } from "react";
import "./RowPoster.css";
import axios from "../../axios";
import { imageUrl, API_key } from "../../constants/constants";
import YouTube from "react-youtube";

function RowPoster(props) {
  const [movies, setMovies] = useState([]);
  const [urlid, seturlid] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data.results, "--result");
        setMovies(response.data.results);
        console.log(movies, "----movies");
      })
      .catch((err) => {
        // alert('network error')
      });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_key}&language=en-US`)
      .then((response) => {
        console.log(response);
        if (response.data.results.length !== 0) {
          seturlid(response.data.results[0]);
        } else {
          console.log("trailer not available");
        }
      });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj, i) => (
          <div key={i}>
            <img
              onClick={() => {
                handleMovie(obj.id);
              }}
              className={props.isSmall ? "smallposter" : "poster"}
              src={`${imageUrl + obj.backdrop_path}`}
              alt="poster"
            />
            <h4 style={{ textAlign: "center" }}>
              {obj.title ? obj.title : obj.name}
            </h4>
          </div>
        ))}
      </div>

      {urlid && <YouTube videoId={urlid.key} opts={opts} />}
    </div>
  );
}

export default RowPoster;
