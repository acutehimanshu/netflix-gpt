import React from 'react';

const MovieTrey = ({ title, movies, classes }) => {
  if (!movies) return null;

  return (
    <div className={`my-8 z-20 ${classes}`}>
      {/* Tray Header with Title and View All Button */}
      <div className="flex justify-between items-center px-4">
        <h1 className="text-white text-2xl font-bold">{title}</h1>
        <button className="text-gray-400 hover:text-white transition font-semibold">
          View All
        </button>
      </div>

      <div className="relative group mt-4">
        {/* Movie list */}
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide px-4">
          {movies.map((movie) => (
            <div key={movie.id} className="min-w-[200px]">
              <img
                className="w-full h-56 object-cover rounded-md transition-transform duration-300 hover:scale-105"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <h2 className="text-white mt-2 text-sm font-medium">{movie.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieTrey;
