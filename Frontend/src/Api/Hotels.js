import { useEffect, useState } from "react";

async function getHotels() {
    let hotels = await fetch("https://gist.githubusercontent.com/Shadid12/18642d735214920921f4f470300be11e/raw/6dcf7b456c40f110c313bbb1678474b01756bc1a/restaurants.json")
    return hotels;
}

async function getRandomImg() {
    let image    = await fetch("https://foodish-api.com/api/");
    const data = await image.json();
    return data.image;
}




const Hotels = () => {

    const[hotels,setHotels] = useState([]);
    const[defaultHotels,setDefaultHotels] = useState([]);
     const[image,setImage] = useState([]);
     const[isFilterApplied,setIsFilterApplied] = useState(false);

useEffect(() => {
    getHotels().then((res)=>res.json())
               .then(async(data)=>
               {
               // first 100 is the var which stores all rendered restaurants inside it
                 // setFirst100(first100) = data.slice(0,100);
                 const first100 = data.slice(0,100);
                 setDefaultHotels(first100);
                 setHotels(first100);
              
                console.log("First 100 core  ",first100);  
    
    // getRandomImg is called for each restaurant and that URL is stored by means of Map
    //array of promises:
    const imgPromises = first100.map(() => getRandomImg())
    //wait for all URLs to come
    const imgUrls = await Promise.all(imgPromises);
    setImage(imgUrls);
    console.log("Image State Updated :",image)
}
  )  } ,[])


//  useEffect(() => {
//     getRandomImg()
//                   .then((data) => {
                    
//                     setImage(data)
//                     {(image) ?
//                     console.log("Image Set: ",image) :
//                     (console.log("Image Not set yet"))
//                 }
//                 })
                  
//                     .catch((err) => console.log("Image fetching Error: ", err))
//  },[])


const topRatedHotels = () => {

  console.log("Top Rated Restaurants Function");
  if(!isFilterApplied){
    // Applying filter on predictable default hotels
  const fourPlusHotels = defaultHotels.filter((h) => h.stars >= 4);
  console.log("Filtered Restaurants: ", fourPlusHotels);
  setHotels(fourPlusHotels); 
}
else {
  console.log('removing Filter ');
  setHotels(defaultHotels);
}
setIsFilterApplied(!isFilterApplied)
console.log("Now Filter Apply State is :", isFilterApplied);
}
  return (
    <>
    <h2>Hotel Component</h2>
    <button onClick={(e)=> {
      console.log("Top Rated Clicked");
      topRatedHotels();
      
    }}>Top Rated</button>                                                          
    {/* <p>{hotels[2].categories.map((c,i) => {
        <span id="i">c </span>
        })}</p>
   */}
   <div className="hotel-container">
   
        {hotels.map((hotel, index) => (
          <div className="hotel-card" key={index}>
            <img src={image[index]} className="hotel-img" alt="Restuarant abc" id={hotel._id.$oid}/>
            <h3>{hotel.name ? hotel.name : "Unaivailable Name"}</h3>
            <p className="hotel-catgeory-text">
              {hotel.categories && hotel.categories.length > 0 ? (
                hotel.categories.map((category, i) => (
                  <span key={i}>{category}{i < hotel.categories.length - 1 ? ', ' : ''}</span>
                ))
              ) : (
                <span>No categories available</span>
              )}
            </p>

          <p> {hotel.stars}  </p>
          
          <p>
  {'⭐'.repeat(hotel.stars)} {/* Repeat filled stars based on rating */}
  {'☆'.repeat(5 - hotel.stars)} {/* Add remaining empty stars */}
</p>

          </div>
        ))}
      
      </div>
     
    
    </>
  )
          
}
export default Hotels;