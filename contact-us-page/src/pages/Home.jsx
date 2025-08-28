import React, { use } from 'react'
import { useState } from 'react';
import MovieCard from '../components/MovieCard'

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id : 1, title: "Terminaltor", year: "2023"},
        {id : 2, title: "John", year: "2022"},
        {id : 3, title: "Bheem", year: "2020"},
        
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(searchQuery);


    }
  return (
    <div className='p-6'>
        <form onSubmit={handleSubmit} className="flex justify-center gap-3 py-8">
            <input type="text" className='flex bg-gray-500 border-0 rounded px-10' placeholder='Search for movies..' value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}/>
            <button className='text-white bg-red-500 px-2 py-1 rounded-lg'>Search</button>
        </form>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {movies.map((val)=>
                val.title.toLowerCase().startsWith(searchQuery) && 
                (<MovieCard movie={val} key={val.id}/>
            ))}
           
            
        </div>

      
    </div>
  )
}

export default Home
