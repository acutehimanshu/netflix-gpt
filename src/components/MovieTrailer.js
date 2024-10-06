import React from 'react'
import { useSelector } from 'react-redux'
import { YT_DEFAULT_URL } from '../utils/constants';

const MovieTrailer = () => {
    const data = useSelector(store => store.movies.trailers);
    if (!data) return null; // Avoid rendering if data is not available
    return (
        <div className='relative w-screen bg-gradient-to-r from-black'>
            {/* Background video trailer */}
            <iframe 
                className='w-screen aspect-video object-cover opacity-60'
                src={YT_DEFAULT_URL + data.key + "?mute=1&autoplay=1"}
                title="YouTube video player" 
                frameBorder="0" 
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
            />
            {/* Overlay content */}
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 space-y-4 text-white'>
                <h1 className='text-4xl font-bold'>{data.info.original_title}</h1>
                <p className='max-w-2xl text-lg'>{data.info.overview}</p>
                
                {/* Buttons */}
                <div className='flex space-x-4'>
                    <button className='bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-300 transition'>
                        Play
                    </button>
                    <button className='bg-gray-700 text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-600 transition'>
                        Add to List
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MovieTrailer;
