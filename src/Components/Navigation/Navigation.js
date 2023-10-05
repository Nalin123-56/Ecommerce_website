import React from 'react'
import "./navigation.css"
import ListIcon from '@mui/icons-material/List';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';


export default function Navigation() {
  return (
    <div className="navigationmain">
        <div className="navigationcontainer">
            <div className="headphone">
                <span className="headcontainer">Headphone</span><br></br>
                <span className="from">From top brands</span>
            </div>
            <div className="inputsearch">
                <input type="text" className="search" placeholder='search product'/>
            </div>
            <div className='mainicon'>
            <div className="icon">
            <ListIcon className='iconlist1'/>
            <EmailIcon className='iconlist'/>
            <NotificationsActiveIcon className='iconlist'/>
            </div>
            </div>
            <div className="profileimg">
                <img src="/images/profile.jpg" alt="" className="profile" />
            </div>
        </div>

    </div>
  )
}
