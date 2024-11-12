import  './Header.css';
import { Link } from 'react-router-dom';
import { useState ,useContext} from 'react';
import { CartContext } from '../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

/*
This Component  will appear on Header of every page : 
the logo + navigation bar list 
*/

const Header = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(true);
    const {cart} = useContext(CartContext);

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    }
    return (
    <div className="header">
         
         <div className='logo-space'> <Link to='/'> <img className="logo-header" src="https://res.cloudinary.com/dyabjxxzp/image/upload/v1731102958/Khane_Ka_Shauk_text__Transparent_seucnc.png" alt="food aggregator logo" /> </Link>
         <Link to='/'> <p className='brand-name'>Khane Ka Shauk..</p> </Link>
          </div>
          
            {/* https://media.istockphoto.com/id/1138234161/vector/delivery-illustration.jpg?s=612x612&w=0&k=20&c=BXRhh9OYBOEbpfUD9DrO-aOLoyoqyzVj6s2EQyXQYRQ= */}
         <div className="nav-items">
            <ul>
                <Link to ='/'>Home</Link>
                <Link to ='/about'>About Us</Link> 
                <Link to ='/contact'>Contact Us</Link>
                <Link to='/cart' >Cart
                <FontAwesomeIcon icon={faShoppingCart} style={{ marginLeft: '8px' }} />
                {cart.length > 0 && (
          <span style={{
            position: 'absolute',
            color: 'gold',
            borderRadius: '50%',
            
            fontSize: '16px'
          }}>   
              
            {cart.length}
          </span>
        )}
                </Link>
                {/* <li>Sign in</li>
               { (isLoggedIn) ? <button onClick={toggleLogin}>Log Out</button> : <button onClick={toggleLogin}> Log In</button>
}  */}
           </ul>
        </div>
    </div>
    )
}
export default Header;