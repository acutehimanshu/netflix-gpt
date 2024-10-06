
export const TMDB_API_KEY = 'e3a2be50afd79fa2a3357f93739b86af';
export const TMDB_API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2EyYmU1MGFmZDc5ZmEyYTMzNTdmOTM3MzliODZhZiIsIm5iZiI6MTcyODEyNDEzNS42MTc2MTUsInN1YiI6IjY3MDExMjM5OWViZWExOTAwNmY4NTVmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.osVVl0nem8OjvsogLHgfCsAG-vHU3jklZNZjDFDSHw4';
export const TMDB_API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+TMDB_API_TOKEN
    }
  };
export const TMDB_THUMBNAIL_PATH = 'https://image.tmdb.org/t/p/w200/';
export const YT_DEFAULT_URL = "https://www.youtube.com/embed/";