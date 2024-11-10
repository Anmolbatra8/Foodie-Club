import './Cart.css';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
const Cart = () => {
     const {cart,addToCart,removeFromCart,calculateTotalPrice} = useContext(CartContext);
     const navigate = useNavigate();

    // const calculateTotalPrice = () => {

    //     return cart.reduce((total, item) => total + item.price, 0);
    // }
    
    return(
        <>
      

         {cart.length > 0 ? (
                <>
                 <div className='cart-container'>
                    <ul className='cart-list'>
                        {cart.map((item, index) => (
                            <li className="dish-name"  key={index}>{item.dishName} - Rs. {item.price}</li>
                        ))}
                    </ul>
                    <h4>Subtotal: Rs {calculateTotalPrice()}</h4>
                    <button className='proceed-checkout-btn'>Proceed To Payment</button>
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

        </>
    )
}
export default Cart;