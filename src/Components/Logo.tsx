"use client"

import AcmeImg from '../assets/images/acme.png'
import ApexImg from '../assets/images/apex.png'
import CelestialImg from '../assets/images/celestial.png'
import EchoImg from '../assets/images/echo.png'
import PulseImg from '../assets/images/pulse.png'
import QuantumImg from '../assets/images/quantum.png'
import Image from 'next/image'
import {motion} from 'framer-motion'

const ImgArr = [
    {src: AcmeImg , alt : "AcmeImg"},
    {src: QuantumImg , alt : "QuantumImg"},
    {src: ApexImg , alt : "ApexImg"},
    {src: CelestialImg , alt : "CelestialImg"},
    {src: EchoImg , alt : "EchoImg"},
    {src: PulseImg , alt : "PulseImg"}
]


export default function Logo(){
    return <div className="bg-black py-[72px]  ">
        <div className='container flex  flex-col  justify-center max-w-7xl '>
                <h1 className=" text-center text-2xl text-white text-opacity-70">Trusted by the world's most innovative teams </h1>
        <div className="overflow-hidden flex    relative mt-9 before:content-[''] after:content-[''] before:absolute before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] before:top-0 before:w-20 before:h-full after:absolute after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] after:top-0 after:right-0 after:w-5 after:h-full ">
        <motion.div 
        transition={{
            duration: 10,
            repeat: Infinity,
            ease : 'linear'
        }}
        initial = {{translateX: 0}}
        animate = {{translateX: "-50%"}}
        className='flex gap-16 pr-16 flex-none  '>
            {ImgArr.map((item,index)=>
                <Image key={index} src = {item.src} className='h-8 flex-none w-auto' alt={item.alt}></Image>
            )}
            {ImgArr.map(item=>
                <Image key={index} src = {item.src} className='h-8 flex-none w-auto' alt={item.alt}></Image>
            )}
        </motion.div>
            </div>
        </div>
        </div>
}