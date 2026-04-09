// General
import { useLayoutEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import gsap from "gsap";
import { SplitText } from 'gsap/all';
gsap.registerPlugin(SplitText)
// Icons
import { FaStar } from 'react-icons/fa';

export default function Footer() {
  const footerButtonRef = useRef(null);
  const textAnimation = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const btnSplit = new SplitText(footerButtonRef.current, { type: "words" })
      textAnimation.current = gsap.from(btnSplit.words, { ease: "power1.inOut", y: "random(0, 20)", rotate: "random(-20, 20)", paused: true, transformOrigin: () => `${gsap.utils.random(0,100)}% ${gsap.utils.random(0,100)}%` })
    })
    return () => ctx.revert()
  }, [])
  return (
    <footer>
      <div className="container mx-auto p-10">
        <div className="grid grid-cols-3 items-center">
          <ul className='flex flex-col'>
            <li className='text-neutral-500'>Social</li>
            <li className='expand-cursor overflow-hidden h-7 group w-fit'>
              <p className='group-hover:-translate-y-full duration-300'>Dribbble</p>
              <p className='group-hover:-translate-y-full duration-300'><a className='cursor-none' href='https://dribbble.com/qclay' target='blank_'>Dribbble</a></p>
            </li>
            <li className='expand-cursor overflow-hidden h-7 group w-fit'>
              <p className='group-hover:-translate-y-full duration-300'>Behance</p>
              <p className='group-hover:-translate-y-full duration-300'><a className='cursor-none' href='https://www.behance.net/qclay' target='blank_'>Behance</a></p>
            </li>
            <li className='expand-cursor overflow-hidden h-7 group w-fit'>
              <p className='group-hover:-translate-y-full duration-300'>TikTok</p>
              <p className='group-hover:-translate-y-full duration-300'><a className='cursor-none' href='https://www.tiktok.com/@qclay.design' target='blank_'>TikTok</a></p>
            </li>
            <li className='expand-cursor overflow-hidden h-7 group w-fit'>
              <p className='group-hover:-translate-y-full duration-300'>Instagram</p>
              <p className='group-hover:-translate-y-full duration-300'><a className='cursor-none' href='https://www.instagram.com/qclaydesign/' target='blank_'>Instagram</a></p>
            </li>
            <li className='expand-cursor overflow-hidden h-7 group w-fit'>
              <p className='group-hover:-translate-y-full duration-300'>LinkedIn</p>
              <p className='group-hover:-translate-y-full duration-300'><a className='cursor-none' href='https://www.linkedin.com/company/qclay-design/' target='blank_'>LinkedIn</a></p>
            </li>
            <li className='expand-cursor overflow-hidden h-7 group w-fit'>
              <p className='group-hover:-translate-y-full duration-300'>Awwwards</p>
              <p className='group-hover:-translate-y-full duration-300'><a className='cursor-none' href='https://www.awwwards.com/QClay/' target='blank_'>Awwwards</a></p>
            </li>
            <li className='expand-cursor overflow-hidden h-7 group w-fit'>
              <p className='group-hover:-translate-y-full duration-300'>Pinterest</p>
              <p className='group-hover:-translate-y-full duration-300'><a className='cursor-none' href='https://www.pinterest.com/qclaydesign/' target='blank_'>Pinterest</a></p>
            </li>
          </ul>
          <div className="flex flex-col gap-5">
            <p className='text-neutral-500 font-semibold text-3xl max-sm:text-2xl'>Clients trust us</p>
            <div className="flex gap-4">
              <p className='text-black font-extrabold text-3xl relative w-fit h-fit scale-200 select-none'>C <span className="w-2 h-2 rounded-full bg-pink-600 absolute top-4 left-3"></span></p>
              <div className="text-[14px]">
                <div className="flex">
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                </div>
                <p>Rating 5, 24 views</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className='text-4xl max-sm:text-2xl font-bold'>Have a great idea?</p>
            <p className='text-4xl max-sm:text-2xl'>Tell us abou it</p>
          </div>
        </div>
        <Link to={"/contactUs"} className='cursor-none'><button onMouseEnter={() => textAnimation.current.play()} onMouseLeave={() => textAnimation.current.reverse()} ref={footerButtonRef} className='text-white bg-black rounded-full w-full py-5 expand-cursor-dramatic cursor-none my-5'>Get In Touch With Us</button></Link>
        <div className="flex justify-between">
          <div className="">
            <p className='text-neutral-500 pb-10'>Dubai Digital Park, Dubai <br /> Silicon Oasis, Dubai, UAE</p>
            <Link className='cursor-none expand-cursor' to={'/'}>Privacy and Policy</Link>
          </div>
          <a href="https://qclay.design/QClayCapabilitiesDeck.v3.pdf" target='blank_' className='expand-cursor text-[18px] bg-gray-300 rounded-full w-fit h-fit px-2 cursor-none'>Out Capabilities Deck</a>
        </div>
      </div>
    </footer>
  )
}
