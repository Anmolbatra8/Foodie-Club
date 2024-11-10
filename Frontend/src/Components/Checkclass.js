import React from "react";
class Checkclass extends React.Component {
    
     constructor(props) {
        super(props);
        this.state = {color:"red",
        products: {}  
        };
        console.log("Constructor called");
     }
  // when all DOM elements are mounted initially
   componentDidMount() {
    console.log("Componenet did mount");
    fetch('https://dummyjson.com/products/1')
            .then(res => res.json())
            .then(data => 
                this.setState({products: data}))
   
                
            }
   
//when state updates and after render is called again
componentDidUpdate() {
    console.log("Component did update function");
    
}

componentWillUnmount() {
    console.log("Comp will unMount executed in class comp");
    
}

  changeState = () => {
   this.setState({color:"pink"}
   )
 }
    render() {
            return (
            <>
         {  console.log("Render function called") }
     <h3>This is a class Component! </h3>
     
     
      <h4>This is State Object porperty : {this.state.color}</h4> 
       <button onClick={this.changeState}>Change</button>      
     <h3> { this.state.products.title }  </h3> 
     <h4>Received from  parent : {this.props.colour}</h4>
     
      </>
            )
            
    }
}
export default Checkclass;