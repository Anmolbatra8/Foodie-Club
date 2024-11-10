import { useContext } from "react";

const Usergreeting = (props) => {
    return(
        (props.isLogined) ? (<>
         <h3>Welcome You are loggid in {props.username} </h3>
        </>)  : (<>
         <h2>Sorry You are logged out </h2>
        </>)
    )
     
  }
export default Usergreeting;