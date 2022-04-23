import movieRepository from '../data/movieRepository.js';


const getMovieList = () => {
    const list = movieRepository.getMovieList();
    return list;
};

const addMovie = (pMovie)=>{
 const movie = movieRepository.createMovie(pMovie)
 return movie;
};

const updateMovie = (pId, pMovie) => {
const movie = movieRepository.findMovie(pId);
if(movie.iactive && movieRepository.existExMovie(pId)){
    movieRepository.updateMovie(pMovie);
}
return movie;
};

const deleteMovie = (movieId) => {
 return movieRepository.deleteMovie(movieId);
}

export default {getMovieList, addMovie, updateMovie, deleteMovie};