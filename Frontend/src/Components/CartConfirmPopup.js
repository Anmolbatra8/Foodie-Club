import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import RestaurantMenu from "./RestaurantMenu";
// import './CartConfirmPopup.css';
import './RestaurantMenu.css';
const CartConfirmationPopup = () => {
 const {onCancel,onConfirm} = useContext(CartContext);

    return(
        <>
        <div className="cart-confirm-popup">

    <h3>Items already in cart</h3>
    <p>Your cart contains items from another restaurant. Would you like to reset your cart to add items from this restaurant?</p>
    <button onClick={()=> onCancel()}>No</button>
    <button onClick={()=>onConfirm()}>Yes, Start Afresh</button>
   
  </div>
             
        </>
    )
}

export default CartConfirmationPopup;