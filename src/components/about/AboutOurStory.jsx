import { Link } from 'react-router-dom'; 
// Images
import Two from "../../assets/aboutPageImageTwo.jpg";
import award from "../../assets/numberOne.jpg";
import dribbble from "../../assets/Dribbble-Logo.png";

export default function AboutOurStory() {
  return (
    <section>
        <div className="container mx-auto">
            <div className="h-screen bg-neutral-300 w-full grid grid-cols-3">
                <div className="rounded-[60px] max-sm:hidden">
                    <div className="p-5 bg-white rounded-[60px] flex items-center gap-5">
                        <img className='w-20 h-20' src={award} alt="image" />
                        <div className="pt-10">
                            <img className='object-cover -translate-y-6 absolute h-20' src={dribbble} alt="image" />
                            <h2 className='py-10 text-xl font-semibold'>rating for web studios</h2>
                        </div>
                    </div>
                    <img className='w-full h-136 select-none object-cover rounded-[60px]' src={Two} alt="image"/>
                </div>
                <div className="col-span-2 max-sm:col-span-3 bg-neutral-50 rounded-[60px] p-13 flex flex-col gap-y-5">
                    <h1 className='py-5 border-y-2 border-neutral-500 text-6xl'>Our Story</h1>
                    <div className="pt-10 w-full grid grid-cols-3 gap-x-10">
                        <h3 className='text-2xl max-sm:text-xl'>It all started with an idea when we were working under an international holding, while were for a few years on the projects with over 50 million of monthly visitors.</h3>
                        <p className='text-neutral-600 col-span-2'>There, our core team has gained experience in analytics, user experience, graphic design and etc. We were confident in our skills and we believed that we can become one of the top design agencies globally - and we gave it a shot. <br /><br /> Our team of 5 has grown to 40+ members and expanded its geography to many countries across the globe in 3 years. Today, we have experts across many fields, which were selected from thousands of applicants, and we have also developed our very own AI-backed analytics tool. We are still growing, and growing very rapidly, with offices in South Korea, Georgia, and UAE. This year we have become the fastest growing design studio on Dribbble and we have over 150K designers following us on social media - making us the trend-setters globally</p>
                    </div>
                    <div className="flex gap-x-5 w-full justify-end">
                        <Link to={"/works"} className='expand-cursor text-[18px] bg-gray-300 rounded-full w-fit h-fit px-2 cursor-none'>Check Our Portfolio</Link>
                        <Link to={"/contactUs"} className='expand-cursor text-[18px] bg-black text-white rounded-full w-fit h-fit px-2 cursor-none'>Get in Touch</Link>
                    </div>
                    <ul className="flex gap-5 justify-center w-full">
                        <li className='p-6 w-[30%] rounded-[60px] bg-neutral-300'>
                            <p className='text-[14px] text-neutral-600'>designers following us on social media</p>
                            <p className='text-3xl text-black font-bold text-end'>+150k</p>
                        </li>
                        <li className='p-6 w-[30%] rounded-[60px] bg-neutral-300'>
                            <p className='text-[14px] text-neutral-600'>team members all over <br /> the world</p>
                            <p className='text-3xl text-black font-bold text-end'>+40</p>
                        </li>
                        <li className='p-6 w-[30%] rounded-[60px] bg-neutral-300'>
                            <p className='text-[14px] text-neutral-600'>countries represented in our <br /> agency</p>
                            <p className='text-3xl text-black font-bold text-end'>10</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
