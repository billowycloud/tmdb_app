import axios from "axios";

const TMDB_KEY = "3794918f3b586ea959736ff8ded7e5d8";

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: TMDB_KEY,
      language: "ko-KR",
    },
  });

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () => getAnything("/movie/now_playing"),
  popular: () => getAnything("/movie/popular"),
  upcoming: () => getAnything("/movie/upcoming", { region: "kr" }),
  search: (query) => getAnything("/search/movie", { query }),
  movie: (id) => getAnything(`/movie/${id}`),
  discover: () => getAnything("/discover/movie"),
};

export const tvApi = {
  today: () => getAnything("/tv/airing_today"),
  thisWeek: () => getAnything("/tv/on_the_air"),
  topRated: () => getAnything("/tv/top_rated"),
  popular: () => getAnything("/tv/popular"),
  search: (query) => getAnything("/search/tv", { query }),
  show: (id) => getAnything(`/tv/${id}`),
};

export const apiImage = (
  path,
  defaultPoster = "data:image/png;base64,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"
) => (path ? `https://image.tmdb.org/t/p/w500${path}` : defaultPoster);
