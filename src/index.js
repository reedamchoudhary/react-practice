import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Card from './Card'
import Data from "./Data"

// const attributes = {
// link: "https://www.netflix.com/in/title/70143860",
// imagesrc: "https://static.toiimg.com/thumb/msid-53363242,width-800,height-600,resizemode-75/53363242.jpg",
// name : "A Netflix Original Series",
// title : "The Vampire Diaries"
// }

function ncard(val){
  return(
    <Card 
    imagesrc = {val.imagesrc}
    link =  {val.link}
    title = {val.title}
    name = {val.name}
  />
  );
}

ReactDOM.render(
  <>
  <h1>Following are my favourite series:</h1>
  {/* <p>Hey there its the test</p> */}
  {Data.map(ncard)}
  
  </>
  ,
  document.getElementById("root")
);