let movieList = [{
    id: 10002,
    name: "die hard",
    year: "1999",
    genre: "action",
    income: 11000000
  },{
    id: 10003,
    name: "batman",
    year: "2000",
    genre: "action",
    income: 13000000
  },{
    id: 10004,
    name: "titanic",
    year: "1999",
    genre: "drama",
    income: 15000000
  },{
    id: 10005,
    name: "spider man",
    year: "2006",
    genre: "action",
    income: 1360000
  }];

  const getMovieList = () => {
    return movieList;
  };
  
  const createMovie=(pMovie)=>{
     movieList.push(pMovie);
     return pMovie;
  };

  const existExMovie = (pId) => {
    return movieList.some(e => e.id == pId) 
  }

  const findMovie = (pId) => {
    return movieList.find(e=>e == pId);
  } 

  const updateMovie = (pId, movie)=> {
      const foundIndex = movieList.findIndex(e=>e.id ==pId);
      movieList[foundIndex] = movie;
      return movie;
  };

  const deleteMovie = (pId)=> {
    const foundIndex = movieList.findIndex(e=>e.id == pId);
   movieList = movieList.splice(foundIndex,1);
    return movieList;
};

  export default { getMovieList, createMovie, existExMovie , findMovie, deleteMovie,updateMovie};