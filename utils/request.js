const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: 'Trending',
    url: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `
    https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `
    https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  },
  fetchAction: {
    title: 'Action',
    url: `
    https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genre=28`,
  },
  fetchAdventure: {
    title: 'Adventure',
    url: `
    https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genre=12`,
  },
  fetchCrime: {
    title: 'Crime',
    url: `
    https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genre=80`,
  },
  fetchHorror: {
    title: 'Horror',
    url: `
    https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genre=27`,
  },
  fetchRomance: {
    title: 'Romance',
    url: `
    https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genre=10749`,
  },
  fetchDocumentry: {
    title: 'Documentry',
    url: `
    https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genre=99`,
  },
  fetchDrama: {
    title: 'Drama',
    url: `
    https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genre=18`,
  },
  fetchMystery: {
    title: 'Mystery',
    url: `
    https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genre=9648`,
  },
  fetchSiFi: {
    title: 'Sci-Fi & Fantasy',
    url: `
    https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genre=10765`,
  },
  fetchWarAndPolitics: {
    title: 'War & Politics',
    url: `
    https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genre=10768`,
  },
  fetchTVMovie: {
    title: 'TV Movie',
    url: `
    https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genre=10770`,
  },
};
