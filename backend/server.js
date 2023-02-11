const app = require("./app");
const connectDatabase = require('./config/database');


const dotenv = require('dotenv');

//Handle Uncaught Exceptions
process.on('uncaughtException',  err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting Down due to Uncaught exception');
    process.exit(1)
})


//setting config file
dotenv.config({ path: 'backend/config/config.env'});

//connecting To Database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server Started on Port: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})


const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration


//Handle and Unhandle Promise and Rejections
process.on('unhandle Rejection', err=>{
    console.log(`ERROR ${err.message}`);
    console.log(`Shuting down the Server Due To unhandle Promise and rejections`);
    server.close(()=>{
        process.exit(1);
    })
})