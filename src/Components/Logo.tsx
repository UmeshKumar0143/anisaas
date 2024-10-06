"use client"

import AcmeImg from '../assets/images/acme.png'
import ApexImg from '../assets/images/apex.png'
import CelestialImg from '../assets/images/celestial.png'
import EchoImg from '../assets/images/echo.png'
import PulseImg from '../assets/images/pulse.png'
import QuantumImg from '../assets/images/quantum.png'
import Image from 'next/image'

const ImgArr = [
    {src: AcmeImg , alt : "AcmeImg"},
    {src: QuantumImg , alt : "QuantumImg"},
    {src: ApexImg , alt : "ApexImg"},
    {src: CelestialImg , alt : "CelestialImg"},
    {src: EchoImg , alt : "EchoImg"},
    {src: PulseImg , alt : "PulseImg"}
]


export default function Logo(){
    return <div className="bg-black py-[72px] ">
        <div className='container'>
        <div className="  text-center ">
                <h1 className="text-2xl text-white text-opacity-70">Trusted by the world's most innovative teams </h1>
        </div>
        <div className="overflow-hidden relative mt-9 before:content-[''] after:content-[''] before:absolute before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] before:top-0 before:w-20 before:h-full after:absolute after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] after:top-0 after:right-0 after:w-5 after:h-full ">
        <div className='flex gap-16 '>
            {ImgArr.map(item=>
                <Image src = {item.src} className='h-8 flex-none w-auto' alt={item.alt}></Image>
            )}
        </div>
            </div>
        </div>
        </div>
}