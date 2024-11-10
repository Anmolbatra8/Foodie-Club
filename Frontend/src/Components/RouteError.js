import { useRouteError } from "react-router-dom";
const RouteError = () => {
    const err = useRouteError();
    const {data,status} = err;
   
    return (
  <>
  <h2>Hey ! You are on the wrong route buddy !</h2>
  <h3> {`${data}`} </h3>
  <h3> {`${status}`} </h3>
  </>
    )
}
export default RouteError;