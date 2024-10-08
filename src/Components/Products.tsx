"use client"
import Image from "next/image"
import ProductImg from '../assets/images/app-screen.png'
import {motion, useScroll, useTransform} from 'framer-motion'
import { useRef } from "react"
export default function Product(){
    const prdctImg = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: prdctImg,
        offset:['start end' ,'end end']
    })
    const rotateX = useTransform(scrollYProgress,[0,1],[15,0]);
    const opacity = useTransform(scrollYProgress,[0,1],[0.5,1]);
    return <div className=" bg-[linear-gradient(to_bottom,#000,#5D2CA8)] py-[72px]">
        <div className="container  ">
            <div>
                <h1 className="text-center text-5xl sm:text-6xl tracking-tighter font-bold text-white">Intuitive interface </h1>
                <div className="max-w-xl mx-auto">
                <p className="text-center text-xl  text-white/70 mt-5">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.</p>
                </div>
                <motion.div
                ref = {prdctImg}
                style={{
                    opacity: opacity,
                    rotateX: rotateX,
                    transformPerspective: "800px"
                }}
                 className="flex justify-center items-center">
                <Image src={ProductImg} alt= "Product" className="mt-14" />
                </motion.div>
            </div>
        </div>
    </div>
}