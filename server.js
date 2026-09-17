
import express from 'express'

// const Joke = require('awesome-dev-jokes');
// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.end("Hello World ");
// });

// server.listen(3000,()=>{
//     console.log("Server is running on port 3000");
// });
// console.log(Joke.getRandomJoke());


const app = express()
app.use((res,req,next)=>{
    console.log("Middleware is running");
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World, this is backend server')
})
app.get('/profile',(req,res)=>{
    res.send('This is profile page')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})