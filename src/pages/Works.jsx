// General
import { useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import { SplitText } from 'gsap/all';
gsap.registerPlugin(SplitText)
// Imgas
import One from "../assets/sitesExampleOne.jpg";
import Two from "../assets/sitesExampleTwo.jpg";
import Three from "../assets/sitesExampleThree.jpg";
import Four from "../assets/exampleSitesFour.jpg";
import Five from "../assets/exampleSitesFive.jpg";
import Six from "../assets/exampleSitesSix.jpg";
import Seven from "../assets/exampleSitesSeven.jpg";
import ContactUsCards from '../components/contactUs/ContactUsCards';

export default function Works() {
    const mainRef = useRef(null);
    const titleRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const titleSplit = new SplitText(titleRef.current, { type: "chars" })
            gsap.from(titleSplit.chars, { xPercent: "random(-100, 100)", duration: 1,  opacity: 0, scale: 0.9 })
        })
        return () => ctx.revert()
    }, [])
  return (
    <main>
        <section>
            <div ref={mainRef} className="container mx-auto pt-30 pb-10">
                <h1 ref={titleRef} className='text-center text-7xl max-sm:text-3xl pb-10 font-semibold'>Our most recognisible works!</h1>
                <ul>
                    <ContactUsCards text={"African Forests"} image={One} positionImageRight={true}/>
                    <ContactUsCards text={"Helious"} image={Two} positionImageRight={false}/>
                    <ContactUsCards text={"ArtiHuman"} image={Three} positionImageRight={true}/>
                    <ContactUsCards text={"FAR"} image={Four} positionImageRight={false}/>
                    <ContactUsCards text={"AFrame"} image={Five} positionImageRight={true}/>
                    <ContactUsCards text={"NEONIX"} image={Six} positionImageRight={false}/>
                    <ContactUsCards text={"Pioneer"} image={Seven} positionImageRight={true}/>
                </ul>
            </div>
        </section>
    </main>
  )
}
