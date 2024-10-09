"use client"

import { useState } from 'react';
import PlusIcon  from '../assets/icons/plus.svg'
import MinusIcom from '../assets/icons/minus.svg'
import React from 'react';
import {motion,AnimatePresence  } from 'framer-motion'
const QuestionArr = [
    {Question : "What payments methods  do you accept ?",answer:"We accept all major cards , Paypal and various other payment methods dependig on you location. Please contact our support team for more information on accepted payment methods  in you region. "},
    {Question : "How does the pricing work for teams ? ",answer:"Our pricing is per user , per month. This means you only pay for the number of team members you have on your team. Discounts are avialable for larger teams and annual subscriptions "},
    {Question : "Can I change my plan later  ?",answer:"Yes you can upgrade and downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next biling cycle. "},
    {Question : "Is my data secure ?",answer:"Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accesed only by authorized users."},
    
]

const ToogleAns = ({questions, answer ,index}: {questions : string; answer: string,index:number}) => {
    const [isOpen, setisOpen] = React.useState(false); 
    return <>
        <div key={index} className=" ">
        <div className='text-white flex items-center gap-3 '>
            <span className='text-lg flex-1'>{questions}</span>
            <button onClick={()=>setisOpen(!isOpen)}>{isOpen?<MinusIcom className = "text-2xl"/>:<PlusIcon className = "text-2xl" />}</button>
            </div>
     </div>
     <AnimatePresence>
       {isOpen &&  
    <motion.div
    initial= {{opacity: 0,height :0 ,marginTop: 0}} 
    animate= {{opacity: 1, height: "auto",marginTop: "16px"}}
    exit={{opacity: 0, height: 0,marginTop: 0}}
    className={`text-lg mt-4 ${!isOpen? 'hidden':''} text-white`}>
        <span>{answer}</span>
        </motion.div>}
    </AnimatePresence>
                                        
    </>
}

export default function Faq(){
    return <div className="bg-[linear-gradient(to_bottom,#5D2CA8,#000)] py-[72px]">
                <div className="container">
                        <div>
                            <h1 className="text-5xl text-white font-bold tracking-tighter text-center">Frequently asked questions </h1>
                        </div>
                        <div className="mt-9">
                            {QuestionArr.map((item,index)=>
                            <div className='border-b-[1px] py-7'>
                                <ToogleAns questions={item.Question} answer={item.answer} index = {index}/>
                                </div>
                            )}
                        </div>
                </div>
        </div>
}