const restaurantModel = require("../Models/restaurants.model");
const userModel = require("../Models/users.model");



//taking out values of a new restaurant from request body to create a new restaurant

exports.create = (req,res) => {

    
const {
    restaurantName,city,
area,
image,
avgRating,
cuisines, 
costForTwo,
costForTwoString,
deliveryTime,
menu
} = req.body;

const newRestaurant = new restaurantModel({  
    restaurantName,
    city,
    area,
    image,
    avgRating,
    cuisines, 
    costForTwo,
    costForTwoString,
    deliveryTime,
    menu});

    newRestaurant.save().then(data => {
        if(!data) {
            res.status(400).json({message:"Bad Request. Please Check Data Fromat"});
        }

    res.send(data);
    console.log("after data sent: ", data.name);

    })
    .catch((err) => {
        res.status(500).json({message:"Some Issue with the server !"});
    })
    
};

//Function to Insert Multiple restaurants at once 

exports.createManyRes = (req,res) => {

    //"Restaurants is the name of array which has come with request"
    const Restaurants = req.body.Restaurants;
    restaurantModel.insertMany(Restaurants)
    .then(()=> {
        console.log("many Restaurants Data Went to MongoDB just Now !");
        return res.status(201).json({message:"Restaurants Stored SuccessFully !"})
    })
    .catch((err)=> {
        return res.status(500).json({message: `Error in storing multiple restaurants:${err}`})

    })
}







// Function to Fetch list of restaurants
exports.fetch = (req,res) => {
    restaurantModel.find().then((data)=> {
       
         if(!data) {    
            res.status(404).json({message:"Data Not Found !"});
         }
       
        res.status(200).json(data);
    })
    .catch((err)=> {
        res.status(500).json({message: "Error in Getting The Data ",err})
    })
}


