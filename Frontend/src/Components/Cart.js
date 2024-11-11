import './Cart.css';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
const Cart = () => {
     const {cart,addToCart,removeFromCart,calculateTotalPrice} = useContext(CartContext);
     const navigate = useNavigate();
     const restaurant_id = cart[0].resid || null;
     

    // const calculateTotalPrice = () => {

    //     return cart.reduce((total, item) => total + item.price, 0);
    // }
    
    return(
        <>
      <div className='cart-page'>


      <div className='cart-bill-section'>
         {cart.length > 0 ? (
                <>
                 <div className='cart-container'>
                    <ol className='cart-list'>
                        {cart.map((item, index) => (
                            <li className="dish-name"  key={index}>{item.dishName} : Rs. {item.price}</li>
                        ))}
                    </ol>
                    <h4>Item Total: Rs {calculateTotalPrice()}</h4>
                    <p>Delivery Charges: Rs 30</p>
                    <p>Platform Fees: Rs 10</p>
                    <h4 className='to-pay-price-txt'>To Pay : Rs {calculateTotalPrice()+40} </h4>
                    </div>
                 
                </>
            ) : (
                <div className="empty-cart">
                    <h2>Oops! Your cart is feeling lonely 🤭</h2>
                    <p>Why not explore our amazing restaurants and find something delicious to add?</p>
                    <button className="explore-button" onClick={() => navigate("/")}>
                        Explore Restaurants 🍕🍔🍜
                    </button>
                </div>
            )}

            </div>

            <div className='cart-details-section'>
            <h4>Enter Address</h4>
            <input type='text' placeholder='Flat No and Locality' />
            <br />
            <br />
            <input type='text' placeholder='Landmark' />
            <br />
            <br />  
       <span>Select Adress Type: </span>  
          <select >
  <option value="Home">Home</option>
  <option value="Work">Work</option>
  <option value="Other">Other</option>
  
</select>
<br />
<br />

            <span>Select Payment Method: </span>
            <select >
  <option value="UPI">UPI</option>
  <option value="COD">COD</option>
  
</select>
            <br />
            <br />

            <button className='proceed-checkout-btn' onClick={()=> {
                console.log("Restaurant ID: ",restaurant_id );
            }}>Proceed To Payment</button>    
            <br />
            <br />

            </div>

            </div>
        </>
    )
}
export default Cart;