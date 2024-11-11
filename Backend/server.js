const express = require("express");
const app  =express();
const cors = require('cors');
const mongoose = require('mongoose');
const restaurantRoutes = require("../Backend/Routes/restaurants.routes");
const Restaurant = require("../Backend/Models/restaurants.model");
const userRoutes = require("../Backend/Routes/users.routes");   
app.use(cors());
app.use(express.json());
require('dotenv').config();

app.set('view engine','ejs')

const PORT = process.env.PORT || 8000;


app.listen(PORT,() => {
    console.log("App listening on: ",PORT);
    })

const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI);
const db = mongoose.connection;


db.on("error" , ()=> {
   console.log("Error in MongoDB");
})

db.on("open", ()=> {
   console.log("SuccessFull MongoDB Connection");
})

restaurantRoutes(app);
userRoutes(app);

