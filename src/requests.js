
const API_KEY = process.env.NETFLIX_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=3651a7e5d7bf4884dd9c2e33a2b5e314&language=en-US`,
  fetchNetflixOrginals: `discover/tv?api_key=3651a7e5d7bf4884dd9c2e33a2b5e314&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
