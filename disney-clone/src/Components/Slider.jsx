import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronRight,HiChevronLeft } from 'react-icons/hi2';

const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth;


const Slider = () => {
    const[movieList,setMovieList]=useState([]);
    const elementRef=useRef();
    useEffect(()=>{
            getTrendingMovies();
    },[])

    const getTrendingMovies=async()=>{
        const resp=await GlobalApi.getTrendingVideos();
        setMovieList(resp.data.results);
        console.log(resp.data.results);
    };

    const sliderRight=(element)=>{
        element.scrollLeft+=screenWidth-110
    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-110
    }

  return (
    <div>
    <HiChevronLeft className='text-white text-[30px] 
    hidden md:block absolute mx-8 mt-[250px]
     cursor-pointer' onClick={()=>sliderLeft(elementRef.current)}/>
    <HiChevronRight className='text-white text-[30px] hidden md:block
     absolute mx-8 mt-[250px] cursor-pointer right-0' onClick={()=>sliderRight(elementRef.current)}/>
   
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
    {movieList.map((item,index)=>{
        if(item.backdrop_path){
            const imageUrl=IMAGE_BASE_URL+item.backdrop_path;
            console.log('Image URL:', imageUrl);
        return(
            <div className='min-w-full h-auto lg:h-[500px] object-cover mr-5 object-left-bottom scrollbar-none'>
                <img
                     key={index} 
                     src={imageUrl}
                     alt={item.title}
                     className='min-w-full min-h-full md:h-[310px] 
                     max-h-full object-cover object-left-top mr-5 rounded-md 
                     hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out cursor-pointer'
 />
            </div>
        );
         }else{
             console.warn('Missing backdrop_path for item:', item);
                    return null;
         }
        })}
    </div>
    </div>
  );
};

export default Slider