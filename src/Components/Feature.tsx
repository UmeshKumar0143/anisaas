"use client"
import { useEffect, useRef } from 'react';
import EcosystemSvg from '../assets/icons/ecosystem.svg'
import {motion, useMotionTemplate, useMotionValue} from 'framer-motion'

export default function   Feature({title, desc,index}:{title: string, desc: string,index:number}) {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskedImage = useMotionTemplate `radial-gradient(100px 100px at ${offsetX}px ${offsetY}px ,black , transparent)`;
  const border = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const updateMousePos =  (e:MouseEvent) =>{
        if(!border.current) return ; 
        const borderRect = border.current?.getBoundingClientRect();
         offsetX.set(e.x - borderRect?.x);
         offsetY.set(e.y - borderRect?.y);
    }
    window.addEventListener('mousemove',updateMousePos)
    return () =>{
      window.removeEventListener('mousemove',updateMousePos);
    }
  },[])
    return <div
    className=" sm:flex-1 relative border mt-6 flex flex-col gap-6 py-6 rounded-xl px-4 "
    key={index}
    >
    <motion.div style={{
      WebkitMaskImage:
        maskedImage,
      maskImage:maskedImage}} ref={border} className='absolute inset-0 rounded-xl border-2 border-purple-400'></motion.div>
    <div   className="flex  justify-center">
      <div className="bg-white w-14 h-14 inline-flex  rounded-xl justify-center items-center">
        <EcosystemSvg className="w-5 h-5 text-black" />
      </div>
    </div>
    <h1 className="text-center text-2xl font-bold ">{title}</h1>
    <p className="text-xl  text-white/70 text-center">{desc}</p>
  </div>;
}
