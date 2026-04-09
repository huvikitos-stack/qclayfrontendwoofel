// General
import { useRef, useLayoutEffect } from 'react'
import gsap from "gsap"
import { SplitText, Draggable } from 'gsap/all';
// Images
import CircularText from "../../assets/CircularText.png"
// Icons
import { FaStar } from "react-icons/fa";
gsap.registerPlugin(SplitText, Draggable)

export default function HomeHero() {
  const heroTl = useRef(null)
  const heroTittleRef = useRef(null)
  const heroDescRef = useRef(null)
  const linkRef = useRef(null)
  const circularTextRef = useRef(null) 

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const heroTexts = () => {
        const heroSplit = new SplitText(heroTittleRef.current, { type: "lines" })
        const descSplit = new SplitText(heroDescRef.current, { type: "lines" })
        return gsap.timeline({ defaults: { duration: 0.5, y: 50, opacity: 0 } })  
        .from(heroSplit.lines, { rotate: 5, transformOrigin: 'left', stagger: 0.05 })
        .from(descSplit.lines, { stagger: 0.1 }, "-=0.2")
        .from(linkRef.current, {}, 0)
      }

      heroTl.current = gsap.timeline()
      heroTl.current
      .add(heroTexts(), "start")
      .from(circularTextRef.current, { y: -50, duration: 1, scale: 0.1, opacity: 0 }, "start")

      gsap.to(circularTextRef.current, { rotate: -360, duration: 5, ease: "none", repeat: -1 })

    })
    return () => ctx.revert()
  }, [])
  return (
    <section>
      <div className="container mx-auto px-5 pt-20">
        <div className="py-25 grid grid-cols-4 grid-rows-1">  
          <div className="col-span-3 max-sm:col-span-4 px-20">
            <h1 ref={heroTittleRef} className='text-6xl font-semibold leading-17 py-5 max-2xl:text-5xl max-xl:text-4xl max-xl:leading-10 max-lg:text-3xl max-sm:text-xl max-sm:leading-5'>Global design agency that creates holistic, well-balanced design solutions for inspiring brands</h1>
            <div className="flex gap-4 items-center justify-between">
              <div className="flex gap-4 max-sm:flex-col">
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
                <p ref={heroDescRef} className='text-[#868686] max-xl:text-[12px] max-lg:text-[8px]'>WEB DEVELOPMENT / BRANDING / UX / UI / <br /> 3D MODELING /ILLUSTRATION / STRATEGY</p>
              </div>
                <a ref={linkRef} href="https://qclay.design/QClayCapabilitiesDeck.v3.pdf" target='blank_' className='expand-cursor max-xl:text-[14px] text-nowrap text-[18px] bg-gray-300 rounded-full w-fit h-fit px-2 translate-x-50 max-sm:translate-x-0 cursor-none'>Out Capabilities Deck</a>
            </div>
          </div>  
          <div className="py-10 max-md:hidden">
            <img ref={circularTextRef} className='w-35 h-35 select-none' src={CircularText} alt="image" />
          </div>                            
        </div>
      </div>
    </section>
  )
}
