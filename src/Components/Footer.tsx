import XLogo from '../assets/icons/x-social.svg'
import InstaLogo from '../assets/icons/insta.svg'
import TiktokLogo from '../assets/icons/tiktok.svg'
import YtLogo from '../assets/icons/youtube.svg'


export default function Footer(){
    return <div className="bg-black py-5">
            <div className="container sm:flex justify-between items-center">
                 <div className="text-white">
                    <p className="text-center text-white/30">© 2024 Your Company, Inc. All rights reserved</p>
                 </div>
                 <div className="flex text-white/30 text-2xl justify-center py-5 gap-4 sm:py-0">
                    <XLogo/>
                    <InstaLogo/>
                    <TiktokLogo/>
                    <YtLogo/>                    
                 </div>
            </div>
    </div>
}