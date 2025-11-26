import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import MovieGrid from './components/MovieGrid'
import Watchlist from './components/Watchlist'
import { fetchMovies } from './lib/api'

export default function App(){
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    if(!query) return
    const load = async ()=>{
      const data = await fetchMovies(query)
      setMovies(data)
    }
    load()
  }, [query])

  return (
    <div className="container">
      <header>
        <h1>Movie Search App</h1>
        <p>Search movies, save watchlist & add personal reviews</p>
      </header>

      <SearchBar onSearch={setQuery} />

      <main>
        <MovieGrid movies={movies} />
        <Watchlist />
      </main>
    </div>
  )
}
