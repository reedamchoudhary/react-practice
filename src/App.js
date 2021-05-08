import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Card from './Card'
import data from "./data"

const ncard = (val) =>{
  return (
    <Card 
    key = {val.id}
    imagesrc = {val.imagesrc}
    link =  {val.link}
    title = {val.title}
    name = {val.name}
  />
  )
}

const App = ()=>(
  <>
  <h1>Following are the most popular series:</h1>
  
  
  {data.map(ncard)}
  
  </>
  
);

export default App