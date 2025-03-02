import React, { useState } from 'react'
import { MENU_LINKS } from '../utils/data';
import {Link} from 'react-scroll';
import a from '../assets/images/a.svg'
import Logo from '../assets/images/Logo.png'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className='container mx-auto sticky top-5 z-10'>
            <div className='flex justify-between items-center rounded-full bg-white/25 border border-[#fee6cc] backdrop-blur-[10px] m-5 p-3 md:p-0'>
                <img className='h-14 ml-6 mb-1' src={Logo} alt='logo' />
                <ul className={`${isOpen ? 'flex' : 'hidden'} menu-wrapper`}>
                    {MENU_LINKS.map((item) => (
                        <li key={item.id}>
                            <Link
                                 activeClass="active"
                                to={item.to}
                                smooth
                                spy
                                offset={item.offset}
                                className="menu-item"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className='hidden md:block h-15 text-[15px] font-medium text-white bg-[#d68a39] rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105'>Hire Me</button>
            </div>
        </nav>
    )
}

export default Navbar