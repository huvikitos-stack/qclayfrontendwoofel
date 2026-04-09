// General
import { useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)
// Images
import stoneOne from "../../assets/stonesOne.jpg";
import stoneTwo from "../../assets/stonesTwo.jpg";
import stoneThree from "../../assets/stonesThree.jpg";
import wpOne from "../../assets/wallpaperOne.jpg";
import wpTwo from "../../assets/wallpaperTwo.jpg";
import wpThree from "../../assets/wallpaperThree.jpg";

export default function HomeAbout(props) {
  const aboutText = useRef(null)
  const wrapperAboutRef = useRef(null)
  const stonesOneRef = useRef(null)
  const stonesTwoRef = useRef(null)
  const stonesThreeRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const aboutSplit = new SplitText(aboutText.current, { type: "lines" })
      gsap.from(aboutSplit.lines, { y: 100, opacity: 0, rotate: 12, transformOrigin: "left", stagger: 0.1, scrollTrigger: { trigger: wrapperAboutRef.current, start: "top 20%", toggleActions: "play none none reverse"}})
      const totalWidth = wrapperAboutRef.current.scrollWidth;
      const viewerPortWidth = window.innerWidth;
      const mainScroll = gsap.to(wrapperAboutRef.current, { x: -(totalWidth - viewerPortWidth), ease: "none", scrollTrigger: { trigger: wrapperAboutRef.current, start: "top 10%", end: () => `+=${totalWidth}`, scrub: 1, pin: true, anticipatePin: 1 } })
      const stoneImages = [
        {ref: stonesOneRef, delay: 0},
        {ref: stonesTwoRef, delay: 0.2},
        {ref: stonesThreeRef, delay: 0.4}
      ]
      stoneImages.forEach((stone, index) => {
        gsap.to(stone.ref.current, {
          xPercent: 120,
          ease: "none",
          scrollTrigger: {
            trigger: stone.ref.current,
            containerAnimation: mainScroll,
            start: "left 80%",
            end: "left 20%",  
            scrub: true,
          }
        })
      })
    })
    return () => ctx.revert()
  }, [])
  return (
    <section>
      <div  className="container mx-auto overflow-hidden">
        <div ref={wrapperAboutRef} className="">
          <div className="flex gap-40 py-5"> 
          {/* About text */}
          <div className="w-200 flex justify-center py-60 text-nowrap px-30">
            <h1 ref={aboutText} className='text-8xl text-black max-sm:text-5xl max-sm:mr-30'>What About <br /> QClay?</h1>
          </div>
          {/* Horizontal cards */}
          <div className="flex gap-8">
            <div className="w-260 max-sm:w-160 h-full rounded-[100px] p-10 shadow-2xl" style={{ backgroundImage: `url(${wpOne})` }}>
              {/* Images */}
              <div className="">
                <img ref={stonesOneRef} className='rounded-full w-100 max-sm:w-60 h-50 object-cover' src={stoneOne} alt="image" />
              </div>
              {/* Text */}
              <div className="">
                <h2 className='text-8xl max-sm:text-4xl w-230 mt-20 mb-5'>We help our clients to shine</h2>
                <p className='text-xl w-130 text-gray-400'>We collaborete as a collective of individuals bringing their whole self to a project and, together, create a work that none of us could make on our own</p>
              </div>
            </div>
            <div className="w-260 max-sm:w-160 h-full rounded-[100px] p-10 shadow-2xl" style={{ backgroundImage: `url(${wpTwo})` }}>
              {/* Images */}
              <div className="">
                <img ref={stonesTwoRef} className='rounded-full w-100 max-sm:w-60 h-50 object-cover' src={stoneTwo} alt="image" />
              </div>
              {/* Text */}
              <div className="">
                <h2 className='text-8xl max-sm:text-4xl w-230 mt-20 mb-5'>We translate research into solutions</h2>
                <p className='text-xl w-130 text-gray-400'>We offer complete process from discovery, branding, design, launch, to post-launch optimization and tesing.</p>
              </div>
            </div>
            <div className="w-260 max-sm:w-160 h-full rounded-[100px] p-10 shadow-2xl" style={{ backgroundImage: `url(${wpThree})` }}>
              {/* Images */}
              <div className="">
                <img ref={stonesThreeRef} className='rounded-full w-100 max-sm:w-60 h-50 object-cover' src={stoneThree} alt="image" />
              </div>
              {/* Text */}
              <div className="">
                <h2 className='text-8xl max-sm:text-4xl w-230 mt-20 mb-5'>Out team is very global</h2>
                <p className='text-xl w-130 text-gray-400'>Our global team of researchers, stragists, creatives, and engineers work with steamlined porcesses to break through organizational roadblocks and shape the brands of tomorrow</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
