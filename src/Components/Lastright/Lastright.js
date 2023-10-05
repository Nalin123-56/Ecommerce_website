import React from 'react'
import "./lastright.css"

export default function Lastright(props) {
  return (
    <div className='fullcontainer'>
        <div className="imagefir">
            <img src={props.hedpone} alt="" className="firtst" />
            <div className="beats">
                <span className="beat">{props.topic}<br></br></span>
                <span className="review">{props.review}</span>
                <span className="pric">{props.price}</span>
            </div>
        </div>
    </div>
  )
}
