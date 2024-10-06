import Image from "next/image"
import ProductImg from '../assets/images/app-screen.png'

export default function Product(){
    return <div className=" bg-[linear-gradient(to_bottom,#000,#5D2CA8)] py-[72px]">
        <div className="container  ">
            <div>
                <h1 className="text-center text-5xl sm:text-6xl tracking-tighter font-bold text-white">Intuitive interface </h1>
                <div className="max-w-xl mx-auto">
                <p className="text-center text-xl  text-white/70 mt-5">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.</p>
                </div>
                <div className="flex justify-center items-center">
                <Image src={ProductImg} alt= "Product" className="mt-14" />
                </div>
            </div>
        </div>
    </div>
}