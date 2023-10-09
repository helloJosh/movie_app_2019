import React from "react";
import PropTypes from "prop-types";

function Food({name, picutre, rating}){
  console.log(props);
  return (
    <div>
      <h1>I like {fav}</h1>;
      <h3>{rating}/5.0</h3>
      <img src = {picture}/>
    </div>
    );
}
function renderFood(dish){
  return <Food name={dish.name} picture={dish.image} rating = {dish.rating}/>;
}

Food.propTypes ={
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.string.isRequired
}

const foodILike = [
  {
    name : "1",
    image : "2",
    rating : "1"
  },
  {
    name : "2",
    image : "2",
    rating : "1"
  },
  {
    name : "3",
    image : "2",
    rating : "1"
  },
  {
    name : "4",
    image : "2",
    rating : "1"
  },
]

function App() {
  return( 
    <div>
      {foodILike.map(dish => <Food name={dish.name} picture ={dish.image} rating = {dish.rating}/>)}
    </div> 
  
  );
}

export default App;
