import React, { useEffect, useState } from 'react'
import { getWatchlist, saveToWatchlist } from '../lib/localstore'

export default function Watchlist(){
  const [items, setItems] = useState([])

  useEffect(()=>{
    setItems(getWatchlist())
  }, [])

  const removeItem = (id)=>{
    const updated = items.filter(i => i.id !== id)
    saveToWatchlist(updated)
    setItems(updated)
  }

  return (
    <aside className="watchlist">
      <h2>Watchlist</h2>
      {items.length === 0 && <p>No movies yet</p>}

      {items.map(i=>(
        <div key={i.id} className="watch-item">
          <h4>{i.title}</h4>
          <p>{i.review}</p>
          <button onClick={()=>removeItem(i.id)}>Remove</button>
        </div>
      ))}
    </aside>
  )
}
