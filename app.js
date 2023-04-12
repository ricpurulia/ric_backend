const express = require('express');
const morgan = require('morgan');
const cors= require('cors')
const projectRoute= require('./routes/projectRoute')
const userRoute= require('./routes/userRoute')
const eventRouter = require('./routes/eventRoute')
const contactRouter = require('./routes/contactusRoute')

const app = express();


app.use(express.json())
app.use(cors())

// Home 
app.get('/', (req,res)=>{ 
    res.send('server up')
})

app.use('/api/allproject', projectRoute)
app.use('/api/alluser' , userRoute)
app.use('/api/allevent',eventRouter)
app.use('/api/contactus',contactRouter)



// 404 error page
app.all('*', (req, res, next) => {
    next(`Can't find ${req.originalUrl} on this server!`, 404);
});
  

module.exports = app;
