const mongoose = require('mongoose')
// const dotenv = require('dotenv')

// dotenv.config({path: "./config.env"})
const app = require("./app")

const DB = `mongodb+srv://ric:ric@cluster0.miau4pq.mongodb.net/ric?retryWrites=true&w=majority`



mongoose .connect(DB).then(() => {
console.log('connection successfull')
})

const port = process.env.PORT || 5000;
app.listen(port , () =>{
    // console.log(`app runing on http://localhost:${port}`)
})
