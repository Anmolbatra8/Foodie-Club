import './BodyComponent.css';
const RestaurantCard = (props) => {
    const {name, avgRating ,time ,cuisines,imageUrl,menu} = props.rest_details;
    return(
    
<div className="res-card">

<img className="res-img" src={imageUrl} alt="Restaurant Cover" />


<div className='res-details'>
<h3>{name}</h3>
<span>{avgRating} </span>
<i className="fa-solid fa-star"></i>  {/* Font Awesome Star Icon */}
<span>{time}</span>
<p className='cuisine-text'>{cuisines}</p>

</div>


</div>
)
}
export default RestaurantCard;