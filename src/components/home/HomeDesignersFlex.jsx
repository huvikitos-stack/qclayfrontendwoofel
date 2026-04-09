// General
import { useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger, SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText);
// Images
import One from "../../assets/sitesExampleOne.jpg";
import Two from "../../assets/sitesExampleTwo.jpg";
import Three from "../../assets/sitesExampleThree.jpg";

export default function HomeDesignersFlex() {
  const mainScroll = useRef(null)
  const thousandRef = useRef(null)
  const othersRef = useRef(null)
  const OneRef = useRef(null)
  const TwoRef = useRef(null)
  const ThreeRef = useRef(null)
  const theEndRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const othersSplit = new SplitText(othersRef.current, { type: "words", wordsClass: "z-3" })
      const mainTl = gsap.timeline({
        defaults : {
          ease: "none"
        },
        scrollTrigger: {
          trigger: mainScroll.current,
          start: "top top",
          end: "+=1600",
          scrub: true,
          pin: true,  
          anticipatePin: true
        }
      })
      
      mainTl
      .to(othersSplit.words[0], { z: 3,xPercent: -85 })
      .to(othersSplit.words[1], { z: 3,xPercent: 85 }, 0)
      .to(thousandRef.current, { yPercent: -100, opacity: 1, scale: 1 }, 0)
      .to(OneRef.current, { y: -window.innerHeight * 1.5, rotate: 45, scale: 0.9, }, 0)
      .to(TwoRef.current, { y: -window.innerHeight * 1.4, rotate: -30, scale: 0.7, }, "0+=0.2")
      .to(ThreeRef.current, { y: -window.innerHeight * 1.35, rotate: 15, scale: 0.8, }, "0+=0.1")

      gsap.fromTo(theEndRef.current, { xPercent: 100 }, { xPercent: 0, duration: 0.3, scrollTrigger: { trigger: mainScroll.current, start: "top -1%", toggleActions: "play none none reverse" }})
    })
    return () => ctx.revert()
  }, [])
  return (
    <section className='bg-neutral-300'>
      <div ref={mainScroll} className="container mx-auto overflow-hidden relative">

        <div ref={theEndRef} className="bg-black h-full border-4 border-black w-screen absolute z-10"></div>

        <div className="h-screen justify-center w-full flex flex-col items-center">
          <h1 className='text-8xl max-sm:text-4xl font-bold z-3'>EACH OF OUR DESIGNERS</h1>
          <h1 className='text-8xl max-sm:text-4xl font-bold text-white z-1'>WAS THE BEST AMONG</h1>
          <div className="flex text-8xl max-sm:text-4xl font-bold">
            <div className="">
              <h1 className='z-3' ref={othersRef}>SEVERAL OTHERS</h1>
              <h1 ref={thousandRef} className='opacity-0 scale-50 text-center z-3'>THOUSAND</h1>
            </div>
          </div>
          
        </div>
        <div className="flex">
            <img ref={OneRef} className='w-130 max-sm:w-65 max-sm:h-30  h-60 object-cover rounded-2xl select-none z-2' src={One} alt="image" />
            <img ref={TwoRef} className='w-130 max-sm:w-65 max-sm:h-30  h-60 object-cover rounded-2xl select-none z-2' src={Two} alt="image" />
            <img ref={ThreeRef} className='w-130 max-sm:w-65 max-sm:h-30  h-60 object-cover rounded-2xl select-none z-2' src={Three} alt="image" />
          </div>
      </div>
    </section>
  )
}
