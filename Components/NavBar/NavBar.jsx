import React, {useEffect, useState, useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'
//Creating UI/UX

import Style from './NavBar.module.css'; 
import { ChatAppContext } from '../../Context/ChatAppContext';
import { Model, Error } from '../index';

const NavBar = () => {
    const menuItems = [
      {
        menu: "All Users",
        link: "alluser",
      },
    ]
  return (
    <div className={Style.Navbar}>
      <div className={Style.NavBar_box}></div>
    </div>
  )
}

export default NavBar