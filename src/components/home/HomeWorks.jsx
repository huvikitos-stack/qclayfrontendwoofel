// General
import { useLayoutEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger, SplitText, Draggable, InertiaPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText, Draggable, InertiaPlugin)
// Images
import One from "../../assets/sitesExampleOne.jpg";
import Two from "../../assets/sitesExampleTwo.jpg";
import Three from "../../assets/sitesExampleThree.jpg";
import Four from "../../assets/exampleSitesFour.jpg";
import Five from "../../assets/exampleSitesFive.jpg";

export default function HomeWorks() {
  const mainScroll = useRef(null)
  const clawsRef = useRef(null)
  const titleRef = useRef(null)
  const circleOneRef = useRef(null)
  const circleTwoRef = useRef(null)
  const circleThreeRef = useRef(null)
  const scrollBarRef = useRef(null)
  const scrollBarWhiteRef = useRef(null)
  const carouselRef = useRef(null)
  const draggableWorksRef = useRef(null)
  const endRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mainTl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: mainScroll.current,
          start: "top top",
          end: "+=2000",
          toggleActions: "play none none reverse"
        }
      })
      const titleSplit = new SplitText(titleRef.current, { type: "words, chars" })
      const circles = [ circleOneRef.current, circleTwoRef.current, circleThreeRef.current ]
      mainTl
      .from(clawsRef.current, { y: 50, opacity: 0 }, 0)
      .from(titleSplit.words, { y: 50, opacity: 0, stagger: 0.05 }, 0)
      .from(circles, { opacity: 0, stagger: { from: "end", amount: 0.5 } }, 0)
      .from(scrollBarRef.current, { opacity: 0, x: 100 }, 0)

      const scrollingTl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: mainScroll.current, start: "top top", end: "+=2000", pin: true, anticipatePin: true, scrub: true  }
      })
      
      scrollingTl
      .to(titleSplit.chars, { color: "white", stagger: 0.01, duration: 0.0001})
      .from(scrollBarWhiteRef.current, { yPercent: -100 }, 0)
      .to(carouselRef.current, { yPercent: -100 })

      
      Draggable.create(draggableWorksRef.current, { type: "x", inertia: true, cursor: "none", bounds: carouselRef.current, edgeResistance: 0.2,  activeCursor: "none"})
      gsap.to(endRef.current, { scaleY: 200, transformOrigin: "top", scrollTrigger: { trigger: mainScroll.current, start: "bottom 100%+=300", end: "bottom 100%-=170", scrub: true } })
    })
    return () => ctx.revert()
  }, [])
  return (
    <section className='bg-black border-8'>
      <div ref={mainScroll} className="container mx-auto border-4 border-black px-5 max-sm:px-0 max-sm:pl-10">
        <div className="grid grid-cols-3 grid-rows-1 overflow-hidden relative">
          <div className="col-span-2 relative pb-40 pt-70 pl-40 max-sm:pl-0">
            <p ref={clawsRef} className='text-neutral-500 text-[400px] max-sm:text-[160px] h-20 absolute top-0 max-sm:top-20 left-10 select-none'>"</p>
            <h1 ref={titleRef} className='text-neutral-800 text-7xl max-sm:text-3xl'>Majority of people can <br /> run a 100 meter dash, <br /> but only a dozen can <br /> do it in under 9.8 <br /> seconds</h1>
          </div> 
          <div className="h-200 max-sm:h-screen relative">
            <div ref={circleOneRef} className="bg-neutral-900 rounded-full w-110 h-110 -translate-y-[50%]"></div>
            <div ref={circleTwoRef} className="bg-neutral-900 rounded-full w-110 h-110 -translate-y-[50%]"></div>
            <div ref={circleThreeRef} className="bg-neutral-900 rounded-full w-110 h-110 -translate-y-[50%]"></div>
            <div ref={scrollBarRef} className="h-50 w-1 bg-neutral-600 absolute top-[43%] right-30 rounded-full overflow-hidden">
              <div ref={scrollBarWhiteRef} className="w-1 h-50 bg-white"></div>
            </div>
          </div>
        </div>

        <div ref={carouselRef} className="pt-20 bg-black overflow-hidden">
            <div ref={draggableWorksRef} className="flex gap-20 w-max">
              <img className='h-150 max-sm:h-75 w-230 max-sm:w-115 border-2 select-none pointer-events-none' src={One} alt="image" />
              <img className='h-150 max-sm:h-75 w-230 max-sm:w-115 border-2 select-none pointer-events-none' src={Two} alt="image" />
              <img className='h-150 max-sm:h-75 w-230 max-sm:w-115 border-2 select-none pointer-events-none' src={Three} alt="image" />
              <img className='h-150 max-sm:h-75 w-230 max-sm:w-115 border-2 select-none pointer-events-none' src={Four} alt="image" />
              <img className='h-150 max-sm:h-75 w-230 max-sm:w-115 border-2 select-none pointer-events-none' src={Five} alt="image" />
            </div> 
        </div>
        <div ref={endRef} className="w-1 h-1 bg-white flex justify-self-center -translate-y-170 max-sm:-translate-y-90 max-sm:-translate-x-5"></div>
      </div>
    </section>
  )
}
