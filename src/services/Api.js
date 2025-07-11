const API_KEY = "fe35e38e4780b56cbf49723c7544c544";
const BASE_URL = "https://api.themoviedb.org/3";




export const getPopularMovies = async () => {
  console.log(`${BASE_URL}/movie/popular?api_key=${API_KEY}`,)
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
