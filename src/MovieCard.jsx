import React from "react";
import './MovieCard.css'

const MovieCard = ({movie}) =>{
    return(
        <div className='movie'>
            <div>
             <p>{movie.Year}</p>
            </div>
            <div>
             <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://source.unsplash.com/1600x1000/?movies'} alt='movie1.Title' />
            </div>
            <div>
             <span>{movie.Type}</span>
             <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard