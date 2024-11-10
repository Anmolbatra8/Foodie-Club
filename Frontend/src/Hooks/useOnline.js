import { useState,useEffect } from "react"

//This hook will check whether user is online or offline and  return a bolean
export const useOnline = () => {
const [isOnline,setIsOnline] = useState(true);  


useEffect(() => {
const handleOnline = () => {
    setIsOnline(true);
    console.log("online event listened to");
}
const handleOffline = () => {
    setIsOnline(false);
    console.log("offline event listened to");
}


window.addEventListener("online",handleOnline);

window.addEventListener("offline",handleOffline);
    

return () => {
    window.removeEventListener("online",handleOnline);
    window.removeEventListener("offline",handleOffline);
}
},[]);
return isOnline;

}