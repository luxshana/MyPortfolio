import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../Navbar/Navbar.css'
const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>

             
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={20} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#experience' onClick={closeMenu}>Experience</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>Skills</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>Contact me</a>
                    </li>
                   
                    
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
