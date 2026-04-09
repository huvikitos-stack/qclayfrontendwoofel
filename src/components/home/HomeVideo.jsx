import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

export default function HomeVideo() {
  const wrapperPinRef = useRef(null)
  const videoRef = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {  
      ScrollTrigger.create({
        trigger: wrapperPinRef.current, start: "top top", end: "end top",   pin: true, anticipatePin: 1
      })
      gsap.from(videoRef.current, {  scale: 0.8, scrollTrigger: { trigger: wrapperPinRef.current, start: "top 80%", end: "+=100%", scrub: true } })
    })
    return () => ctx.revert()
  }, [])
  return (
    <section>
      <div ref={wrapperPinRef} className="container mx-auto h-190 max-sm:h-[40vh] max-sm:w-full">
        <iframe ref={videoRef} className='w-full h-full' src="https://www.youtube.com/embed/9NKmApsx5nw" title="QClay Showreel" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </section>
  )
}
