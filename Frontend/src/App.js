import './App.css';
import Header from './Components/Header';
import BodyComponent from './Components/BodyComponent';
import Footer from './/Components/Footer';
import { Outlet } from 'react-router-dom';
import { CartProvider } from '../src/contexts/CartContext';
//import appStore from 'C:\VS Code\React\Gfg Class\one-app\common\appStore.js';
function App() {

  /*
1)Header
-Left: logo
-Right: Menu Nav Bar


2)Body
-Search Restaurants field
-Restaurant cards and display


3)Footer
-basic About us
-Links to all pages
-Company Information
  */
  return (
  // <Provider store={appStore}>

   <>
   <CartProvider>
    <Header />
   <Outlet />
   <Footer/>
   </CartProvider>
    {/* </Provider > */}
   </>
 
);
}

export default App;
