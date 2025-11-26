# 🎬 Movie Search App (React + Vite)

A fast and modern **Movie Search App** built with **React + Vite**, using the **TMDB API** to fetch movie details.  
Includes a **Watchlist**, **Personal Reviews**, and clean UI.

---

## 🚀 Live Demo
🔗 **https://movie-search-react-eight.vercel.app/**

---

## ✨ Features
- 🔍 Search movies by title using TMDB API  
- 🎥 View posters, titles, release year, overview  
- ⭐ Add movies to Watchlist  
- 📝 Add & save personal reviews (LocalStorage)  
- 💾 Watchlist persists after refresh  
- ⚡ Fast Vite build + React hooks  
- 📱 Fully responsive layout  

---

## 📸 Screenshots

### 🏠 Home Page
![Home](public/screenshots/home.png)

### 🔍 Search Results
![Search Results](public/screenshots/results.png)

### ⭐ Watchlist Page
![Watchlist](public/screenshots/watchlist.png)

---

## 🛠️ Tech Stack
**Frontend:** React, Vite  
**API:** TMDB (The Movie Database)  
**HTTP Client:** Axios  
**Local Storage:** Watchlist + Reviews  
**Styling:** CSS  

---

## 📂 Project Structure
```
movie-search-react/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── MovieGrid.jsx
│   │   ├── MovieCard.jsx
│   │   └── Watchlist.jsx
│   ├── lib/
│   │   ├── api.js
│   │   └── localstore.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── public/
│   └── screenshots/
│        ├── home.png
│        ├── results.png
│        └── watchlist.png
├── .gitignore
├── index.html
├── package.json
└── README.md
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the project
```
git clone https://github.com/gman-sudo/movie-search-react.git
cd movie-search-react
```

### 2️⃣ Install dependencies
```
npm install
```

### 3️⃣ Add TMDB API Key  
Create `.env` in project root:

```
VITE_TMDB_API_KEY=your_api_key_here
```

Get your API key → https://www.themoviedb.org/settings/api

### 4️⃣ Run development server
```
npm run dev
```

App runs at: **http://localhost:5173**

---

## 📦 Build for production
```
npm run build
```

Outputs `dist/` → deploy this on Vercel/Netlify.

---

## ☁️ Deployment (Vercel Recommended)
1. Go to https://vercel.com/new  
2. Import your repository  
3. Add environment variable:  
   - `VITE_TMDB_API_KEY = your_tmdb_key`  
4. Deploy

---

## 🚧 Future Improvements
- ⭐ Add star ratings  
- ⭐ Add movie detail modal  
- ⭐ Add pagination  
- ⭐ Add popular / trending sections  
- ⭐ Add backend (Node.js + MongoDB) for real review storage  
- ⭐ Add authentication (JWT)

---

## 👨‍💻 Author
**Gaganmanohar T**  
Full-Stack Developer  
🔗 GitHub: https://github.com/gman-sudo  
🔗 LinkedIn: https://www.linkedin.com/in/gaganmanohar-t  
