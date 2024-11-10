import React, { useEffect, useState,useReducer } from "react";
import './BodyComponent.css';
//Defining Intital State and reducer function for useReducer Hook
const initialState = 0;
const reducer = (state,action) => {
  switch(action) {
    case "add":
      return(state+1);
    case "subtract":
      return(state-1);
    case "reset":
      return 0;
      default:
      throw new Error("Unexpected action");
  }
}

const Contact = () => {
    const[localRes,setLocalRes] = useState([])
    const [num,setNum] = useState(0);
    const[count,dispatch] = useReducer(reducer,initialState);
    
    // to set user email:
    const [email,setEmail] = useState("");
    //to set user password
    const[password,setPassword] = useState("");
    // to set success message when form submitted
    const[successMsg,setSuccessMsg] = useState("Hey Jude");


    //GET
    useEffect(() => {
        // Fetch data from the Express server
        fetch('http://localhost:8000/restaurants')
          .then(response => response.json())
          .then(data => { setLocalRes(data)

            console.log("Data Now: ",data);
            
          })

          .catch(error => console.error('Error fetching Restaurants', error));
      }, []);

    //When User submits the registration FORM

   
    return(
        <>
    <div>
      <h1>Restaurant List</h1>
          
      

        {localRes.map(res => (
         <div className="res-card">

         <img className="res-img" src={res.imageUrl} alt="Restaurant Cover" />
         
         
         <div className='res-details'>
         <h3>{res.name}</h3>
         <span>{res.avgRating} </span>
         <i className="fa-solid fa-star"></i>  {/* Font Awesome Star Icon */}
         <span>{res.time}</span>
         <br />
         {/* <p className='cuisine-text'>{res.cuisines}</p> */}
         {res.cuisines && res.cuisines.length > 0 ? (
                res.cuisines.map((cuisine, i) => (
                  <span key={i}>{cuisine}{i < res.cuisines.length - 1 ? ', ' : ''}</span>
                ))
              ) : (
                <span>No categories available</span>
              )}
         </div>
         
         
         </div>
                ))}
      
      </div>
     

        </>
    )
}
export default Contact;



