import React from 'react'
import "./subheadphone.css"
import StarIcon from '@mui/icons-material/Star';

export default function Subheadphone(props) {
  return (
    <div className='subheadphone'>
        <div className="subhead">
            <div className="imagehead">
                <img src={props.image} alt="" className="image" />
            </div>
            <div className="original">
                <span className="org">
                    {props.main}
                </span>
                <div className="Price">{props.price}</div>
            </div>
            <div className="bottom">
                <div className="star"><StarIcon/></div>
                <div className="four">{props.decimal}</div>
                <div className="cyclebutton">
                    <span className="butto">{props.buttone}</span>
                </div>
            </div>
        </div>
    </div>
  )
}
