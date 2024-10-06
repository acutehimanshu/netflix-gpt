import React, { useEffect } from 'react'
import Header from './Header'
import { TMDB_API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies, addTrailer } from '../utils/movieSlice';
import MovieTrailer from './MovieTrailer';
import MovieTrey from './MovieTrey';

const Browse = () => {
  const dispatch = useDispatch();
  const movies = useSelector(store=>store.movies)
  const getNowPlayingMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', 
      TMDB_API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
      const  trailerDetails = json?.results[0];
      let trailerDetail = await fetch(`https://api.themoviedb.org/3/movie/${trailerDetails.id}/videos?language=en-US`,  TMDB_API_OPTIONS)
      trailerDetail = await trailerDetail.json();
      trailerDetail = trailerDetail.results.filter((vid)=> vid.type == "Trailer")
      trailerDetail = trailerDetail[0];
      trailerDetail.info = trailerDetails;
      dispatch(addTrailer(trailerDetail));
  }

  useEffect(()=>{
    getNowPlayingMovies()
  }, []);
  return (
    <div className='overflow-hidden'>
      <Header isLogin={true} />
      <MovieTrailer />
      <MovieTrey title="Your Next Watch" movies={movies?.nowPlayingMovies} classes="-mt-80" />
      <div className='bg-black text-white'>
      <MovieTrey title="Top 10 Movies" movies={movies?.nowPlayingMovies}  classes="pt-16 -mt-8"  />
      <MovieTrey title="Upcoming Movies" movies={movies?.nowPlayingMovies}  />
      <MovieTrey title="Top IMBD Movies" movies={movies?.nowPlayingMovies}  />
      <MovieTrey title="Top USA Movies" movies={movies?.nowPlayingMovies}  />
      </div>
    </div>
  )
}

export default Browse