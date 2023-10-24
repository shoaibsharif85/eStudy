import React from 'react'
import about from '../assets/about.svg'

const About = () => {
  return (
    <div className='max-w-[1240px] m-auto '>
<div className=' md:grid md:grid-cols-2 gap-10'>
<div className=''>
    <img src={about} alt="" className=' md:h-[400px] md:w-[600px]  w-[300px] mx-5' />
</div>
<div className=''>
    <h1 className='text-5xl font-bold text-center mt-20 md:mt-40'>About <span className='text-green-600'>Us</span></h1>
    <p className='text-center mx-5 mt-5'>Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, magni?<br/>
           adipisicing elit. Esse fugiat  <br/>
     eligendi qui, consequuntur aut quisquam? </p>
</div>
</div>
    </div>
  )
}

export default About