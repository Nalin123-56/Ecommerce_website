import React from 'react'
import "./leftside.css"
import HeadphonesIcon from '@mui/icons-material/Headphones';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartoIcn from '@mui/icons-material/ShoppingCart';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Person2Ion from '@mui/icons-material/Person2';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Leftside() {
  return (
    <div className='leftside'>
      <div className="logo">
        <div className="headphoneicon">
          <HeadphonesIcon className='logoicon'/>
          <section className="soundix">Soundix..</section>
        </div>
        
        <div className="leftpane">
          <div className='leftcon'>
          <div className="leftcontainer">
        <div className="navigationlist">
          <li className='menustyle'><HomeIcon className='menu'/> </li>
          <spam className="nameofmenu">Home</spam>
        </div>

         <div className="navigationlist">
          <li className='menustyle'><AccessTimeFilledIcon/></li>
          <spam className="nameofmenu">Explore</spam>
          </div>
          <div className="navigationlist">
          <li className='menustyle'><FavoriteIcon/></li>
          <spam className="nameofmenu">Saved</spam>
          </div>
          <div className="navigationlist">
          <li className='menustyle'><ShoppingCartoIcn/></li>
          <spam className="nameofmenu">Cart</spam>
          </div>
          <div className="navigationlist">
          <li className='menustyle'><BusinessCenterIcon/></li>
          <spam className="nameofmenu">Prchase History</spam>
          </div>
          <div className="navigationlist">
          <li className='menustyle'><Person2Ion/></li>
          <spam className="nameofmenu">Profile</spam>
          </div>
          <div className="navigationlist">
          <li className='menustyle'><LibraryBooksIcon/></li>
          <spam className="nameofmenu">Selling</spam>
          </div>
          <div className="navigationlist">
          <li className='menustyle'><MessageIcon/></li>
          <spam className="nameofmenu">Contact Us</spam>
          </div>
          <div className="navigationlist">
          <li className='menustyle'><SettingsIcon/></li>
          <spam className="nameofmenu">Setting</spam>
          </div>
          
        
          </div>
        </div>

        <div className="leftimg">
          <img src="/images/1.png" alt="" className="lefthandimg" />
          <div className="picbutton">
            <img src="/images/2.png" alt="" className="picbutton1" />
          </div>
          <div className="needhelp">
            <spam className="need">Need Help</spam>
          </div>
          <div className="about">
            <spam className="aboutacc">
              About account Management <br/>ordering & payment refund <br></br>and FAQ
            </spam>
          </div>
          <button className="customer">Customer Service</button>
        </div>
        </div>
        </div>
      </div>
    
  )
}
