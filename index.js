import express from "express";
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    res.send("congrats pri");
})

app.get("/pri", (req, res)=>{
    res.send("<h2> congratssss pri 2nd route <h2>");
})


app.listen(PORT, ()=>{
    console.log(`Listening to PORT ${PORT}`)
})