"use client"
import Helix from '../assets/images/helix2.png'
import EmojiStar from '../assets/images/emojistar.png'
import Image from 'next/image'
import {motion } from 'framer-motion'
export default function GetAcess(){
    return <div className="bg-black -mt-2 py-[72px] sm:py-[96px]">
            <div className="container relative max-w-xl   text-white">
                <motion.div drag dragSnapToOrigin>
               <Image draggable = 'false'  className='absolute hidden sm:inline   top-6 left-[calc(100%)]  ' src={Helix} alt="HlixImg"></Image>
               </motion.div>
               <motion.div drag dragSnapToOrigin>
              <Image  draggable = 'false'  className='absolute  hidden sm:inline  -top-[120px] right-[calc(100%)]  ' src={EmojiStar} alt = "Emoji" ></Image>
              </motion.div>
                <h1 className="text-center font-bold text-5xl ">Get Instant access</h1>
                <div className="flex justify-center">
                <p className="text-center mt-6 text-xl sm:max-w-[576px] text-white/70">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
                
                </div>
                <div className="flex justify-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-9">
                    <input type="text" placeholder="your@email.com" className="py-3 px-3 border-none outline-none rounded-lg w-80 pr-9 bg-zinc-700" />
                    <button className="py-3 px-3 rounded-lg w-80 sm:w-32 flex justify-center items-center pr-9 text-black font-bold  bg-white">Get access</button>
                </div>
                </div>
            </div>
    </div>
}
