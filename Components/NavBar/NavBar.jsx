import React, {useEffect, useState, useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'
//Creating UI/UX

import Style from './NavBar.module.css'; 
import { ChatAppContext } from '../../Context/ChatAppContext';
import { Model, Error } from '../index';
import images from "../../assets"

const NavBar = () => {
    const menuItems = [
      {
        menu: "All Users",
        link: "alluser",
      },
      {
        menu: "CHAT",
        link: "/",
      },
      {
        menu: "SETTINGS",
        link: "/",
      },
      {
        menu: "FAQ",
        link: "/",
      },
      {
        menu: "TERMS OF USE",
        link: "/",
      },
      
    ];

  //usestate
   const [active, setActive] = useState(2);
   const [open, setOpen] = useState(false);
   const [openModel, setOpenModel] = useState(false);

   const {account, userName, connectWallet} = useContext(ChatAppContext);
  return (
    <div className={Style.Navbar}>
      <div className={Style.NavBar_box}></div>
      <div className={Style.Navbar_box_left}>
        <Image src={images.logo} alt="logo" width={300} height={75} />
      </div>
      <div className={Style.Navbar_box_right}>
        <div className={Style.Navbar_box_right_menu}>
          {menuItems.map((el, i)=> (
            <div onClick={()=> setActive(i + 1)} key= {1 + 1} className={`$
              {Style.Navbar_box_right_menu_items} ${active == i + 1 ? Style.active_btn : ""
              }}`}
            >
              <Link 
                className={Style.Navbar_box_right_menu_items_link}
                href={el.link}
              >
                {el.menu}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NavBar