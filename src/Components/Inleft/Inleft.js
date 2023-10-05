import React from 'react'
import Mainheadphone from '../Mainheadphone/Mainheadphone'
import Subheadphone from '../Subheadphone/Subheadphone'
import "./inleft.css"
import Bottomsite from '../Bottomsite/Bottomsite'


export default function Inleft() {
  return (
    <div className='mainheadphonee'>
      <Mainheadphone/>
      <div className="headphones">
        <Subheadphone image="/images/4.png" main="Original Beats Solo Pro" price="price $333.20"  decimal="4.9" buttone="+"/>
        <Subheadphone image="/images/5.png" main="Beats Studio3 Blutooth" price="price $119.25"  decimal="4.9" buttone="+"/>
        <Subheadphone image="/images/6.png" main="Beats Solo3 Wireless" price="price $11=99.31"  decimal="4.9" buttone="+"/>
      </div>
      <div className="bottomsitecontainer">
        <Bottomsite/>
      </div>

    </div>
  )
}



