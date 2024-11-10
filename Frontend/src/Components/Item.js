import { Cartcontext} from "../Contexts/Cartcontext";
import { useContext,useState } from "react";
const Item = (props) => {
  const cart = useContext(Cartcontext); 
    console.log("Cart Object:" + cart);
    return(
        <>
        <h4>{props.name}</h4>
        <p>Price : ${props.price}</p>
        <button  onClick={()=>{
            cart.setItems([...cart.items,{name:props.name,price:props.price}])
           console.log("Updated Items:  ",cart.items);
        } } >Add To Cart</button>
        </>
    )
}

export default Item;