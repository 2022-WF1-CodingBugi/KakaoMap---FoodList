import React, { useState } from 'react';
import './FoodList.css';
import { restaurant } from '../../Data/restaurant';


function FoodList() {
    const [name, compareName] = useState("");
    const [click, changeClicks] = useState(false);
    
    const list = restaurant.map((restaurant, i) =>
    <div className = 'Food-List-Item-div' key = {i}><p className='Food-List-Item' key = {i}  onClick = {() => {compareName(restaurant.name); changeClicks(!click);}}>
    🍚   [{restaurant.name}]  👍🏻 <span className = 'Food-List-like'>{restaurant.like}</span>   {restaurant.star}  {restaurant.explanation}</p>
    <div className = 'Food-List-Item-Image-div' key = {i} style = {{display : (name === restaurant.name && click ? "block" : "none")}}>
    <img className='Food-List-Item-Image' src = {restaurant.image} alt = {restaurant.name}/>
    <p>[ {restaurant.name} ]</p><p>📍 {restaurant.address}</p>🌐 <a href = {restaurant.kakao_map}> {restaurant.kakao_map}</a></div></div>)
   return <div className='Food-List-Container'>{list}</div>
}
  
export default FoodList
