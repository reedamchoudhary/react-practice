import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Card from './Card'
import App from "./App"
import data from "./data"

// const ncard = (val) =>{
//   return (
//     <Card 
//     key = {val.id}
//     imagesrc = {val.imagesrc}
//     link =  {val.link}
//     title = {val.title}
//     name = {val.name}
//   />
//   )
// }

ReactDOM.render(
  <>
  {/* <h1>Following are the most popular series:</h1>
  
  
  {data.map(ncard)} */}

  <App />
  
  </>
  ,
  document.getElementById("root")
);