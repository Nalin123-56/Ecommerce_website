import React from 'react'
import "./mainheadphne.css"
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';


export default function Mainheadphone() {

const[count, setCount]=useState(0);

const increment = () => {
  setCount(count+1);
}

const decrement = () => {
  setCount(count-1)
}




const[imag,setimag]=useState("/images/3.png");

const greenone = ()=>{
  setimag("/images/3.png")
}

const roseone = ()=>{
  setimag("/images/4.png")
}

const blackone = ()=>{
  setimag("/images/6.png")
}

const redone = ()=>{
  setimag("/images/5.png")
}






  return (
<div className='mainheadphone'>
  <div className="mainheadphonecontainer">
    <div className="mainpic">
      
      <img src={imag} alt="" className="largepic" />
   
    
    </div>
    
    <div className="description">
      <div className="beats">
        <span className="beatss">Beats Studio Wireless Headphone</span>
      </div>
      <div className="star">
        <span className="stars">
          <StarIcon className='sta'/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
        </span>
        <div className="reviews">(2000 + Reviews)</div>
      </div>
      <div className="ergonomic">
        <span className='ergo'>Ergonomic eat cups with on-ear controls Up to 22 hours </span>
      </div>
      <div className='ergonomic'>
      <span className='ergo'>of listening time.Apple Wl Chips &Class Wireless Bluetooth.</span>
      </div>
      <div className="price">
        <span className="prices">Price $349.95</span>
      </div>
      <div className="color">
        <div className="colorcontainer">Color</div>
        <div onClick={greenone} className="green"></div>
        <div onClick={roseone} className="rose"></div>
        <div onClick={blackone} className="black"></div>
        <div onClick={redone} className="red"></div>
        <div className="minze">
          <button onClick={decrement}className="minbutton">-</button>
          <span className="changenumber">{count}</span>
          <button onClick={increment} className="maxbutton">+</button>
        </div>
      </div>
      <div className="bottemsecter">
        <div className="heart" > <FavoriteIcon /></div>
        <div className="addcart">
          <button className="cart">Add to cart</button>
        </div>
        <div className="buynow">
          <button className="buyno">Buy now</button>
        </div>
      </div>
    </div>
  </div>  
</div>
  )
}
