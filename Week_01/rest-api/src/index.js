import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import {router as movieRoute} from './routers/movieRoute.js'
import {router as rentsRoute} from './routers/rentsRoute.js'


const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/movies', movieRoute);
app.use('/rents', rentsRoute);


app.listen(PORT, () => {
    console.log(`rest-api server has been started in ${PORT}`)
});


