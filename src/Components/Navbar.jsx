import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
                       <a href=""> Home</a>
                    </li>
                    <li className='text-[18px]'><a href="">About uS</a></li>
                    <li className='text-[18px]'><a href="">Course</a></li>
                    <li className='text-[18px]'><a href="">Reviews</a></li>
                    
                    <li className='text-[18px]'><a href="">Contact us</a></li>
                </ul>
               
                {/* Responsive */}
                <ul  className={` md:hidden text-white fixed w-full left-0 h-[60vh] px-2  bg-[#000]  top-[80px]  ${ toggel ? "left-[0]" : "left-[-100%]"}`} >
                <li className='text-[18px] mx-10 py-5'>
                       <a href=""> Home</a>
                    </li>
                    <li className='text-[18px] mx-10 py-5'><a className=''href="">About uS</a></li>
                  
                    <li className='text-[18px] mx-10 py-5'><a className=''href="">Course</a></li>
                
                    <li className='text-[18px] mx-10 py-5'><a className=''href="">Reviews</a></li>
                    <li className='text-[18px] mx-10 py-5'><a className='' href="">Contact us</a></li>
                    
            </ul>
         
        </div>
    </div >
  )
}

export default Navbar