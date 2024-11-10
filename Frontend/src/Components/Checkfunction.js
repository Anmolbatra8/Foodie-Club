import { useEffect } from "react";

const Checkfunction = () => {

    function Getproducts() {
        useEffect(()=> {
            fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => console.log(data));
        },[])
    }
return (
    <>
    <br />
    <h3>This is CheckFunction  Component !</h3>
    <br />  
    {Getproducts()}
    <h4>Next LLL</h4>
    </>
)
}

export default Checkfunction;