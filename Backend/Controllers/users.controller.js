const userModel = require("../Models/users.model");
const bcrypt = require("bcrypt");
 
//Function to signup user:
exports.signup = async (req, res) => {
    const { email, password } = req.body;

    // Check if email or password is missing
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

    //    Create a new user
        const newUser = new userModel({
            email,
            password:hashedPassword,
        });

        //Saved user in the DB
         const savedUser = await newUser.save();
      
        return res.status(201).json({
            message: "User Saved Successfully",
            user: {
                email: savedUser.email,
                id: savedUser._id,  
            },
        })

    }
    catch (error) {
        // Error!
        return res.status(500).json({ message: "Server error", error });
    }

        
};

exports.fetch = (req,res) => {
    userModel.find().then((data)=> {
        if(!data) {
            console.log("Inside !data if condition ");
           return res.status(404).json({message:"Cant find Any Data"});      
        }
        return res.status(200).json(data);
      
    })
    ;
    
    
}


exports.login = async (req,res) => {
    const {email,password} = req.body;
    const foundUser = await userModel.findOne({email});
    if(!foundUser) {
        return res.status(404).json({message: "No Such User Exists in our Database"});
    }
    if(foundUser.password != password) {
        return res.status(400).json({message: "Incorrect Password, Try Again !"})
    }
    
    //res.status(200).json({message:"Welcome",foundUser});
    return res.render('Login',{email: foundUser.email});
}