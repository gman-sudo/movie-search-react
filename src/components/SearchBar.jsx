import React, { useState } from 'react'

export default function SearchBar({onSearch}){
  const [text, setText] = useState('')

  const submit = (e)=>{
    e.preventDefault()
    if(!text.trim()) return
    onSearch(text)
  }

  return (
    <form className="search-bar" onSubmit={submit}>
      <input 
        value={text}
        onChange={e=>setText(e.target.value)}
        placeholder="Search movies..."
      />
      <button>Search</button>
    </form>
  )
}
