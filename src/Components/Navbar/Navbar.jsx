
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

export default function Navbar({ setNavbarHeight }) {
  


    useEffect(() => {
        const navbar = document.querySelector('nav');
        if (navbar) {
          setNavbarHeight(navbar.offsetHeight);
        }
      }, []); 
     
  
  return <>
  
  <nav className=' py-4 bg-[#2C3E50] w-screen fixed z-30'>
      
    <div className='container  flex justify-between text-white py-5 px-32 '>
        <div className='leftPart'>
                <Link to="home" className='text-3xl font-bold'>START FRAMEWORK</Link>
        </div>
        <div className='RightPart divide-x-8 divide-transparent font-bold flex items-center'>
                
        <NavLink to="about" className='mr-7'>ABOUT</NavLink>
        <NavLink to="portfolio" className='mr-7'>PORTFOLIO</NavLink>
        <NavLink to="contact">CONTACT</NavLink>
        </div>
    </div>

  </nav>
  
  </>
}
