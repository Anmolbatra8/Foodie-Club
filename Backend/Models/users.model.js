
const {default: mongoose} = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    email: {type:String,required:true,unique:true},
    password: {type:String,required:true}
});

const userModel = mongoose.model('userModel',userSchema);
module.exports = userModel;
console.log("User Model: ",userModel);
