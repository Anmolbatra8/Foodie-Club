import { Outlet } from "react-router-dom";
import Hotels from "../Api/Hotels";
const About = () => {
  return(
    <>
    <h2>Welcome to About Component</h2>
    <Outlet />
    <Hotels />
    
    </>
  )
}

export default About;

