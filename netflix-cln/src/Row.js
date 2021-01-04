import React, {useState, useEffect} from 'react'
import axios from './axios'
import './Row.css'
import Youtube from  'react-youtube'
import movieTrailer from "movie-trailer"

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl]);

    const handleClick = (film) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            try{
                movieTrailer(film?.name)
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get('v'))
                })
            }
            catch(err) {
                return
            }
        }
    }

    function findImage(film) {
        if (film.backdrop_path) {
            return <img
            key = {film.id}
            onClick={() => handleClick(film)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow ? film.poster_path : film.backdrop_path}`} 
            alt={film.name} />
        } else {
            return
        }
    }

    const opts = {
        height: "390",
        width: "100%",
        payerVars: {
            autoplay: 1,
        },
    }

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(movie => (
                    findImage(movie)
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row
