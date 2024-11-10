import { useState,useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassStart } from '@fortawesome/free-solid-svg-icons';
import { useParams,useLocation, Link } from "react-router-dom";
import './RestaurantMenu.css';
import Cart from '../Components/Cart';
//Accessing Cart Context
import { CartContext  } from "../contexts/CartContext";
import StickyCartBar from "./StickyCartBar";
import CartConfirmationPopup from "./CartConfirmPopup";

const RestaurantMenu = (props) => {
  //  const [cart, setCart] = useState([]);
  const {cart,addToCart,removeFromCart,calculateTotalPrice,pendingItem,showPopup} = useContext(CartContext);


const {id} = useParams();
const params = useParams();
const { state } = useLocation();

//Optional chaining Navigation operator:
 const restaurant = state?.restaurant_Detail || {};
 if (!restaurant || Object.keys(restaurant).length === 0) {
     return <div>No restaurant details available</div>; // Handle case where restaurant is not found
 }   
//Restaurant of particular concern:
//const restaurant = restaurant_details.find((res) => res.id === parseInt(id));
console.log("Params recieved: ",id);  

//console.log("Which Restaurant is this: ",restaurant)

//Make sure data is updated with the body component copy to ensure both return synced results


// const removeFromCart = (dish) => {
//     setCart((prev) => prev.filter((item) => item.dishName !== dish.dishName));
// };
// const addToCart =(dish) => {
// setCart((prev)=> [...prev,dish]);
// console.log("Item added to cart: " , dish);
// console.log("Updated Cart: ", cart);

// }

// const calculateTotalPrice = () => {

//     return cart.reduce((total, item) => total + item.price, 0);
// }
//Fall Back Data: 
const restaurant_detais = [
    {   id:0,
        name:"Chinese Wok",
        avgRating:4.5 , 
        time:"30 mins",
        cuisines: "Chinese Fast Food",
        imageUrl: "https://b.zmtcdn.com/data/pictures/2/20437352/358ee886382866b32e82279dffbaa0ab_featured_v2.jpg"

    } ,
    {   id:1,
        name:"LunchBox: Meals and Thalis",
        avgRating:4.02 , 
        time:"30 mins",
        cuisines: "Biryani,North Indian , Punjabi",
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/14/2ae32ed3-56ac-41c2-849a-d06caeaf730e_62965.jpg"

    } ,
    {
        id:2,
        name:"The Oberoma",
        avgRating:4.0 , 
        time:"20 mins",
        cuisines: "Bakery Deserts",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/e6e85196-5078-454f-9994-0fcfd88015e9_58217.jpg"

    } ,
    {  
        id:3,
        name:"Chayoos: Chai + snacks =Relax",
        avgRating:4.5 , 
        time:"50 mins",
        cuisines: "Bakery Beverages Chaat",
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/2ce18342-6c04-4ebc-9725-788819ddaa56_107452.JPG"

    } , {  
        id:4,
        name:"McDonald's",
        avgRating:3.4 , 
        time:"35-40 mins",
        cuisines: "American",
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/8/a750ba79-2fd0-4f55-9aad-397cb584d0ba_253727.jpg"

    }
    , {  
        id:5,
        name:"Rama Ke Chole Bhature",
        avgRating:4.5 , 
        time:"30 mins",
        cuisines: "North Indian",
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/59980bedba3be7e4c6a208877b74fa32"

    } , {  
        id:6,
        name:"Nagpal Di Hatti",
        avgRating:3.1 , 
        time:"30-35 mins",
        cuisines: "North Indian",
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tbprrdfgtamn6tnexyxp"

    } , {  
        id:7,
        name:"Great Indian Khichdi By Eatfit",
        avgRating:4.6 , 
        time:"30 mins",
        cuisines: "Home Food North Indian",
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e44fd7f1e5cd9967edfe47c10247671"

    }, {  
        id:8,
        name:"DosaPrakash",
        avgRating:4.5 , 
        time:"40 mins",
        cuisines: "South Indian",
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b8345fb7339daec1b1dcd0d2d7d88773"

    } ,
    {
        id:9,
        name:"Bakingo",
        avgRating:5 , 
        time:"28 mins",
        cuisines: "Bakery,Desert",
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/5/30251c55-024a-45ea-ad65-028608b0ca9a_659837.JPG"

    } ,
    {
    id:10,
        name:"Burger King",
        avgRating:3.5 , 
        time:"20 mins",
        cuisines: "American",
        imageUrl:"https://b.zmtcdn.com/data/pictures/chains/8/310078/2b44f5f85208e5ddd40c5f5b8e8cec23_o2_featured_v2.jpg"

    } , 
    {
        id:11,
            name:"Natural Ice Cream",
            avgRating:4.8 , 
            time:"25-30 mins",
            cuisines: "Ice Cream , Deserts",
            imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/huwcwcxol7dnbemjlilq"
    
        }

]


return(
    <>
{/*      FALL BACK , In Case Dynamic Data not there : 
    <h4>This is a restaurant menu for id: {params.id} </h4>
    <p>This for {restaurant_detais[params.id].name}</p>
    <p>They are famous for {restaurant_detais[params.id].cuisines} </p>
    <h4>Here is their cover Image : </h4>
    <img src={restaurant_detais[params.id].imageUrl} alt={restaurant_detais[params.id].name} />
     */}
    
    {/* <div className="restaurant-menu">
     <h4>{restaurant.name}</h4>
     <img src={restaurant.imageUrl} alt={restaurant.name} className="restaurant-image" />
     <h4>Menu:</h4>
                    <ul className="menu-list">
                        {restaurant.menu.map((item, index) => (
                            <li key={index} className="menu-item">
                                <div className="dish-details">
                            <span className="dish-name">{item.dishName}</span>
                            <span className="dish-price">Rs. {item.price}</span>
                        </div>
                        <div className="dish-actions">
                            <button onClick={() => addToCart(item)} className="add-to-cart">Add to Cart</button>
                            <button onClick={() => removeFromCart(item)} className="remove-from-cart">Remove</button>
                        </div>
                            </li>
                        ))}
                    </ul>
                    <h4>Cart Items:</h4>
            {cart.length > 0 ? (
                <ul className="cart-list">
                    {cart.map((item, index) => (
                        <li key={index} className="cart-item">
                            {item.dishName} - Rs. {item.price}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty.</p>
            )}
                    </div> */}
    
      <div className="restaurant-menu">
       <h4>{restaurant.name}</h4> 
       <img src={restaurant.imageUrl} alt={restaurant.name} className="restaurant-image" />
       <p>{restaurant.time}
       <FontAwesomeIcon icon={faHourglassStart} style={{ fontSize: '14px', color: 'red', marginLeft : '4px' }} />

         </p>
       <h4 className="meu-item-text">What do You Want to Eat? </h4>

       
        <ul className="menu-list">
{            restaurant.menu.map((item,index) => {
              return(
                <li key={index} className="menu-item">
                    <div className="dish-details">
                   <span className="dish-name"> {item.dishName} </span> 
                   <span className="dish-price">Rs. {item.price}
                   </span>
                   {item.dishImg ? <img src = {item.dishImg} alt={index} /> : <></> }
                    </div>

                    <div className="dish-actions">
<button onClick={() => addToCart(item)} className="add-to-cart">Add to Cart</button>
                    <button onClick={() => removeFromCart(item)} className="remove-from-cart">Remove</button>
                    </div>
                </li>
              )
            })
}        </ul>
       {/* <h5>Cart Items: </h5>
        
        {
            cart.length > 0 ? 
        (   <> 
            <ul className="cart-list">
                {cart.map((c,index)=> {
                    return( 
                        <li key={index} className="cart-item"> {c.dishName} - Rs. {c.price} </li>
                    )

                })
         }
 <h4>Total Price: Rs. {calculateTotalPrice()}</h4> 
 

            </ul>
        </>    
        ) :
        <p>Cart Is empty</p>
        }
        
        <p>Cart Component: </p> */}

       {
       showPopup ? <> <CartConfirmationPopup /> </>: <p>Popup Not Required </p>
       }        

        <Link to={'/cart'}  >
        Proceed To Checkout
        </Link>
        {pendingItem ? <p>{pendingItem.dishName} </p> : <p>No Pending Item</p> }
        <Link to={'/cart'}>
        <StickyCartBar />
        </Link>
             </div>






    </>
)



}

export default RestaurantMenu;
