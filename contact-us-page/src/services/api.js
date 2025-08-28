const API_KEY = "fef89401473bb87ed3f895dff0dce25a"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () =>{
    const response = await fetch(`${BASE_URL}/movies/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;




}
export const searchMovies = async (query) =>{
    const response = await fetch(`${BASE_URL}/search/movies/?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;

}
