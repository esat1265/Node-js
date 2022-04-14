import express from "express";
import bodyParser from "body-parser";
import cors from "cors"


const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(5000, ()=>{
    console.log("rest-api server has been started")
});

app.get("/movies", (req,res)=>{
    res.send([{
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
      }])
});

app.post("/movies", (req,res)=>{
    const movie = req.body;
    res.status(201).send({
        id: movie.id,
        name: movie.name,
        year: movie.year,
        genre: movie.genre,
        income: movie.income
      });
});

app.put("/movies/:id", (req,res)=>{
    const movieId = req.params.id;
    res.send(`ubdated ${movieId}`)
});

app.delete("/movies/:id", (req,res)=>{
    const movieId = req.params.id;
    res.send(`deleted ${movieId}`)
});

app.get("/rents", (req,res)=>{
    res.send([{
        movieId: 10002,
        duration: 10,
        person: "Hi Coders"
     },{
        movieId: 10004,
        duration: 7,
        person: "Hi me"
     },{
        movieId: 10006,
        duration: 5,
        person: "Hi you"
     }])
});

app.post("/rents", (req,res)=>{
    const rent = req.body;
    res.status(201).send({
        movieId: rent.movieId,
        duration: rent.duration,
        person: rent.person
     });
});