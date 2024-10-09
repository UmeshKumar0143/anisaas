'use client'
import logosass from '../assets/images/logosaas.png'
import MenuIcon from '../assets/icons/menu.svg'
import Image from 'next/image'
import PlusIcon  from '../assets/icons/plus.svg'
import { useState } from 'react'

export default function Navbar(){
    const handleclick = () =>{
        setisToogle(!istoogle); 
    }
    const  [istoogle, setisToogle] = useState(false); 
    return <div className='bg-black'>
    <div className='px-4 relative'>
    <div className='py-4 flex  justify-between items-center'>
        <div className='relative'>
            <div className='absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md '></div>
            <div className='relative'>
        <Image src={logosass} alt='saas logo' className='w-12 h-12' ></Image>
        </div>
        </div>
        <div className='h-10 w-10 border sm:hidden border-white border-opacity-30 rounded-lg inline-flex justify-center items-center'>
        <button onClick={handleclick}> {!istoogle? <MenuIcon  className = "text-white text-xl" />: <PlusIcon className="text-white rotate-45 font-bold text-2xl"></PlusIcon> }  </button>
        </div>
        <div className='text-white hidden sm:flex gap-6 items-center'>
            <a className='text-opacity-60 text-white hover:text-opacity-100 transition' href='#'>About </a>
            <a className='text-opacity-60 text-white hover:text-opacity-100 transition' href='#'>Features </a>
            <a className='text-opacity-60 text-white hover:text-opacity-100 transition' href='#'>Updates</a>
            <a className='text-opacity-60 text-white hover:text-opacity-100 transition' href='#'>Help</a>
            <a className='text-opacity-60 text-white hover:text-opacity-100 transition' href='#'>Customers</a>
            {<button className='py-2 px-3 bg-white text-black rounded-lg font-semibold' >Get for free </button>}
        </div>
     </div>
     </div>
     {istoogle && 
     <div className='bg-black inset-0 absolute  sm:hidden flex flex-col z-[100] items-center gap-5 py-3  top-32'>
     <a className='text-center   text-white transition text-2xl  ' href='#'>About </a>
            <a className=' text-center text-white  text-2xl transition' href='#'>Features </a>
            <a className=' text-center text-white  text-2xl transition' href='#'>Updates</a>
            <a className=' text-center text-white  text-2xl transition' href='#'>Help</a>
            <a className=' text-center text-white  text-2xl transition' href='#'>Customers</a>
     </div>
}
     </div>
}