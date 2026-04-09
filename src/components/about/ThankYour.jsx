// Genral
import { Link } from "react-router-dom";
// Images
import One from "../../assets/office.jpg";
// Icons
import { PiDribbbleLogoFill } from "react-icons/pi";
import { IoLogoBehance } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

export default function ThankYour() {
  return (
    <section>
        <div className="container mx-auto">
            <div className="h-screen bg-neutral-300 w-full grid grid-cols-3">
                <div className="rounded-[60px] bg-cover flex justify-end items-center" style={{ backgroundImage: `url(${One})` }}>
                    <div className="bg-[#ffff00] rounded-full hover:scale-110 duration-200 text-black w-fit p-5 text-8xl translate-x-[50%]"><FiArrowUpRight/></div>
                </div>
                <div className="bg-black rounded-[60px] max-sm:col-span-2 flex flex-col justify-between p-10">
                    <h1 className='text-white text-5xl'>MORE <br /> THAN</h1>
                    <h1 className='text-white text-5xl text-end'>JUST <br /> DESIGN</h1>
                </div>
                <div className="bg-blue-600 rounded-[60px] max-sm:hidden p-10 flex flex-col justify-between">
                    <div className="flex gap-x-5 self-end">
                        <Link to={"/"} className='expand-cursor text-[18px] border-2 text-white rounded-full w-fit h-fit px-2 cursor-none'>www.qclay.design</Link>
                        <Link to={"/about"} className='expand-cursor text-[18px] border-2 text-white rounded-full w-fit h-fit px-2 cursor-none'>info@qclay.design</Link>
                    </div>
                    <h1 className='text-5xl text-white text-center'>thanks.</h1>
                    <div className="flex flex-col gap-y-2">
                        <ul className='flex justify-between'>
                            <li className='text-white expand-cursor text-2xl flex justify-center items-center rounded-full border-2 p-4 hover:scale-120 duration-200'><a className='cursor-none' target='blank_' href="https://dribbble.com/qclay"><PiDribbbleLogoFill/></a></li>
                            <li className='text-white expand-cursor text-2xl flex justify-center items-center rounded-full border-2 p-4 hover:scale-120 duration-200'><a className='cursor-none' target='blank_' href="https://www.behance.net/qclay"><IoLogoBehance/></a></li>
                            <li className='text-white expand-cursor text-2xl flex justify-center items-center rounded-full border-2 p-4 hover:scale-120 duration-200'><a className='cursor-none' target='blank_' href="https://www.tiktok.com/@qclay.design"><FaTiktok/></a></li>
                            <li className='text-white expand-cursor text-2xl flex justify-center items-center rounded-full border-2 p-4 hover:scale-120 duration-200'><a className='cursor-none' target='blank_' href="https://www.instagram.com/qclaydesign/"><FaInstagram/></a></li>
                            <li className='text-white expand-cursor text-2xl flex justify-center items-center rounded-full border-2 p-4 hover:scale-120 duration-200'><a className='cursor-none' target='blank_' href="https://www.pinterest.com/qclaydesign/"><FaPinterest/></a></li>
                            <li className='text-white expand-cursor text-2xl flex justify-center items-center rounded-full border-2 p-4 hover:scale-120 duration-200'><a className='cursor-none' target='blank_' href="https://x.com/qclay_design"><FaXTwitter/></a></li>
                        </ul>
                        <Link to={"/contactUs"} className='
                        flex justify-between items-center
                        py-2 px-5 border-2 text-white rounded-full
                        cursor-none hover:scale-110 duration-200
                        '><p className='text-2xl underline'>Contact Us</p> <FiArrowUpRight className='text-3xl' /> </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
