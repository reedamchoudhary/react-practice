import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Card from './Card'
import data from "./data"

// const attributes = {
// link: "https://www.netflix.com/in/title/70143860",
// imagesrc: "https://static.toiimg.com/thumb/msid-53363242,width-800,height-600,resizemode-75/53363242.jpg",
// name : "A Netflix Original Series",
// title : "The Vampire Diaries"
// }


ReactDOM.render(
  <>
  <h1>Following are the most popular series:</h1>
  
  <Card 
    imagesrc = "https://static.toiimg.com/thumb/msid-53363242,width-800,height-600,resizemode-75/53363242.jpg"
    link =  "https://www.netflix.com/in/title/70143860"
    title = "The Vampire Diaries"
    name = "A Netflix Original Series"
  />
  <Card 
    imagesrc = "https://static.toiimg.com/thumb/msid-53363242,width-800,height-600,resizemode-75/53363242.jpg"
    link =  "https://www.netflix.com/in/title/70143860"
    title = "The Vampire Diaries"
    name = "A Netflix Original Series"
  />
  <Card 
    imagesrc = "https://static.toiimg.com/thumb/msid-53363242,width-800,height-600,resizemode-75/53363242.jpg"
    link =  "https://www.netflix.com/in/title/70143860"
    title = "The Vampire Diaries"
    name = "A Netflix Original Series"
  />
  <Card 
    imagesrc = "https://static.toiimg.com/thumb/msid-53363242,width-800,height-600,resizemode-75/53363242.jpg"
    link =  "https://www.netflix.com/in/title/70143860"
    title = "The Vampire Diaries"
    name = "A Netflix Original Series"
  />
  
  </>
  ,
  document.getElementById("root")
);