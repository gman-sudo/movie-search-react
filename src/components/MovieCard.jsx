import React, { useState } from 'react'
import { getWatchlist, saveToWatchlist } from '../lib/localstore'

export default function MovieCard({movie}){
  const [review, setReview] = useState('')

  const addToWatchlist = ()=>{
    const list = getWatchlist()
    if(list.find(item => item.id === movie.id)){
      return alert("Already added")
    }
    saveToWatchlist([...list, {...movie, review: ''}])
    alert("Added to watchlist")
  }

  const saveReview = ()=>{
    const list = getWatchlist()
    const updated = list.map(item => 
      item.id === movie.id ? {...item, review} : item
    )
    saveToWatchlist(updated)
    alert("Review saved")
  }

  return (
    <div className="card">
      <img src={movie.poster} alt="" />
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>

      <button onClick={addToWatchlist}>Add to Watchlist</button>

      <textarea 
        placeholder="Write review..."
        value={review}
        onChange={e=>setReview(e.target.value)}
      />
      <button onClick={saveReview}>Save Review</button>
    </div>
  )
}
