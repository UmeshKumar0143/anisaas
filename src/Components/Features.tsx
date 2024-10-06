import { title } from 'process'
import EcosystemSvg from '../assets/icons/ecosystem.svg'


const FeaturesArr = [
    {title : "Integration Ecosystem",desc: "Enhance your productivity by connecting with your tools, keeping your essentials in one place."},
    {title : "Goal Setting And Tracking",desc: "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."},
    {title : "Secure Data Encryption",desc: "With end-to-end encryption, your data is securely stored and protected from unauthorized access."},
    
]


export default function Features(){
    return <div className="bg-black py-[72px] -mt-2 text-white ">
        <div className="container">
                <div className="flex justify-center">
                    <div className=" flex flex-col justify-center max-w-[576px]">
                        <h1 className="text-5xl sm:text-6xl text-center tracking-tight font-bold">Everything you need</h1>
                        <p className="text-xl mt-8 text-center  text-white/70">Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</p>
                    </div>
                </div>
                <div className='mt-16 sm:flex  gap-6'>
                    {FeaturesArr.map((item,index)=>{
                        return <div className=' sm:flex-1 border mt-6 flex flex-col gap-6 py-6 rounded-xl px-4 ' key = {index}>
                                <div className='flex  justify-center'>
                                    <div className='bg-white w-14 h-14 inline-flex rounded-xl justify-center items-center'><EcosystemSvg className = "w-5 h-5 text-black" /></div>
                                </div>
                                    <h1 className='text-center text-2xl font-bold '>{item.title}</h1>
                                <p className='text-xl  text-white/70 text-center'>{item.desc}</p>
                        </div>
                    })}
                </div>

                
        </div>
    </div>
}