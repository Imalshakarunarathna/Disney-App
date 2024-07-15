import React, { useEffect, useState,useRef } from 'react'
import GlobalApi from '../Services/GlobalApi';
import MovieCard from './MovieCard';
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi2';
import HrMovieCard from './HrMovieCard';

const MovieList = ({genreId,index_}) => {
    const[movieList,setMovieList]=useState([]);

    const elementRef=useRef(null);
  
    useEffect(()=>{
        getMovieByGenreId();
    },[genreId])

  const getMovieByGenreId=async()=>{
    try{
      const resp = await GlobalApi.getMovieByGenreId(genreId);
      // console.log(resp.data.results);
      setMovieList(resp.data.results);
      console.log(resp.data.results);
    }catch(error){
      console.error('Error fetching movies by genre:', error);
    }
  };
  

  const sliderRight=(element)=>{
    element.scrollLeft+=500;
  };
const sliderLeft=(element)=>{
    element.scrollLeft-=500;
  };

  return (
    <div>
      <HiChevronLeft className='text-white text-[30px] 
    hidden md:block absolute mx-8  mt-[150px]
     cursor-pointer left-0' 
     onClick={()=>sliderLeft(elementRef.current)}/>

    <HiChevronRight className='text-white text-[30px] hidden md:block
     absolute mx-8 mt-[150px] cursor-pointer right-0' 
     onClick={()=>sliderRight(elementRef.current)}/>
   
    <div ref={elementRef} className='flex gap-8 overflow-x-auto scrollbar-none
    pt-5 px-3 pb-5 scroll-smooth'>
    {movieList.map((item, index) => (
                    <>
                    
                            <HrMovieCard movie={item} />
              
                            <MovieCard movie={item} />
                       
                    </>
                ))}
    </div>

    </div>
  );

};
export default MovieList