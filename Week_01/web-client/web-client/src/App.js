import { useEffect, useState} from 'react'; 
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [rents, setRents] = useState([]);

  useEffect(()=> {
    getMovies()
    getRentsMovies()
  },[]);
  
  const getMovies = async () =>{
    const response = await fetch('http://localhost:5000/movies');
    const data = await response.json();
    setMovies(data) 
  }

  const getRentsMovies = async () =>{
    const response = await fetch('http://localhost:5000/rents');
    const data = await response.json();
    setRents(data) 
  }

  return (
    <>
    <div className="App">
      <h2>MOVIES</h2>
        <table className="table">
         <thead>
           <tr>
             <th scope="col">#</th>
             <th scope="col">Film Name</th>
             <th scope="col">Film Year</th>
             <th scope="col">Gendre</th>
             <th scope="col">income</th>
           </tr>
         </thead>
         <tbody>
           {movies.map((movie, index)=>(
          <tr key={movie.id}>
             <th scope="row">{index +1}</th>
             <td>{movie.name}</td> 
             <td>{movie.year}</td>
             <td>{movie.genre}</td>
             <td>{movie.income}</td>
          </tr>
           ))}
         </tbody>
       </table> <br/>
       <h2>RENTS MOVIES</h2>
       <table className="table">
         <thead>
           <tr>
             <th scope="col">#</th>
             <th scope="col">Movie Id</th>
             <th scope="col">Duration</th>
             <th scope="col">Person</th>
           </tr>
         </thead>
         <tbody>
           {rents.map((movie, index)=>(
          <tr key={movie.id}>
             <th scope="row">{index +1}</th>
             <td>{movie.movieId}</td> 
             <td>{movie.duration}</td>
             <td>{movie.person}</td>
          </tr>
           ))}
         </tbody>
       </table>
    </div>
    </>
  );
}

export default App;
