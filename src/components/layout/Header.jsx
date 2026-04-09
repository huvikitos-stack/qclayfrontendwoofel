// General
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import gsap from "gsap"
// Images
import LOGO from '../../assets/QClayLogo.png'

export default function Header() {
  const [burgerModal, setBurgerModal] = useState(false);
  const headerRef = useRef(null);
  const [justSignUp, setJustSignUp] = useState(false);
  const [justSignIn, setJustSignIn] = useState(false);
  const location  = useLocation();

  const toggleModal = () => {
    setBurgerModal(prev => !prev)
  }
  const signOut = () => {
    sessionStorage.clear()
    window.location.href = "/contactUs"
    toggleModal()
  }
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, { y: "-100%", opacity: 0, duration: 0.5 })
    })
    return () => ctx.revert()
  }, [])
  useEffect(() => {
    const flag = sessionStorage.getItem("justSignUp");
    if (flag == "true") {
      setJustSignUp(true)
    }
    const signInCheck = sessionStorage.getItem("justSignIn");
    if (signInCheck == "true") {
      setJustSignIn(true)
    }
  }, [location])
  return (
      <header className='w-full container mx-auto'>
        <div className={`w-screen h-screen p-10 bg-neutral-100 fixed ${ burgerModal ? "" : "-translate-y-[110%] rotate-15 blur-3xl" } duration-700 ease-out z-1`} style={{ transformOrigin: "bottom right" }}>
          <div className="grid grid-cols-3 h-full">
              <div className="text-xl flex flex-col justify-between">
                <ul className='pt-40 flex flex-col gap-y-6'>
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
                </ul>
                <ul>
                  <li className='text-neutral-500'>Get in touch</li>
                  <li className='w-fit group expand-cursor relative'><a className='cursor-none' target='blank_' href="https://qclay.design/QClayCapabilitiesDeck.v3.pdf">info@qclay.design</a> <span className='w-5 h-5 bg-black absolute left-0 top-6 rounded-full group-hover:w-full group-hover:h-px  duration-500 ease-out'></span></li>
                </ul>
              </div>

              <div className="pr-20 py-20 max-md:hidden">
                <div className="w-full h-full bg-purple-950"></div>
              </div>

              <div className="">
                <div className={`${sessionStorage.getItem("justSignIn") ? "pt-10" : "pt-30"}`}>
                  <p className='text-neutral-500 pb-10'>Menu</p>
                  <nav>
                    <ul className='flex gap-y-7 text-6xl max-sm:text-3xl flex-col'>
                      <li className='expand-cursor overflow-hidden h-14 max-sm:h-10 w-fit group'>
                        <p className='group-hover:-translate-y-full duration-300'>Home</p>
                        <p className='group-hover:-translate-y-full duration-300'><Link className='cursor-none' onClick={() => toggleModal()} to={"/"}>Home</Link></p>
                      </li>
                      <li className='expand-cursor overflow-hidden h-14 max-sm:h-10 w-fit group'>
                        <p className='group-hover:-translate-y-full duration-300'>About</p>
                        <p className='group-hover:-translate-y-full duration-300'><Link className='cursor-none' onClick={() => toggleModal()}  to={"/about"}>About</Link></p>
                      </li>
                      <li className='expand-cursor overflow-hidden h-14 max-sm:h-10 w-fit group'>
                        <p className='group-hover:-translate-y-full duration-300'>Works</p>
                        <p className='group-hover:-translate-y-full duration-300'><Link className='cursor-none' onClick={() => toggleModal()}  to={"/works"}>Works</Link></p>
                      </li>
                      {!justSignUp ? (
                        <li className='expand-cursor overflow-hidden h-14 max-sm:h-10 w-fit group'>
                          <p className='group-hover:-translate-y-full duration-300'>Contact Us</p>
                          <p className='group-hover:-translate-y-full duration-300'><Link className='cursor-none' onClick={() => toggleModal()}  to={"/contactUs"}>Contact Us</Link></p>
                        </li>
                      ) : (
                        <li className='expand-cursor overflow-hidden h-14 max-sm:h-10 w-fit group'>
                          <p className='group-hover:-translate-y-full duration-300'>Sign In</p>
                          <p className='group-hover:-translate-y-full duration-300'><Link className='cursor-none' onClick={() => toggleModal()}  to={"/signIn"}>Sign In</Link></p>
                        </li>
                      )}
                      {!justSignIn ? (
                        <div className="expand-cursor"></div>
                      ) : (
                        <li className='expand-cursor overflow-hidden h-14 max-sm:h-10 w-fit group'>
                          <p className='group-hover:-translate-y-full duration-300'>Your Brands</p>
                          <p className='group-hover:-translate-y-full duration-300'><Link className='cursor-none' onClick={() => toggleModal()}  to={"/brand"}>Your Brands</Link></p>
                        </li>
                      )}
                      {!justSignIn ? (
                        <div className="expand-cursor"></div>
                      ) : (
                        <li className='expand-cursor overflow-hidden h-14 max-sm:h-10 w-fit group'>
                          <p className='group-hover:-translate-y-full duration-300'>Sign Out</p>
                          <p className='group-hover:-translate-y-full duration-300' onClick={signOut}><span  className='cursor-none' onClick={() => toggleModal()}>Sign Out</span></p>
                        </li>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
          </div>
        </div>
        <div ref={headerRef}  className="px-5 fixed w-full z-40">
          <div className="flex justify-between py-8 items-center">
            <Link className='cursor-none' to={'/'}><img className='w-30 h-8' src={LOGO} alt="logo" /></Link>
            <nav className='max-md:hidden'>
              <ul className='flex gap-[3vw] text-xl items-center'>
                <li className='expand-cursor overflow-hidden text-xl h-7 group'>
                  <p className='group-hover:-translate-y-full duration-300'>Home</p>
                  <p className='group-hover:-translate-y-full duration-300'><Link className='cursor-none' to={"/"}>Home</Link></p>
                </li>
                <li className='expand-cursor overflow-hidden text-xl h-7 group'>
                  <p className='group-hover:-translate-y-full duration-300'>About</p>
                  <p className='group-hover:-translate-y-full duration-300'><Link className='cursor-none'  to={"/about"}>About</Link></p>
                </li>
                <li className='expand-cursor overflow-hidden text-xl h-7 group'>
                  <p className='group-hover:-translate-y-full duration-300'>Works</p>
                  <p className='group-hover:-translate-y-full duration-300'><Link className='cursor-none'  to={"/works"}>Works</Link></p>
                </li>
                {!justSignUp ? (
                  <li className='expand-cursor overflow-hidden text-xl h-7 group'>
                    <p className='group-hover:-translate-y-full duration-300'>Contact Us</p>
                    <p className='group-hover:-translate-y-full duration-300'><Link className='cursor-none'  to={"/contactUs"}>Contact Us</Link></p>
                  </li>
                ) : (
                  <li className='expand-cursor overflow-hidden text-xl h-7 group'>
                    <p className='group-hover:-translate-y-full duration-300'>Sign In</p>
                    <p className='group-hover:-translate-y-full duration-300'><Link className='cursor-none'  to={"/signIn"}>Sign In</Link></p>
                  </li>
                )}
                {!justSignIn ? (
                  <div className="expand-cursor"></div>
                ) : (
                  <li className='expand-cursor overflow-hidden text-xl h-7 group'>
                    <p className='group-hover:-translate-y-full duration-300'>Your Brands</p>
                    <p className='group-hover:-translate-y-full duration-300'><Link className='cursor-none'  to={"/brand"}>Your Brands</Link></p>
                  </li>
                )}
                {!justSignIn ? (
                  <div className="expand-cursor"></div>
                ) : (
                  <li className='expand-cursor overflow-hidden text-xl h-7 group'>
                    <p className='group-hover:-translate-y-full duration-300'>Sign Out</p>
                    <p className='group-hover:-translate-y-full duration-300' onClick={signOut}><span  className='cursor-none'>Sign Out</span></p>
                  </li>
                )}
              </ul>
            </nav>
            <div className="flex gap-3 items-center text-[18px] font-semibold">
              <button> <Link className='expand-cursor cursor-none flex gap-3 items-center border-2 border-black rounded-full py-2 px-3' to={"/contactUs"}><div className="w-2 h-2 bg-green-400 rounded-full"></div>Let's Talk!</Link></button>
              <p>menu</p>
              <div onClick={() => toggleModal()} className='expand-cursor flex flex-col gap-y-1'>
                <div className={`w-8 h-0.5 rounded-full bg-black duration-500 ${burgerModal ? "translate-y-0.75 rotate-45" : ''}`}></div>
                <div className={`w-8 h-0.5 rounded-full bg-black duration-500 ${burgerModal ? "-translate-y-0.75 -rotate-45" : ""}`}></div>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}
