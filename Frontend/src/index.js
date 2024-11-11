import React from 'react';
import ReactDOM from 'react-dom/client';

//css
import './index.css';

//Other Components to be used here
import App from './App';
import About from './Components/About';
import Contact from './Components/Contact';


//idk why these are here:
import reportWebVitals from './reportWebVitals';
//this is for star icon xd
import '@fortawesome/fontawesome-free/css/all.min.css';

//to implement client side routing:
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//Error top be shown on wrong path
import RouteError from './Components/RouteError';
import BodyComponent from './Components/BodyComponent';
import RestaurantMenu from './Components/RestaurantMenu';
import Cart from './Components/Cart';


//Creating a variable to store routes in it
const appRoute = createBrowserRouter([
{
  path   : "/",
  element : <App />,
  errorElement: <RouteError />,
  children : [
    {
      path:"/",
      element: <BodyComponent />
    }  
    ,{
      path:"/about",
      element: <About /> ,
  

    } ,{
      path:"/contact",
      element: <Contact />
    } ,
    {
      path:"restaurant/:id",
      element: <RestaurantMenu />
    },
    {
      path:"/cart",
      element: <Cart />
    }
  ]
} 
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={appRoute}></RouterProvider>
 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
