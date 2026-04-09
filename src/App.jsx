// General
import React, { useRef, useLayoutEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import gsap from 'gsap';
// Components
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import ScrollToTop from './components/layout/ScrollToTop'
// Pages
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Works from './pages/Works'
import About from './pages/About';
import SignIn from "./pages/SignIn";
import Brands from './pages/Brands';

export default function App() {
  const cursorRef = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 })
      window.addEventListener("mousemove", (e) => {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.2,
          ease: "power4"
        })
      })
      document.querySelectorAll(".expand-cursor").forEach(el => {
        el.addEventListener("mouseenter", () => {
          gsap.to(cursorRef.current, { scale: 6  })
        })
        el.addEventListener("mouseleave", () => {
          gsap.to(cursorRef.current, { scale: 1 })
        })
      })
      document.querySelectorAll(".expand-cursor-dramatic").forEach(el => {
        el.addEventListener("mouseenter", () => {
          gsap.to(cursorRef.current, { scale: 12  })
        })
        el.addEventListener("mouseleave", () => {
          gsap.to(cursorRef.current, { scale: 1 })
        })
      })
    }, [location])
    return () => ctx.revert()
  }, [])
  return (
    <React.Fragment>
      <div ref={cursorRef} className="fixed top-0 left-0 duration-75 bg-white mix-blend-difference w-3 h-3 rounded-full pointer-events-none z-50"></div>
      <Header/>
      <ScrollToTop/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/contactUs'} element={<ContactUs/>}/>
        <Route path={'/works'} element={<Works/>}/>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'/signIn'} element={<SignIn/>}/>
        <Route path={'/brand'} element={<Brands/>}/>
      </Routes>
      <Footer/>
    </React.Fragment>
  )
}
