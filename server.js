
const mongoose  = require ('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: `./config.env` });
const app =require ('./app')

const db = `mongodb+srv://ric:ric@cluster0.miau4pq.mongodb.net/ric?retryWrites=true&w=majority`
mongoose.connect(db).then(()=>{
    console.log('connection successfull')
})

// const DB = process.env.DATABASE.replace(
//     '<PASSWORD>',
//     process.env.DATABASE_PASSWORD
//   );
// mongoose.connect(DB).then(()=>{
//      console.log('connection successfull')
// })
                                                       
// mongoose.connect(
//     process.env.DATABASE,
    
//     (err) => {
//      if(err) console.log(err) 
//      else console.log("mongdb is connected");
//     }
// );
  
// or
  
// mongoose.connect(
//     process.env.DATABASE,
    
// )
// .then(()=>console.log('connected'))
// .catch(e=>console.log(e));


const port = 5000;
app.listen(port , () => {
    console.log(`app runing `+port)
})










// process.on('uncaughtException', err => {
//   console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
//   console.log(err.name, err.message);
//   process.exit(1);
// });


// const DB = process.env.DATABASE.replace(
//   '<PASSWORD>',
//   process.env.DATABASE_PASSWORD
// );

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
    
//   })
//   .then(() => console.log('DB connection successful!'));

// const port = process.env.PORT || 8000;
// const server = app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });

// process.on('unhandledRejection', err => {
//   console.log('UNHANDLED REJECTION! 💥 Shutting down...');
//   console.log(err.name, err.message);
//   server.close(() => {
//     process.exit(1);
//   });
// });








