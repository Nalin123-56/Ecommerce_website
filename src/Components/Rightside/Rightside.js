import React from 'react'
import "./rightside.css"
import Navigation from '../Navigation/Navigation'
import Inleft from '../Inleft/Inleft'
import Inright from '../Inright/Inright'




export default function Rightside() {
  return (
    <div className='rightside'>
    <div className='navvigation'><Navigation/></div>
    <div className="inmain">
      <div className="leftcontainer"><Inleft/></div>
      <div className="rightcontainer"><Inright/></div>
    </div>
    </div>
  
  )
}
