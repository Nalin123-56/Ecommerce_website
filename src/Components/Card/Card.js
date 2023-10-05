import React from 'react'
import "./card.css"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Card() {
  return (
    <div className='cardsector'>
        <div className="summer">
            <span className="sum">Summer headphones from top brands</span>
        </div>

    <div className="bottomcard">
        <div className="buyit">
            <span className="buy">Buy it now</span>
            <div className="arrowicon"><ArrowRightAltIcon/></div>
        
        <div className="imagessec">
            <div className="handfre">
                <img src="/images/4.png" alt="" className="handfn" />
                <img src="/images/15.png" alt="" className="handf" />
                
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}
