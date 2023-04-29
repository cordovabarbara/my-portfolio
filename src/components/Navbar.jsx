import React from 'react'
import {RxHome} from 'react-icons/rx'
import {BsBriefcase,BsChatRightText,BsPerson} from 'react-icons/bs'
import { Link } from 'react-scroll'
import './styles/navbar.css'



const Navbar = () => {
  return (
    <div className='navbar'>
      <Link>
        <ul className='navbar__list'>
          <li className='navbar__item'><RxHome/></li>
          <li className='navbar__item'><BsPerson/></li>
          <li className='navbar__item'><BsBriefcase/></li>
          <li className='navbar__item'><BsChatRightText/></li>
        </ul>
      </Link>
    </div>
  )
}

export default Navbar