export default function GetAcess(){
    return <div className="bg-black py-[72px]">
            <div className="container text-white">
                <div>
                <h1 className="text-center font-bold text-5xl ">Get Instant access</h1>
                <p className="text-center mt-6 text-xl text-white/70">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
                </div>
                <div className="flex flex-col gap-4 justify-center mt-9">
                    <input type="text" placeholder="your@email.com" className="py-3 px-3 rounded-lg w-80 pr-9 bg-zinc-700" />
                    <button className="py-3 px-3 rounded-lg w-80 pr-9 text-black font-bold  bg-white">Get access</button>
                </div>
            </div>
    </div>
}
