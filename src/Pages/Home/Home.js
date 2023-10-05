import React from 'react'
import "./home.css"
import Leftside from '../../Components/Leftside/Leftside'
import Navigation from '../../Components/Navigation/Navigation'
import Rightside from '../../Components/Rightside/Rightside'

export default function Home() {
  return (
      <div className='container'>
        <Leftside/>
      <Rightside/>
  
    </div>
  )
}
