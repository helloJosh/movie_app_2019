import React from "react";

function Food({fav}){
  console.log(props);
  return <h1>I like {fav}</h1>;
}

const foodILike = [
  {
    name : "1",
    image : "2"
  },
  {
    name : "2",
    image : "2"
  },
  {
    name : "3",
    image : "2"
  },
  {
    name : "4",
    image : "2"
  },
]

function App() {
  return( 
    <div>
      {foodILike.map(dish => <Food name={dish.name}/>)}
    </div> 
  
  );
}

export default App;
