import React from 'react'
import "./bottomsite.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Bottomsite() {
  return (
    <>
    <div className='Explore'>
        <div className="container">
        <span className="explo">Explore Polular Categories</span>
        <span className="seeall">See all </span></div>
        <div className='arrow'><ArrowForwardIcon className='arrowicon'/></div>
    </div>

    <div className="fullcontainer">
    <div className="leftbottom">
        <div className="cycleimg">
            <img src="/images/7.png" alt="" className="lenovo" />
            <img src="/images/8.png" alt="" className="lenovo" />
            <img src="/images/9.png" alt="" className="lenovo" />
            <img src="/images/10.png" alt="" className="lenovo" />
        </div>
        <div className="populer">
            <span className="pop">Populer 10 brand</span>
            <span className="order"><br></br>5400 + Orders & reviews</span>
        </div>
    </div>

    <div className="leftbottom">
        <div className="cycleimg">
            <img src="/images/11.png" alt="" className="lenovo" />
            <img src="/images/13.png" alt="" className="lenovo" />
            <img src="/images/14.png" alt="" className="lenovo" />
            <img src="/images/11.png" alt="" className="lenovo" />
        </div>
        <div className="populer">
            <span className="pop">Newest Sellers</span>
            <span className="order"><br></br>4600 + Orders & reviews</span>
        </div>
    </div>
    </div>
</>
  )
}
