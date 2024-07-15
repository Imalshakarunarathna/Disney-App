import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const HrMovieCard = ({ movie }) => {

  return (
    <section className="hover:scale-110 transition-all duration-150 ease-in'">
      <img 
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className='w-[210px] md:w-[290px] rounded-lg hover:border-[3px]
        border-gray-400' alt={movie.title}
      />
      <h2 className='w-[140px] md:w-[200px] text-white mt-2'>{movie.title}</h2>
    </section>
  );
}

export default HrMovieCard