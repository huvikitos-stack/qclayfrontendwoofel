// General
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default function HomeSocials() {
  const mainScroll = useRef(null);
  const textsOneRef = useRef(null);
  const textsTwoRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, { width: "100%", scrollTrigger: { trigger: mainScroll.current, start: "top top", end: "+=800", scrub: true, pin: true } })
      const tl = gsap.timeline({ scrollTrigger: { trigger: mainScroll.current, start: "top+=10% top+=10%", end: "+=800", scrub: true, pin: true } })
      tl
      .to(textsOneRef.current.children, { color: "black" })
      .to(textsOneRef.current.children, { rotateY: -90, stagger: 0.1})
      .from(textsTwoRef.current.children, { rotateY: 90, stagger: 0.1}, "-=0.5")
    })
    return () => ctx.revert()
  }, [])
  return (
    <section className='bg-black'>
      <div ref={mainScroll} className="container mx-auto">
        <div ref={contentRef} className="bg-white flex justify-center py-40 max-sm:py-60 w-1 justify-self-center">
          <div className="flex items-center relative">
            <div ref={textsOneRef} className="perspective-midrange absolute text-transparent">
              {Array.from({ length: 10 }).map((_, index) => (
              <h2 key={index} className='text-3xl font-semibold pb-2 text-nowrap'>WE'RE FOLLOWED BY 150K DESIGNERS</h2>
            ))}
            </div>
              <div ref={textsTwoRef} className="flex max-sm:scale-50 flex-col leading-8 perspective-midrange text-nowrap">
                <a target='blank_' className='hover:text-neutral-400 cursor-none expand-cursor-dramatic pb-10 text-[85px] font-semibold' href="https://dribbble.com/qclay">ON DRIBBBLE</a>
                <a target='blank_' className='hover:text-neutral-400 cursor-none expand-cursor-dramatic pb-10 text-[70px] font-semibold' href="https://www.instagram.com/qclaydesign/">ON INSTAGRAM</a>
                <a target='blank_' className='hover:text-neutral-400 cursor-none expand-cursor-dramatic pb-10 text-[102px] font-semibold'href="https://www.tiktok.com/@qclay.design">ON TIKTOK</a>
                <a target='blank_' className='hover:text-neutral-400 cursor-none expand-cursor-dramatic pb-10 text-[85px] font-semibold' href="https://www.behance.net/qclay">ON BEHANCE</a>
                <a target='blank_' className='hover:text-neutral-400 cursor-none expand-cursor-dramatic pb-10 text-[78px] font-semibold' href="https://www.pinterest.com/qclaydesign/">ON PINTEREST</a>
                <a target='blank_' className='hover:text-neutral-400 cursor-none expand-cursor-dramatic pb-10 text-[67px] font-semibold' href="https://www.awwwards.com/QClay/">ON AWWWARDS</a>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
