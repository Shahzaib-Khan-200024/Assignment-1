import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    return (
        <div className='container pt-8'>
            <div className='flex justify-between items-center'>
                {/* Logo */}
                <div className='text-4xl font-medium cursor-pointer text-green-500'>
                    Shahzaib
                </div>
                
                {/* Navigation Links */}
                <ul className='gap-10 lg:gap-16 hidden md:flex'>
                    {["Home", "About", "Projects", "Skills", "Contact"].map((item, index) => (
                        <li key={index} className='menuLink text-xl transition-transform duration-300 hover:scale-110'>
                            <a href={`#${item.toLowerCase()}`} className='relative group'>
                                {item}
                                {/* Underline Animation */}
                                <span className='block absolute bottom--20 left-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full'></span>
                            </a>
                        </li>
                    ))}
                </ul>
                
                {/* Menu Icon for Mobile */}
                <AiOutlineMenu className='md:hidden cursor-pointer' size={30} />
            </div>
        </div>
    );
}

export default Navbar;
