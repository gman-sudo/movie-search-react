const KEY = "watchlist_storage"

export const getWatchlist = ()=> {
  return JSON.parse(localStorage.getItem(KEY) || "[]")
}

export const saveToWatchlist = (list)=>{
  localStorage.setItem(KEY, JSON.stringify(list))
}
