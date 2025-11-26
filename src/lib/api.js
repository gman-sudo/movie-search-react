import axios from 'axios'

const KEY = import.meta.env.VITE_TMDB_API_KEY

export async function fetchMovies(query){
  if(!KEY) return []

  const url = "https://api.themoviedb.org/3/search/movie"

  const res = await axios.get(url, {
    params: {
      api_key: KEY,
      query
    }
  })

  return res.data.results.map(movie => ({
    id: movie.id,
    title: movie.title,
    year: movie.release_date?.split("-")[0],
    poster: movie.poster_path 
      ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
      : ""
  }))
}
