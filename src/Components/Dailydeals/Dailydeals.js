import React from 'react'
import "./dailydeals.css"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Dailydeals() {
  return (
    <div className='mid'>
        <div className="dai">
            <da className="span">Daily Deals</da>
        </div>
        <div className="viewall">
            <span className="view">view all</span>
            <div className="arro"><ArrowRightAltIcon/></div>
        </div>
    </div>
  )
}
