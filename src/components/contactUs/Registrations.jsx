// General
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { ScrollTrigger, SplitText, Draggable, TextPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText, Draggable, TextPlugin);
import { axiosInstance } from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// Image
import wallpaper from "../../assets/wallpaperRegister.jpg";

export default function Registrations(props) {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const submitRef = useRef(null);

    // Register inputs
    const [ userName, setUserName ] = useState("");
    const [ userCountry, setUserCountry ] = useState("");
    const [ userEmail, setUserEmail ] = useState("");
    const [ userPassword, setUserPassword ] = useState("");

    const navigate = useNavigate();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const signUpUser = async (e) => {
        e.preventDefault()
        try {
            if (!userName || !userCountry || !userEmail || !userPassword) return toast.error("Please fill all inputs");
            if (userPassword.trim().length < 6) return toast.error("Password too short");
            if (userName.trim().length < 2) return toast.error("Name too short");
            if (userCountry.trim().length < 6) return toast.error("Country too short");
            if (!emailRegex.test(userEmail)) return toast.error("Invalid email");
            
            let res = await axiosInstance.post("/signup", { name: userName, country: userCountry, email: userEmail, password: userPassword })
            toast.success("Successfully signed up")
            sessionStorage.setItem("justSignUp", "true");
            setUserName("")
            setUserCountry("")
            setUserEmail("")
            setUserPassword("")
            setTimeout(() => {
                navigate("/signIn")
            }, 3000)
        } catch (err) {
            toast.error("Error, this email probably already exists in our DataBase")
            console.log(err)
        }
    }

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const titleSplit = new SplitText(titleRef.current, { type: "chars" })
            const submitSplit = new SplitText(submitRef.current, { type: "chars" })
            const textSignUp = gsap.timeline( { repeat: -1 } )
            textSignUp
            .to(titleRef.current, { text: "Register!" }, "+=1")
            .to(titleRef.current, { text: "Sign Up!" }, "+=1")
            const heroTl = gsap.timeline()
            heroTl
            .from(titleSplit.chars, { opacity: 0, y: 100, stagger: 0.05 })
            .from(".inputs", { y: 100, stagger: 0.05 }, 0)
            .from(submitSplit.chars, { zoom: 0.8, stagger: 0.05 }, 0)
            .add(textSignUp)
            
        })
        return () => ctx.revert()
    }, [])
  return (
    <section>
        <ToastContainer limit={1000}/>
        <div ref={heroRef} className="container mx-auto bg-no-repeat bg-cover" style={{ backgroundImage: `url(${wallpaper})` }}>
            <form onSubmit={signUpUser} className='flex flex-col py-30 h-screen'>
                <h1 ref={titleRef} className='text-center text-8xl pb-10'>Sign Up!</h1>
                <label className='overflow-hidden w-full flex justify-center'><input value={userName} onChange={(e) => setUserName(e.target.value)} className='inputs outline-none cursor-none w-full text-center' type="text" placeholder='Your name/nickname or Company name'/></label>
                <label className='overflow-hidden w-full flex justify-center'><input value={userCountry} onChange={(e) => setUserCountry(e.target.value)} className='inputs outline-none cursor-none w-full text-center' type="text" placeholder='Your country name'/></label>
                <label className='overflow-hidden w-full flex justify-center'><input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className='inputs outline-none cursor-none w-full text-center' type="email" placeholder='Your email'/></label>
                <label className='overflow-hidden w-full flex justify-center'><input value={userPassword} onChange={(e) => setUserPassword(e.target.value)} className='inputs outline-none cursor-none w-full text-center' type="password" placeholder='Your password'/></label>
                <button ref={submitRef} className='text-8xl flex cursor-none mx-auto mt-5'>Submit</button>
                <Link className='py-10 cursor-none text-center expand-cursor underline decoration-dotted hover:bg-[#3fec5f42] duration-300' to={'/signIn'}>Already have an accoutn? Sing In</Link>
            </form>
        </div>
    </section>
  )
}
