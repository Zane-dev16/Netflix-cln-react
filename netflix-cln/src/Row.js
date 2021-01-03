import React, {useState, useEffect} from 'react'
import axios from './axios'
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl]);

    

    function findImage(film) {
        if (film.backdrop_path) {
            return <img
            key = {film.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow ? film.poster_path : film.backdrop_path}`} 
            alt={film.name} />
        } else {
            return
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(movie => (
                    findImage(movie)
                ))}
            </div>
        </div>
    )
}

export default Row
