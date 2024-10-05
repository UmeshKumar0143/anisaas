import ArrowIcon from  '../assets/icons/arrow-w.svg'

export default function Hero( ){
    return <div className="text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46ED8_82%)] py-[72px] relative overflow-hidden">
           <div className='w-[750px] h-[375px] rounded-[100%] bg-black absolute left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)]'></div> 
        <div className="container relative">
        <div className="flex justify-center ">
            <a href="#" className="inline-flex items-center gap-3 border-white/30 border  px-2 py-1 rounded-lg ">
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip: text]">Version 2.0 is here </span>
            <span className='inline-flex  items-center gap-2'>
            <span>Read More</span>
            <ArrowIcon className= "text-lg"/>
            </span>
            </a>
        </div>
        <div className=''>
            <h1 className='text-7xl mt-8 tracking-tighter text-center font-bold text-wrap'>One task <br/> at a time </h1>
            <p className='text-center text-xl mt-8'>Celebrate the joy of accomplishment with an app designed to track your progress motivate your efforts, and celebrate your successs </p>
        </div>
        <div className='mt-8 flex justify-center items-center'>
        <button className='py-3 px-5 bg-white text-black rounded-lg font-semibold' >Get for free </button>
        </div>
        </div>
     
    </div>
}