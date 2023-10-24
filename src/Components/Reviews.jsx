import React, { useRef, useState } from 'react';
import pic1 from '../assets/pic-1.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {ImQuotesLeft, ImQuotesRight} from "react-icons/im"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <div className=' md:max-w-[1240px] m-auto max-w-[300px] m-auto'>
    <div>
        <h1 data-aos="fade-right" className='text-center font-bold text-3xl md:text-4xl'><span className=' text-green-500 '>Our</span> Reviews </h1>
        </div>
      <Swiper data-aos="fade-down"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       
        <SwiperSlide>
            <div className='content-center mt-10  shadow-4xl '>
        <ImQuotesLeft className='ml-20  text-yellow-400 md:ml-[450px] '/>
            <h1 className='font-bold text-2xl md:text-3xl  text-center text-green-400'>Mr David</h1>
            
            <p className=' font-bold text-[12px] md:text-1xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                 Nisi tempore possimus dignissimos unde <br/>
                 rerum maiores id sequi fugiat modi error.</p>

                 
                 <img src={pic1} alt=""  className='h-[50px] items-center ml-40 md:ml-[600px] rounded-3xl mt-7'/>
                 <ImQuotesRight className='ml-[300px] text-yellow-400 md:ml-[800px] mb-20'/>
            </div></SwiperSlide>
        <SwiperSlide> <div className='content-center mt-10 '>
        <ImQuotesLeft className='ml-20 md:ml-[450px] text-yellow-400 '/>
            <h1 className='font-bold text-2xl md:text-3xl  text-center text-green-400'>Mr David</h1>
            
            <p className=' font-bold text-[12px] md:text-1xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                 Nisi tempore possimus dignissimos unde <br/>
                 rerum maiores id sequi fugiat modi error.</p>

                 
                 <img src={pic1} alt=""  className='h-[50px] items-center ml-40 md:ml-[600px] rounded-3xl mt-7'/>
                 <ImQuotesRight className='ml-[300px] md:ml-[800px] text-yellow-400 mb-20'/>
            </div></SwiperSlide>
        <SwiperSlide><div className='content-center mt-10 '>
        <ImQuotesLeft className='ml-20 text-yellow-400  md:ml-[450px] '/>
            <h1 className='font-bold text-2xl md:text-3xl  text-center text-green-400'>Mr David</h1>
            
            <p className=' font-bold text-[12px] md:text-1xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                 Nisi tempore possimus dignissimos unde <br/>
                 rerum maiores id sequi fugiat modi error.</p>

                 
                 <img src={pic1} alt=""  className='h-[50px] items-center ml-40 md:ml-[600px] rounded-3xl mt-7'/>
                 <ImQuotesRight className='ml-[300px] text-yellow-400 md:ml-[800px] mb-20'/>
            </div></SwiperSlide>
        <SwiperSlide><div className='content-center mt-10 '>
        <ImQuotesLeft className='ml-20 text-yellow-400 md:ml-[450px] '/>
            <h1 className='font-bold text-2xl md:text-3xl  text-center text-green-400'>Mr David</h1>
            
            <p className=' font-bold text-[12px] md:text-1xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                 Nisi tempore possimus dignissimos unde <br/>
                 rerum maiores id sequi fugiat modi error.</p>

                 
                 <img src={pic1} alt=""  className='h-[50px] items-center ml-40 md:ml-[650px] rounded-3xl mt-7'/>
                 <ImQuotesRight className='ml-[300px] text-yellow-400 md:ml-[800px] mb-20'/>
            </div></SwiperSlide>
        <SwiperSlide><div className='content-center mt-10 '>
        <ImQuotesLeft className='ml-20 text-yellow-400 md:ml-[450px] '/>
            <h1 className='font-bold text-2xl md:text-3xl  text-center text-green-400'>Mr David</h1>
            
            <p className=' font-bold text-[12px] md:text-1xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                 Nisi tempore possimus dignissimos unde <br/>
                 rerum maiores id sequi fugiat modi error.</p>

                 
                 <img src={pic1} alt=""  className='h-[50px] items-center ml-40 md:ml-[600px] rounded-3xl mt-7'/>
                 <ImQuotesRight className='ml-[300px] text-yellow-400 md:ml-[800px] mb-20'/>
            </div></SwiperSlide>
        <SwiperSlide><div className='content-center mt-10 '>
        <ImQuotesLeft className='ml-20 text-yellow-400 md:ml-[450px] '/>
            <h1 className='font-bold text-2xl md:text-3xl  text-center text-green-400'>Mr David</h1>
            
            <p className=' font-bold text-[12px] md:text-1xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                 Nisi tempore possimus dignissimos unde <br/>
                 rerum maiores id sequi fugiat modi error.</p>

                 
                 <img src={pic1} alt=""  className='h-[50px] items-center ml-40 md:ml-[600px] rounded-3xl mt-7'/>
                 <ImQuotesRight className='ml-[300px] text-yellow-400 md:ml-[800px] mb-20'/>
            </div></SwiperSlide>
        <SwiperSlide><div className='content-center mt-10 '>
        <ImQuotesLeft className='ml-20 text-yellow-400 md:ml-[450px] '/>
            <h1 className='font-bold text-2xl md:text-3xl  text-center text-green-400'>Mr David</h1>
            
            <p className=' font-bold text-[12px] md:text-1xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                 Nisi tempore possimus dignissimos unde <br/>
                 rerum maiores id sequi fugiat modi error.</p>

                 
                 <img src={pic1} alt=""  className='h-[50px] items-center ml-40 md:ml-[600px] rounded-3xl mt-7'/>
                 <ImQuotesRight className='ml-[300px] text-yellow-400 md:ml-[800px] mb-20'/>
            </div></SwiperSlide>
      
      </Swiper>
 </div>
  );
}
