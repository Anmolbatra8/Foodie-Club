import {  createContext,useEffect,useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  //this checks if there is some initial cart value in local storage:
  const initialCart = JSON.parse(sessionStorage.getItem('cartData')) || [];
 
  const[cart,setCart] = useState(initialCart);
  const[showPopup,setShowPopup] = useState(false);
  const[pendingItem,setPendingItem] = useState(null);

  useEffect(() => {
   sessionStorage.setItem('cartData',JSON.stringify(cart));
   console.log("Inside useEffect- Session storage Updated",sessionStorage.getItem('cartData'))
  },[cart])

    //when someone cancels the popup 
    const onCancel = () => {
      console.log("User wants to continue with existing Restaurant Cart");
      setShowPopup(false);
      setPendingItem(null)       
    }
   


    //when someone confirms
    const onConfirm = () =>  {
  console.log("User clicked confirm , now new cart with pending Item")
   //user wants to reset their cart with pending item
   setCart([pendingItem])
   setShowPopup(false);
   setPendingItem(null)    

}
 
function checer() {
  console.log("Checer Function executed");
}

    const addToCart = (item) => {
        if(cart.length === parseInt(0))
        { setCart((prev) => [...prev, item]); }
        
        else
          {
          if(item.resid === parseInt(cart[0].resid)) {
            console.log("Fair")
            setCart((prev) => [...prev, item]);
          } 
          else {

            //Show Popup
            setShowPopup(true);
            //make this a pending item
            setPendingItem(item);
            console.log("Pending Item: ",pendingItem);
            console.log("Unfair Unacceptable")
          }
         }    
        
      };
      const getItemCount = () => {
        return cart.length;
      };
      // Function to remove an item from the cart
      const removeFromCart = (item) => {
        setCart((prev) => prev.filter((cartItem) => cartItem.dishName !== item.dishName));
             
      };


       // Calculate total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, calculateTotalPrice ,pendingItem,showPopup,onCancel,onConfirm,checer}}>
          {children}
    </CartContext.Provider>
  )
}