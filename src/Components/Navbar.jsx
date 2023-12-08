import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [toggel, setToggel] = useState( );
    return (
        <div className='bg-[#faf4f4] shadow-black shadow-md p-3'>
            <div className='max-w-[1240px] px-6 py-[10px] items-center  mx-auto flex justify-between'>
                <div data-aos="fade-right" className='text-3xl font-bold text-green-600 font-[mv boli]'>eStudy </div>

                {
                    toggel ?
                        <AiOutlineClose onClick={() => setToggel(!toggel)} className='text-black text-2xl md:hidden block' />
                        :
                        <AiOutlineMenu onClick={() => setToggel(!toggel)} className='text-black text-2xl md:hidden block' />
                }



                <ul  className='md:flex hidden text-black font-bold gap-10   ' >
                    <li className='text-[18px]  '>
                       <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className='text-[18px]'>  <NavLink to='/About'>About</NavLink></li>
                    <li className='text-[18px]'>  <NavLink to='Course'>Course</NavLink></li>
                    <li className='text-[18px]'>  <NavLink to='/Reviews'>Reviews</NavLink></li>
                    
                    <li className='text-[18px]'>  <NavLink to='/Contact'>Contact</NavLink></li>
                </ul>
               
                {/* Responsive */}
                <ul  className={` md:hidden text-white fixed w-full left-0 h-[60vh] px-2  bg-[#000]  top-[80px]  ${ toggel ? "left-[0]" : "left-[-100%]"}`} >
                <li className='text-[18px]  mx-10 my-5'>
                       <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className='text-[18px] mx-10 my-5'>  <NavLink to='/About'>About</NavLink></li>
                    <li className='text-[18px]  mx-10 my-5'>  <NavLink to='Course'>Course</NavLink></li>
                    <li className='text-[18px] mx-10 my-5'>  <NavLink to='/Reviews'>Reviews</NavLink></li>
                    
                    <li className='text-[18px] mx-10 my-5'>  <NavLink to='/Contact'>Contact</NavLink></li>
                    
            </ul>
         
        </div>
    </div >
  )
}

export default Navbar