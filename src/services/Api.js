// const API_KEY = "127f26132amsh66bdc73d8656696p113da5jsnd9f3d55ce";
// const BASE_URL = "https://www.imdb.com/title/tt21377368/";

const API_KEY = "5aa9fd6d";
const BASE_URL = "http://www.omdbapi.com/?s=movie&apikey=5aa9fd6d";





export const getPopularMovies = async () => {
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
