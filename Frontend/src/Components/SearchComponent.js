//How to pass data (props) from CHild to parent component

const SearchComponent = (props) => {

    let searchtext = "";
    // Function to handle Search Filtering of restaurants props provided by Body
    function filterrestfunction(searchtext) {
     console.log("Searchtext: ",searchtext);
     let filteredRestaurants = props.Restaurants.filter((res)=> 
    res.name.toLowerCase().includes(searchtext.toLowerCase())
    );
     props.updateRestaurants(filteredRestaurants); 
    }

   //Function to Filter and Render 4+ Top Rated Restaurants
   function fourPlusRestaurants() {
    let fourplusRest = props.filteredRestaurants.filter((res) => 
      res.avgRating >= 4)
    props.updateRestaurants(fourplusRest);
    
   }
 
  function fastDeliveryRestaurants() {
    let fastdeliveredRlist = props.filteredRestaurants.filter((res) => 
      parseInt(res.time)<= 30)
    console.log("Fast Delivered restaurants :",fastdeliveredRlist)
    props.updateRestaurants(fastdeliveredRlist);
  }

  function setDefaultRestaurants() {
    console.log("Restaurants: ",props.Restaurants)
    props.updateRestaurants(props.Restaurants); 
  }

    return (
   <>
  
   <div className="search-header">
   <input placeholder="Enter Restaurant Name"  type="text" onChange={(e) => {
    searchtext = e.target.value;
    filterrestfunction(searchtext)
   }} ></input>

   {/* This is not in sync with text in the input: 
    <button onClick={(e) => 
    filterrestfunction(searchtext)  }>Search</button> */}

   {/*   Button For 4+ rating*/}
   <button onClick={(e) => 
    (fourPlusRestaurants()) } className="header-btn">4+ Rating</button>
   
   <button onClick={(e) => 
    (fastDeliveryRestaurants())} className="header-btn" > Fast Delivery</button>
   
   <button onClick={(e) => 
    (setDefaultRestaurants())} className="header-btn"> Reset</button>
   
   </div>
   
   </>
    )
    //Similarly "Category or Cuisines " Filter can be implemented to update the UI based on specific user requirements
}
export default SearchComponent;