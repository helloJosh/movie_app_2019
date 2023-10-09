import React from "react";

function Food({fav}){
  console.log(props);
  return <h1>I like {fav}</h1>;
}

const foodILike = [
  {
    name : "1",
    image : "2"
  }
]

function App() {
  return( 
    <div>
      <h1>Hello</h1>
      <Food 
        fav="kimchi"
        something={true}
        papapapa ={["Hello",1,2,3,4,5]}
      />
    </div> 
  
  );
}

export default App;
