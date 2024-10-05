import logosass from '../assets/images/logosaas.png'
import MenuIcon from '../assets/icons/menu.svg'
import Image from 'next/image'
export default function Navbar(){
    return <div className='bg-black'>
    <div className='px-4'>
    <div className='py-4 flex  justify-between items-center'>
        <div className='relative'>
            <div className='absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md '></div>
            <div className='relative'>
        <Image src={logosass} alt='saas logo' className='w-12 h-12' ></Image>
        </div>
        </div>
        <div className='h-10 w-10 border sm:hidden border-white border-opacity-30 rounded-lg inline-flex justify-center items-center'>
        <MenuIcon  className = "text-white text-xl" />
        </div>
        <div className='text-white hidden sm:flex gap-6 items-center'>
            <a className='text-opacity-60 text-white hover:text-opacity-100 transition' href='#'>About </a>
            <a className='text-opacity-60 text-white hover:text-opacity-100 transition' href='#'>Features </a>
            <a className='text-opacity-60 text-white hover:text-opacity-100 transition' href='#'>Updates</a>
            <a className='text-opacity-60 text-white hover:text-opacity-100 transition' href='#'>Help</a>
            <a className='text-opacity-60 text-white hover:text-opacity-100 transition' href='#'>Customers</a>
            <button className='py-2 px-3 bg-white text-black rounded-lg font-semibold' >Get for free </button>
        </div>
     </div>
     </div>
     </div>
}