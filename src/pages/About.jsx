// General
import { useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
// Sections
import AboutStory from '../components/about/AboutStory';
import AboutOurStory from '../components/about/AboutOurStory';
import ThankYour from '../components/about/ThankYour';

export default function About() {
  const mainRef = useRef(null);
  const sectionOne = useRef(null);
  const sectionTwo = useRef(null);
  const sectionThree = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mainTl = gsap.timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: mainRef.current, start: "top top", end: "+=2000", pin: true, scrub: 0.5, anticipatePin: 1 }})
      mainTl
      .to(sectionOne.current, { filter: "blur(10px)", scale: 0.8 })
      .to(sectionTwo.current, { yPercent: -100 }, 0)
      .to(sectionThree.current, { yPercent: -100 }, 0)
      .to(sectionTwo.current, { filter: "blur(10px)", scale: 0.8 })
      .to(sectionThree.current, { yPercent: -200 }, "<")
    })
    return () => ctx.revert()
  }, [])
  return (
    <main>
        <div ref={mainRef} className="overflow-hidden relative h-screen">
          <div ref={sectionOne}><AboutStory/></div>
          <div ref={sectionTwo}><AboutOurStory /></div>
          <div ref={sectionThree}><ThankYour /></div>
        </div>
    </main>
  )
}
