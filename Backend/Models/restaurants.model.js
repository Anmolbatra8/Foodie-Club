//const { type } = require("@testing-library/user-event/dist/type");
const { default: mongoose } = require("mongoose");
const {Schema} = mongoose
//To create Schema

const restaurantSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    avgRating: { type: Number, required: true },
    time:  { type: String, required: true } ,
    cuisines: { type:[String], required: true },
    imageUrl: { type: String, required: true },
    menu: [{
        dishName: { type: String, required: true },
        price: { type: Number, required: true },
        dishImg: { type: String, required: true },
        resid: { type: Number, required: true }
    }]
    // costForTwo : { type: Number, required: true },
    // costForTwoString : { type: String, required: true },
})

// Restaurant Model
const restaurantModel = mongoose.model('restaurantModel',restaurantSchema);
module.exports = restaurantModel;
console.log("Restaurat Model:" ,restaurantModel)