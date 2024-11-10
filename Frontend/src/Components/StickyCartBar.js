import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const StickyCartBar = () => {
const {cart} = useContext(CartContext);
if(cart.length === 0) 
{
    return null;
}
return(
    <>
     <div style={{ position: 'fixed', bottom: 0, width: '50%',height : '6%' ,backgroundColor: 'black', color: 'white',fontSize:'22px', padding: '10px', textAlign: 'center' }}>
      {cart.length} item{cart.length > 1 ? 's' : ''} added
      <Link to = '/cart'>
      <button style={{  cursor: 'pointer',fontSize:'22px', marginLeft: '20px', backgroundColor: 'red', color: 'white' }}>View Cart</button>

      </Link>
    </div>

    </>
)
}

export default StickyCartBar;