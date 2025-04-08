import React, { useEffect, useState } from 'react';
import { MENU_LINKS } from '../utils/data';
import { Link } from 'react-scroll';
import Logo from '../assets/images/Logo.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    
    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth >= 768) {
                setIsOpen(false); 
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className='container mx-auto sticky top-5 z-10 relative'>
            <div className='flex justify-between items-center rounded-full bg-white/25 border border-[#fee6cc] backdrop-blur-[10px] m-5 p-3 md:p-0'>
                <img className='h-16 ml-6 object-contain' src={Logo} alt='logo' />  
                <button onClick={toggleMenu} className='block md:hidden text-[#333] mr-6 focus:outline-none'>
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>      
                
                <ul className="hidden md:flex items-center gap-8 px-8">
                    {MENU_LINKS.map((item) => (
                        <li key={item.id}>
                            <Link 
                                activeClass="active" 
                                to={item.to} 
                                smooth 
                                spy 
                                offset={item.offset} 
                                className="menu-item py-2 px-1 relative"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                
                {isOpen && (
                    <ul className="md:hidden absolute top-full left-0 right-0 bg-white/90 border border-[#fee6cc] rounded-lg shadow-lg mx-5 mt-2 p-4 space-y-3 z-50">
                        {MENU_LINKS.map((item) => (
                            <li key={item.id}>
                                <Link 
                                    activeClass="active" 
                                    to={item.to} 
                                    smooth 
                                    spy 
                                    offset={item.offset} 
                                    className="menu-item block py-2 px-4 hover:bg-gray-100 rounded transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}  
                <a href="https://drive.google.com/file/d/1hbdZWdXHBnNNtJqe7YmVVs9zcnalCgBV/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center justify-center h-16 px-8 text-[16px] font-semibold text-white bg-[#d68a39] rounded-full transition-all duration-300 ease-in-out hover:bg-[#b6732e] hover:scale-105 shadow-lg">
                    Resume
                </a>
            </div>
        </nav>
    );
};

export default Navbar;