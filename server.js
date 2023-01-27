const express =require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

/**
 * Setup the mongodb connection 
 */
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URL, ()=>{
    console.log("MongoDB connected ");  
});


const authRouter = require('./routes/auth.route');
const postRouter = require('./routes/blogpost.routes');

app.use( '/blog/api/v1' , authRouter );
app.use( '/blog/api/v1' , postRouter );

app.listen(process.env.PORT, () => {
    console.log(`Blogging-website server has started on the port http://localhost:${ process.env.PORT }` );
})