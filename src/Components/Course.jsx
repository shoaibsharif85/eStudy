import React from 'react'
import web from '../assets/web-dev.svg'
import App from '../assets/App-dev.svg'
import graphic from '../assets/graphic.svg'
import digital from '../assets/digital.svg'
function Course() {
  return (
    <div className='max-w-[1240px] m-auto'>
        <h1 className='text-center text-4xl font-bold mr-10 my-10'><span className='text-green-600'>Our </span> Course</h1>
<div className='md:grid md:grid-cols-2 gap-5 my-10  md:ml-10 justify-center '>
    <div className='  md:w-[400px] rounded-md md:ml-20 mx-10 mt-10 bg-white md:h-[400px]'>
        <img src={web} alt=""  className='md:h-[250px] w-[200px] h-[200px] md:w-[250px] justify-center mx-20'/>
        <h1 className='text-center text-[22px] font-bold '>Web-development</h1>
        <p className='my-5 mx-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          
              vel facere repellat quisquam.</p>
    </div>
    <div className=' rounded-md  md:w-[400px] mt-10  mx-10 md:ml-[-50px] bg-white md:h-[400px]'>
        <img src={App} alt=""  className='md:h-[250px] w-[200px] h-[200px] md:w-[250px] justify-center mx-20'/>
        <h1 className='text-center text-[22px] font-bold '>App-Development</h1>
        <p className='my-5 mx-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         
              vel facere repellat quisquam.</p>
    </div>
    <div className=' rounded-md  md:w-[400px] md:ml-20 mt-10 mx-10 bg-white md:h-[400px]'>
        <img src={graphic} alt=""  className='md:h-[250px] w-[200px] h-[200px] md:w-[250px] justify-center mx-20'/>
        <h1 className='text-center text-[22px] font-bold '>Graphic Designer</h1>
        <p className='my-5 mx-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            
              vel facere repellat quisquam.</p>
    </div>
    <div className=' rounded-md  md:w-[400px] md:ml-[-50px]  mx-10 mt-10  bg-white md:h-[400px]'>
        <img src={digital} alt=""  className='md:h-[250px] w-[200px] h-[200px] md:w-[250px] justify-center mx-20'/>
        <h1 className='text-center text-[22px] font-bold '>Digital Marketing</h1>
        <p className='my-5 mx-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            
              vel facere repellat quisquam.</p>
    </div>
</div>
    </div>
  )
}

export default Course