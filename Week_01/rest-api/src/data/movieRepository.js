import mysql from 'mysql';

const con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mysql123',
  database : 'movielist'
});
 
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



// let movieList = [{
//     id: 10002,
//     name: "die hard",
//     year: "1999",
//     genre: "action",
//     income: 11000000
//   },{
//     id: 10003,
//     name: "batman",
//     year: "2000",
//     genre: "action",
//     income: 13000000
//   },{
//     id: 10004,
//     name: "titanic",
//     year: "1999",
//     genre: "drama",
//     income: 15000000
//   },{
//     id: 10005,
//     name: "spider man",
//     year: "2006",
//     genre: "action",
//     income: 1360000
//   }];

  const getMovieList = () => {
    con.query('SELECT * from movielist', function (error, results) {
      if (error) throw error;
      return results;
    });
  };
  
  const createMovie=(pMovie)=>{
    const movieList = con.query('SELECT * from movielist', function (error, results) {
      if (error) throw error;
      return results;
    });

     movieList.push(pMovie);
     return pMovie;
  };

  const existExMovie = (pId) => {
    const movieList = con.query('SELECT * from movielist', function (error, results) {
      if (error) throw error;
      return results;
    });
    return movieList.some(e => e.id == pId) 
  }

  const findMovie = (pId) => {
    const movieList = con.query('SELECT * from movielist', function (error, results) {
      if (error) throw error;
      return results;
    });
    return movieList.find(e=>e == pId);
  } 

  const updateMovie = (pId, movie)=> {
    const movieList = con.query('SELECT * from movielist', function (error, results) {
      if (error) throw error;
      return results;
    });

      const foundIndex = movieList.findIndex(e=>e.id ==pId);
      movieList[foundIndex] = movie;
      return movie;
  };

  const deleteMovie = (pId)=> {
    const movieList = con.query('SELECT * from movielist', function (error, results) {
      if (error) throw error;
      return results;
    });

    const foundIndex = movieList.findIndex(e=>e.id == pId);
   movieList = movieList.splice(foundIndex,1);
    return movieList;
};

  export default { getMovieList, createMovie, existExMovie , findMovie, deleteMovie,updateMovie};