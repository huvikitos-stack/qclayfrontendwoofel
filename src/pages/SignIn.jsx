// General
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { SplitText, TextPlugin } from 'gsap/all';
gsap.registerPlugin( SplitText, TextPlugin);
import { axiosInstance } from "../api/axios";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
// Image
import wallpaper from "../assets/wallpaperSignIn.jpg";

export default function Registrations() {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const submitRef = useRef(null);

    // Sign In inputs
    const [ userEmail, setUserEmail ] = useState("");
    const [ userPassword, setUserPassword ] = useState("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const navigate = useNavigate()
    const signInUser = async (e) => {
        e.preventDefault()
        try {
            if (!userEmail || !userPassword) return toast.error("Please fill all the inputs");
            if (userPassword.trim().length < 6) return toast.error("Password too short");
            if (!emailRegex.test(userEmail)) return toast.error("Invalid email");
            let res = await axiosInstance.post("/signin", { email: userEmail, password: userPassword })
            sessionStorage.setItem("token", res.data.token)
            sessionStorage.setItem("justSignIn", "true")  
            sessionStorage.setItem("justSignUp", "true")  
            toast.success("Successfully signed in")
            setUserEmail("")
            setUserPassword("")
            setTimeout(() => {
                navigate("/")
            }, 2000)
        } catch (err) {
            toast.error("Error")
            console.log(err)
        }
    }

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const titleSplit = new SplitText(titleRef.current, { type: "chars" })
            const submitSplit = new SplitText(submitRef.current, { type: "chars" })
            const textSignUp = gsap.timeline( { repeat: -1 } )
            textSignUp
            .to(titleRef.current, { text: "Log In!" }, "+=1")
            .to(titleRef.current, { text: "Sign In!" }, "+=1")
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
        <ToastContainer/>
        <div ref={heroRef} className="container mx-auto bg-no-repeat bg-cover" style={{ backgroundImage: `url(${wallpaper})` }}>
            <form onSubmit={signInUser} className='flex flex-col py-30 h-screen'>
                <h1 ref={titleRef} className='text-center text-8xl pb-10'>Sign In!</h1>
                <label className='overflow-hidden w-full flex justify-center'><input onChange={(e) => setUserEmail(e.target.value)} value={userEmail} className='inputs outline-none cursor-none w-full text-center' type="text" placeholder='Your email'/></label>
                <label className='overflow-hidden w-full flex justify-center'><input onChange={(e) => setUserPassword(e.target.value)} value={userPassword} className='inputs outline-none cursor-none w-full text-center' type="password" placeholder='Your password'/></label>
                <button ref={submitRef} className='text-8xl flex cursor-none mx-auto mt-5'>Submit</button>
            <Link className='py-10 cursor-none text-center expand-cursor underline decoration-dotted hover:bg-[#caa30842] duration-300' to={'/contactUs'}>Don't have an accoutn? Sing Up</Link>
            </form>
        </div>
    </section>
  )
}
