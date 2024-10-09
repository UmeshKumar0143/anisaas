"use client"
import Feature from './Feature'
import {motion,useScroll, useTransform} from 'framer-motion'
import { useRef,useEffect } from 'react'

const FeaturesArr = [
    {title : "Integration Ecosystem",desc: "Enhance your productivity by connecting with your tools, keeping your essentials in one place."},
    {title : "Goal Setting And Tracking",desc: "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."},
    {title : "Secure Data Encryption",desc: "With end-to-end encryption, your data is securely stored and protected from unauthorized access."},
    
]


export default function Features(){
    const h1 = useRef(null);
    const {scrollYProgress} = useScroll({
        target: h1,
        offset: ['start end', 'start 0.6']
    })
    const y = useTransform(scrollYProgress,[0,0.5,1],[100,25,-50]);
    const opacity = useTransform(scrollYProgress,[0,0.2,1],[0,0.5,1]);

    return <div className="bg-black py-[72px] -mt-2 text-white ">
        <div className="container">
                <div className="flex justify-center">
                    <div className=" flex flex-col  justify-center max-w-[576px]">
                        <motion.h1 transition={{duration: 1 , delay: 0.5}} style={{y: y, opacity:opacity}} ref = {h1} className="text-5xl sm:text-6xl text-center tracking-tight font-bold">Everything you need</motion.h1>
                        <motion.p className="text-xl mt-8 text-center  text-white/70">Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</motion.p>
                    </div>
                </div>
                <div className='mt-16 sm:flex  gap-6'>
                    {FeaturesArr.map((item,index)=>
                        <Feature key={index} title={item.title} desc={item.desc} index = {index} />
                    )}
                </div>

                
        </div>
    </div>
}