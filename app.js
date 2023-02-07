const path = require('path')
const express = require('express');
const app = express();
var cors= require('cors')
const helmet = require('helmet');
const articalrouter = require('./router/articalRout')
const Artical = require('././model/articalModel')
const userRouter = require('./router/userRout')

app.use(express.json())
app.use(cors())




app.use('/api/allprojects', articalrouter);
app.use('/api/createproject', articalrouter);
app.use('/api/users', userRouter);

// const testArtical = new Artical({

//     title:'collage',
//     description:'chudirvai collage'
// })

// testArtical.save().then(doc => {
//     console.log(doc)
// })



app.all('*', (req, res, next) => {
    next(`Can't find ${req.originalUrl} on this server!`, 404);
});
  
  
module.exports = app;  
