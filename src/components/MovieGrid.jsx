import React from 'react'
import MovieCard from './MovieCard'

export default function MovieGrid({movies}){
  if(!movies.length) return <p>No movies found</p>

  return (
    <div className="grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
