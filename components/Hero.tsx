import React from 'react'
import Image from 'next/image'
import img from '../public/Quaid.jpg'
const Hero = () => {
  return (
    <div>
        <div className='Parent'>
            <div className='text'>
            <h1 >Quote By <br /><span>Quaid-E-Azam</span></h1>
            <p>We are going through fire the sunshine has yet to come. <br /> But I have no doubt that with <span>Unity, Faith and Discipline</span> we will compare with any nation of the world. </p>
            </div>
            <div className="img-box">
                <Image
                src= {img}
                alt="Jinnah" 
                width={300}
                height={300}
                />
            </div>
        </div>
    </div>
  )
}

export default Hero