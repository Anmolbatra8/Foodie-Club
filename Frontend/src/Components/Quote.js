import { useEffect,useState } from "react";


async function getQuotes () {
 let result = await fetch("https://dummyjson.com/quotes")
 return result;
}

const Quote = () => {

    const [quotes,setQuotes] = useState(null)
useEffect( ()=> {
    getQuotes().then((res)=> res.json())
             .then((data) => {
                console.log("data: ",data);
                setQuotes(data.quotes)
                
                console.log("State Data Quotes: ",quotes)
               console.log("Qote 1: ",quotes[1].quote)
             }) 
}       
    ,[])
    return(
    <>
    <h2>THis is Quote Component !</h2>
    {quotes ? (
        <>
       {quotes.map((e, index) => (
            <div className="Quote-card" key={e.id}>
            <p>
              "{e.quote}" </p> - <p><strong>-{e.author}</strong>
              </p>  
            </div>
          ))}
       </>
      ) : (
        <p>No quotes available</p>
      )}
  
  
  </>
  )
}

export default Quote;