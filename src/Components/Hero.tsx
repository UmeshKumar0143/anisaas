import ArrowIcon from  '../assets/icons/arrow-w.svg'

export default function Hero( ){
    return <div className="text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46ED8_82%)] py-[72px]">
        <div className="container ">
        <div className="flex justify-center ">
            <a href="#" className="inline-flex items-center gap-3 border-white/30 border  px-2 py-1 rounded-lg ">
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip: text]">Version 2.0 is here </span>
            <span className='inline-flex  items-center gap-2'>
            <span>Read More</span>
            <ArrowIcon className= "text-lg"/>
            </span>
            </a>
        </div>
        <div>
            <h1>One task at a time </h1>
            <p>Celebrate the joy of accomplishment with an app designed to track your progress motivate your efforts, and celebrate your successs </p>
        </div>
        </div>
    </div>
}