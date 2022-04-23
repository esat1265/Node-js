import express from "express";
import movieService from '../services/movieService.js';


const router = express.Router();

// movies part....................................................
router.get("/", (req,res)=>{
    const movieList = movieService.getMovieList();
    res.status(200).send(movieList)
});

router.post("/", (req,res)=>{
    const movie = req.body;
    const newMovie = movieService.addMovie(movie);
    res.status(201).send(newMovie);
});

router.put("/:id", (req,res)=>{
    const movieId = req.params.id;
    const movie = req.body;
    const updateMovie = movieService.updateMovie(movie);
    res.status(201).send(updateMovie)
});

router.delete("/:id", (req,res)=>{
    const movieId = req.params.id;
    movieService.deleteMovie(movieId);
    res.status(200);
});

export {router};