function MovieCard({ movie }) {
    const FavClick = () => {
      alert(`Added ${movie.title} to favorites ❤️`)
    }
  
    return (
      <div className="bg-gray-900 rounded-2xl shadow-md hover:shadow-lg hover:translate-y-2 transition duration-300 overflow-hidden">
        <div className="relative">
          <img 
            src={movie.poster_img} 
            alt={movie.title} 
            className="w-full h-60 object-cover"
          />
          <button 
            onClick={FavClick} 
            className="absolute top-2 right-2 bg-white text-red-500 rounded-full px-2 py-1 text-lg hover:scale-110 transition"
          >
            ♥
          </button>
        </div>
  
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
          <p className="text-gray-400">{movie.year}</p>
        </div>
      </div>
    )
  }
  
  export default MovieCard
  