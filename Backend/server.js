const express = require("express");
const app  =express();
const cors = require('cors');
const mongoose = require('mongoose');
const restaurantRoutes = require("../NodeJS/Routes/restaurants.routes");
const Restaurant = require("../NodeJS/Models/restaurants.model");
const userRoutes = require("../NodeJS/Routes/users.routes");   
app.use(cors());
app.use(express.json());
app.set('view engine','ejs')

app.listen("8000",() => {
    console.log("App listening on 8000");
    })


mongoose.connect("mongodb+srv://anmolbatra2014:3oikpfnDV9TRWaYf@cluster0.tz5yn.mongodb.net/")
const db = mongoose.connection;


db.on("error" , ()=> {
   console.log("Error in MongoDB");
})

db.on("open", ()=> {
   console.log("SuccessFull");
})

restaurantRoutes(app);
userRoutes(app);

// const users = [
//     { id: 1, name: "Aarav Mehta", email: "aarav.mehta@example.com" },
//     { id: 2, name: "Ishita Sharma", email: "ishita.sharma@example.com" },
//     { id: 3, name: "Rohan Patel", email: "rohan.patel@example.com" },
//     { id: 4, name: "Sanya Iyer", email: "sanya.iyer@example.com" },
//     { id: 5, name: "Karan Singh", email: "karan.singh@example.com" },
//     { id: 6, name: "Nisha Gupta", email: "nisha.gupta@example.com" },
//     { id: 7, name: "Vikram Desai", email: "vikram.desai@example.com" },
//     { id: 8, name: "Priya Joshi", email: "priya.joshi@example.com" },
//     { id: 9, name: "Ananya Rao", email: "ananya.rao@example.com" },
//     { id: 10, name: "Rahul Kapoor", email: "rahul.kapoor@example.com" },
//     { id: 11, name: "Simran Verma", email: "simran.verma@example.com" },
//     { id: 12, name: "Arjun Nair", email: "arjun.nair@example.com" },
//     { id: 13, name: "Megha Jain", email: "megha.jain@example.com" },
//     { id: 14, name: "Aman Reddy", email: "aman.reddy@example.com" },
//     { id: 15, name: "Sneha Choudhary", email: "sneha.choudhary@example.com" },
//     { id: 16, name: "Ritika Agarwal", email: "ritika.agarwal@example.com" },
//     { id: 17, name: "Devendra Chauhan", email: "devendra.chauhan@example.com" },
//     { id: 18, name: "Pooja Bansal", email: "pooja.bansal@example.com" },
//     { id: 19, name: "Siddharth Kulkarni", email: "siddharth.kulkarni@example.com" },
//     { id: 20, name: "Lavanya Pillai", email: "lavanya.pillai@example.com" }
// ];



// app.get("/",((req,res) => {
//     res.send("KLB");
// }))

// app.get("/users", (req, res) => {
//     res.send(users);
// });


// // GET USER OF PARTICULAR ID: 

// app.get("/users/:id",(req,res) => {
//     const id = req.params.id;
//     console.log("Id Requested :", id);
//     const user_id = users.find((user) => user.id == id);
    
//     if(!user_id) {
//             res.status(404).json({message:"User doesnot exist with given id "})
//     }
//     res.json(user_id);
// })

// // POST NEW USER:

// app.post("/users",((req,res) => {
//     const newUser = req.body;
//     console.log("Req. Body : ",newUser)
//     const newName = newUser.name;
//     const newEmail = newUser.email;

//     //if any is empty , then this returns :
//     if(!newName || !newEmail) {
//       return res.status(400 ).json({error: "Both name and Email cant be empty "})
//     }
//     const userID = users.length + 1;
//     const userToAdd = {id:userID,...newUser}
//     users.push(userToAdd);
//    return res.status(201).json(users);
//     console.log("Users:",users)

// }));

// //Complete Updation of an Exisiting User:
// app.put("/users/:id",(req,res) => {
// const id = parseInt(req.params.id);
// const updatedUser = req.body;

// const user = users.find((u)=> u.id == id);
// if(!user) {
//     return res.status(404).json({message:"No Such User exists"});
// }
// console.log("Target User Found : (PUT) ",user);

// //Validation for PUT Implementation 
// if(!updatedUser.name || !updatedUser.email) {
//     return res.status(400).json({message:"Both Name and Email values to be present for PUT"});
// }

// user.name = updatedUser.name;
// user.email = updatedUser.email;
// return res.status(202).json({user});


// });




// //Partial Updation of an exisiting User: 
// app.patch("/users/:id",((req,res)=> {
// const id_toUpdate = parseInt(req.params.id);
// console.log("ID Received: ",id_toUpdate);
// const updatedInfo = req.body;
// console.log("updadet Info Recieved: ", updatedInfo);

// //Find the user which has to be updated (if it exists)
// const user = users.find((u) => u.id === id_toUpdate);
// console.log("User Found: ", user);
// //If the requested user id doesnot exist:
// if(!user) {
//     return res.status(404).json({message:"No Such user exists !"});
// }
// //User exists , now extract updates
// const keys = Object.keys(updatedInfo);

// keys.forEach((key) => {
//     if(!user[key]) {
//         return res.status(400).json({message:"Invalid Key"})
//     }
//     user[key] = updatedInfo[key];

// })


// return res.status(202).json({message:"User Updated:" ,user});



// }));


// app.delete("/users/:id",((req,res) => {
// const id_toDelete = parseInt(req.params.id);
// const user = users.find((u)=> u.id === id_toDelete);
// console.log("User to delete Found : ",user);
// if(!user) {
//     return res.status(404).json({message:"No Such user exists !"});
// }
// const filteredUsers = users.filter((u) => u.id != id_toDelete);
// return res.status(202).json(filteredUsers);


// }));

// //HEAD METHOD
// app.head("/users/:id",((req,res) => {
//     const id = parseInt(req.params.id);

//     // Find if the user exists
//     const user = users.find((u) => u.id === id);

//     // If the user does not exist, return a 404 status
//     if (!user) {
//         return res.status(404).end();  // No body, only status
//     }

//     // If the user exists, return a 200 status with headers but no body
//     return res.status(200).end();
// }))

// app.copy("/users/:id",((req,res) => {
//     const id = parseInt(req.params.id);

//     // Find if the user exists
//     const user = users.find((u) => u.id === id);

//     // If the user does not exist, return a 404 status
//     if (!user) {
//         return res.status(404).json({message:"COPY METHOD User Invalid ID entered"})
//     }

//     return res.status(202).json({message:"COPY METHOD User ID Accessed"})
// }));