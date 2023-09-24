import React from 'react'
import {logo} from '../assets'
const Hero = () => {
  return (
    <div>
     <header className='w-full flex justify-center items-center flex-col'>
        <nav className="flex justify-between flex-col items-centers">
            <img src={logo} alt="logo" className='w-28 object-contain'/>

        </nav>
     </header>
    </div>
  )
}

export default Hero
