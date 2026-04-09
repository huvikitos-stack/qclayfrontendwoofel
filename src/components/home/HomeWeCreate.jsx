// General
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { SplitText } from 'gsap/all';
import { TextPlugin } from "gsap/all"
gsap.registerPlugin(TextPlugin, ScrollTrigger, SplitText)
// // Images
import design from "../../assets/design.jpg";
import right from "../../assets/right.jpg";
import left from "../../assets/left.jpg";
import holistic from "../../assets/holisticDesign.jpeg"
import app from "../../assets/appDesign.png"

export default function HomeWeCreate() {
  const textScrollRef = useRef(null)
  const weCreateTextRef = useRef(null)

  const imageScrollRef = useRef(null)
  const imageUniqueGraphics = useRef(null)
  const textUniqueGraphicsRef = useRef(null)

  const imageScrollUXRef = useRef(null)
  const imageRightRef = useRef(null)
  const imageLeftRef = useRef(null)
  const textUXRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const textTl = gsap.timeline({
        repeat: -1
      })
      textTl
      .to(".moving", { xPercent: -100, duration: 10, ease: "none" })
      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: textScrollRef.current,
          start: "top top",
          end: "+=1000",
          pin: true,
          anticipatePin: true,
          scrub: true,
        }
      })
      const splitTitle = new SplitText(weCreateTextRef.current, { type: "chars", charsClass: "inline-block" })
      titleTl
      .to(splitTitle.chars, { border: 20, rotateX: 180, stagger: 0.05 })
      .to(splitTitle.chars, { border: 0, stagger: 0.05 }, "-=0.2")

      const uniqueGraphics = gsap.timeline({
        scrollTrigger: {
          trigger: imageScrollRef.current,
          start: "top top",
          end: "+=1800",
          pin: true,
          anticipatePin: true,
          scrub: true,
        }
      })
      uniqueGraphics
      .from(imageUniqueGraphics.current, { scale: 0 })
      .to(textUniqueGraphicsRef.current, { yPercent: -500 }, "start-=0.5")

      const uxSolutionsTl = gsap.timeline({
        scrollTrigger: {
          trigger: imageScrollUXRef.current,
          start: "top top",
          end: "+=1600",
          pin: true,
          anticipatePin: true,
          scrub: true,
        }
      })
      uxSolutionsTl
      .from(imageLeftRef.current, { xPercent: -100 })
      .from(imageRightRef.current, { xPercent: 100 }, 0)
      .from(textUXRef.current, { yPercent: -100 }, 0)
    })
    return () => ctx.revert()
  }, [])
  return (
    <section>
      <div className="container mx-auto">
        <div ref={textScrollRef} className="perspective-[1000px]">
          <h1 ref={weCreateTextRef} className='text-9xl max-sm:text-5xl text-center rotate-x-180 font-semibold text-nowrap py-20'>WE CREATE</h1>
        </div>
        <div ref={imageScrollRef} className="">
          <img ref={imageUniqueGraphics} className='w-full max-sm:h-screen max-sm:object-left object-cover' src={design} alt="image"/>
          <p ref={textUniqueGraphicsRef} className='bg-white text-2xl py-2 px-4 text-center'>UNIQUE GRAPHICS</p>
        </div>
        <div ref={imageScrollUXRef} className="grid grid-cols-3 overflow-hidden h-200 max-sm:h-screen">
          <img ref={imageLeftRef} className='w-full max-sm:h-screen max-sm:object-contain object-cover' src={left} alt="image" />
          <div className="px-20">
            <div ref={textUXRef} className="text-9xl max-sm:text-5xl font-bold text-center rotate-180">
              {"INTUITIVE_UX_SOLUTIONS".split("").map((value, index) => (
                <h2 key={index} className={`rotate-180`} >{value}</h2>
              ))}
            </div>
          </div>
          <img ref={imageRightRef} className='w-full max-sm:h-screen max-sm:object-contain object-cover' src={right} alt="image" />
        </div>
        <div className="">
          <div className="flex overflow-hidden whitespace-nowrap expand-cursor-dramatic">
            <h1 className='moving text-9xl'>Holistic and Creative, app and UI Designs.</h1>
            <h1 className='moving text-9xl'>Holistic and Creative, app and UI Designs.</h1>
          </div>
          <div className="sm:flex sm:justify-between">
            <img className='object-cover w-[50vw] max-sm:w-full' src={holistic} alt="image" />
            <img className='object-cover w-[50vw] max-sm:w-full' src={app} alt="image" />
        </div>
        </div>
      </div>
    </section>
  )
}

