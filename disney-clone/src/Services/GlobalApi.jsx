import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3";
const api_key="529088047edd022bc94086a7a9d2d6eb"

const movieByGenreBaseURL="'https://api.themoviedb.org/3/discover/movie?api_key=529088047edd022bc94086a7a9d2d6eb"

const getTrendingVideos = () => {
    return axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
  };

const getMovieByGenreId=(genreId)=>{
    return axios.get(`${movieBaseUrl}/discover/movie`,{
        params:{
          api_key,
          with_genres:genreId,
        },
 });
};
  
export default{
    getTrendingVideos,
    getMovieByGenreId
}