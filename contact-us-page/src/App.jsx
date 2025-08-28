import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import MovieCard from './components/MovieCard.jsx'
import Home from "./pages/Home.jsx"
import { Route, Router, Routes } from 'react-router-dom'
import Favorite from './pages/Favorite.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />

    
    <main className='bg-gray-800 min-h-screen'>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/favorites" element={<Favorite/>}/>
      </Routes>

    </main>
    </div>
  )
}

export default App
