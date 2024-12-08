import React, {useState} from 'react';
import './sidemenu.css';
import navListData from '../data/navListData';
import NavListItem from './NavListItem';


export default function SideMenu() {
    const [navData, setNavData] = useState(navListData)
  return (
    <div className='sideMenu'>
      <a href="#" className="logo">
        <i className="bi bi-dpad-fill"></i>
        <span className='brand'>PlayZ</span>
        </a>
        <ul className="nav">
            {
                navData.map(item=>(
                    <NavListItem key={item._id} item={item} />
                ))
            }
        </ul>
    </div>
  )
}
