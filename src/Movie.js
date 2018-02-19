
import React from 'react';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis';


function Movie({title, poster, genres, synopsis}){
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} alt={title}/>
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index)=>
            <MovieGenre genre={genre} key={index} />)}
        </div>
        <div className="Movie__Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </div>
      </div>
    </div>
  )
}

function MoviePoster({poster, alt}){
  return (
    <img src={poster} className="Movie__Poster" alt={alt} title={alt}></img>
  )
}

function MovieGenre({genre}){
  return (
    <span className="Movie__Genre">
       {genre}
    </span>
  )
}

export default Movie;