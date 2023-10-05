import React from 'react'
import Card from '../Card/Card'
import Dailydeals from '../Dailydeals/Dailydeals'
import Lastright from '../Lastright/Lastright'

export default function Inright() {
  return (
    <>
    <div className='fullcontainer'>
      <div className="cardcontainer">
        <Card/>
      </div>
    </div>
    <div className="daily"><Dailydeals/></div>
    <div className="lastri">
      <Lastright hedpone="/images/4.png" topic="Beats pro wireless headset" review="256 Reviews 1628 ordes" price="Price $320"/>
      <Lastright hedpone="/images/5.png" topic="Beats pro studio blue headset" review="205 Reviews 1906 ordes" price="Price $199"/>
      <Lastright hedpone="/images/16.png" topic="Apple Airpods Pro" review="364 Reviews 2757 ordes" price="Price $250"/>
      <Lastright hedpone="/images/3.png" topic="Beats new studio green headset" review="207 Reviews 1478 ordes" price="Price $220"/>
      <Lastright hedpone="/images/6.png" topic="Beats new studio black headset" review="356 Reviews 2128 ordes" price="Price $110"/>
      <Lastright hedpone="/images/17.png" topic="Beats new studio orange headset" review="156 Reviews 2528 ordes" price="Price $120"/>
      <Lastright hedpone="/images/5.png" topic="Beats new studio blue headset" review="256 Reviews 1628 ordes" price="Price $320"/>
      </div>
    </>
  )
}
