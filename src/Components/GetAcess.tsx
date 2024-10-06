export default function GetAcess(){
    return <div className="bg-black py-[72px]">
            <div className="container  text-white">
                <div className="">
                <h1 className="text-center font-bold text-5xl ">Get Instant access</h1>
                <div className="flex justify-center">
                <p className="text-center mt-6 text-xl sm:max-w-[576px] text-white/70">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
                </div>
                </div>
                <div className="flex justify-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-9">
                    <input type="text" placeholder="your@email.com" className="py-3 px-3 rounded-lg w-80 pr-9 bg-zinc-700" />
                    <button className="py-3 px-3 rounded-lg w-80 sm:w-32 flex justify-center items-center pr-9 text-black font-bold  bg-white">Get access</button>
                </div>
                </div>
            </div>
    </div>
}
