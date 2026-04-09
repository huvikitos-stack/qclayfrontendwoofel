import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { SplitText, Draggable, InertiaPlugin } from 'gsap/all';
gsap.registerPlugin(SplitText, Draggable, InertiaPlugin); 

export default function ContactUsCards(props) {
    const titleOne = useRef(null);
    const titleTwo = useRef(null);

    const draggableContainerRef = useRef(null);
    const draggabllesRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const textSplit = new SplitText(titleOne.current, { type: "chars" })
            const textSplitTwo = new SplitText(titleTwo.current, { type: "chars" })

            const textTl = gsap.timeline({ defaults: { ease: "back" }, repeat: -1 })
            textTl
            .to(textSplit.chars, { stagger: 0.1, yPercent: -100 })
            .to(textSplitTwo.chars, { stagger: 0.1, yPercent: -100 }, 0)

            Draggable.create(draggabllesRef.current, { type: "x", bounds: draggableContainerRef.current, edgeResistance: 0.8, cursor: "none", activeCursor: "none", inertia: true })
        })
        return () => ctx.revert()
    }, [])
  return (
    <div>
        {
            props.positionImageRight ? 
            (
                <li className='border-t-4 py-10 flex items-center perspective-distant'>
                    <img className='select-none w-140 h-80 object-cover origin-left z-10 duration-300 hover:scale-150 hover:shadow-[10px_10px_50px] hover:rotate-y-15' src={props.image} alt="image" />
                    <div className="overflow-hidden w-fit mx-auto h-32">
                        <h1 ref={titleOne} className='text-9xl max-sm:hidden'>{props.text}</h1>
                        <h1 ref={titleTwo} className='text-9xl max-sm:hidden'>{props.text}</h1>
                    </div>
                </li>
            ) : (
                <li className='border-t-4 py-10 flex items-center perspective-distant'>
                    <div className="overflow-hidden w-fit mx-auto h-32">
                        <h1 ref={titleOne} className='text-9xl max-sm:hidden'>{props.text}</h1>
                        <h1 ref={titleTwo} className='text-9xl max-sm:hidden'>{props.text}</h1>
                    </div>
                    <img className='select-none w-140 h-80 object-cover origin-right z-10 duration-300 hover:scale-150 hover:shadow-[-10px_10px_50px] hover:-rotate-y-15' src={props.image} alt="image" />
                </li>
            )
        }
    </div>
  )
}
