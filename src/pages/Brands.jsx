import { useEffect, useState,  useRef } from "react";
import { axiosInstance } from "../api/axios";
import { toast, ToastContainer } from "react-toastify";
// Icons
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";

export default function Brands() {
    const [editingId, setEditingId] = useState(null);
    const [brandsState, setBrandsState] = useState([]);
    const [sitesState, setSitesState] = useState([]); 
    const [openSiteFormState, setOpenSiteFormState] = useState(false);
    // Input states 
    const [brandNameState, setBrandNameState] = useState("");
    const [brandOriginState, setBrandOriginState] = useState("");
    const [brandSloganState, setBrandSloganState] = useState("");
    const [brandDescriptionState, setBrandDescriptionState] = useState("");

    const [siteNameState, setSiteNameState] = useState("");
    const [siteBudgetState, setSiteBudgetState] = useState("");
    const [siteFrameworkState, setSiteFrameworkState] = useState("");
    const [siteBrandState, setSiteBrandState] = useState(null);    

    const formRef = useRef(null);
    const getBrands = async () => {
        try {
            let res = await axiosInstance.get("/brand", {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            });
            setBrandsState(res.data.brands)
        } catch (err) {
            console.log(err)
        }
    }
    const postBrand = async (e) => {
        e.preventDefault()
        try {
            if  (!brandNameState || !brandOriginState || !brandSloganState || !brandDescriptionState) return toast.error("Please fill all fields")
            if  (brandNameState.trim().length < 2 || brandOriginState.trim().length < 2 || brandSloganState.trim().length < 2 || brandDescriptionState.trim().length < 10) return toast.error("Not enough data is, please write more")
            if (editingId) {
                await axiosInstance.put(`/brand/${editingId}`, { name: brandNameState, origin: brandOriginState, slogan: brandSloganState, description: brandDescriptionState }, { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } })
                getBrands()
                toast.success("Brand is updated")
            } else {
                await axiosInstance.post("/brand", { name: brandNameState, origin: brandOriginState, slogan: brandSloganState, description: brandDescriptionState}, { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } })
                getBrands()
                toast.success("Brand is created")
            }
            setEditingId(null);
            setBrandNameState("");
            setBrandOriginState("");
            setBrandSloganState("");
            setBrandDescriptionState("");
            
        } catch (err) {
            console.log(err)
            toast.error("Unexpected error")
        }
    }
    const deleteBrand = async (id) => {
      try {
        await axiosInstance.delete(`/brand/${id}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`
          }
        });
        setBrandsState(prev => prev.filter(b => b._id !== id));
        toast.success("brand is deleted")
      } catch (err) {
        console.log(err);
      }
    };
    const handleEdit = (brand) => {
      setEditingId(brand._id);
      setBrandNameState(brand.name);
      setBrandOriginState(brand.origin);
      setBrandSloganState(brand.slogan);
      setBrandDescriptionState(brand.description);
    };
    const cancelEdit = () => {
        setEditingId(null);
        setBrandNameState("");
        setBrandOriginState("");
        setBrandSloganState("");
        setBrandDescriptionState("");
    }

    const closeSiteForm = () => {
        setOpenSiteFormState(false);
        setSiteBrandState(null);
    };
    const handleSite = (brand) => {
        if (siteBrandState === brand._id && openSiteFormState) {
            setOpenSiteFormState(false);
            setSiteBrandState(null);
        } else {
            setOpenSiteFormState(true);
            setSiteBrandState(brand._id);
            setTimeout(() => {
                formRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 0);
        }
    };

    const getSites = async () => {
        try {
            let responce = await axiosInstance.get("/site", { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } })
            setSitesState(responce.data.sites)
        } catch(err) {
            console.log(err)
            toast.error("Error")
        }
    }
    const postSite = async (e) => {
        e.preventDefault()
        try {
            if  (!siteNameState || !siteBudgetState || !siteFrameworkState) return toast.error("Please fill all fields")
            if  (siteNameState.trim().length < 2  || siteFrameworkState.trim().length < 2) return toast.error("Not enough data is, please write more")
            await axiosInstance.post("/site", { name: siteNameState, budget: siteBudgetState, framework: siteFrameworkState, brand: siteBrandState }, { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } })
            setSiteNameState("")
            setSiteBudgetState("")
            setSiteFrameworkState("")
            getSites()
            toast.success("Site is created")
        } catch (err) {
            console.log(err)
            toast.error("Error")
        }
    }
    const deleteSite = async (id) => {
        try {
            await axiosInstance.delete(`/site/${id}`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            });
            await getSites()
            toast.success("Brand is deleted")
        } catch (err) {
            console.log(err)
            toast.error("Error")
        }
    }

    useEffect(() => {
        getBrands()
        getSites()
    }, [])
  return (
    <main>
        <ToastContainer/>
        <section>
            <div ref={formRef} className="container mx-auto px-10 pt-25 flex max-sm:block">
                <div className="h-screen w-[50vw] max-sm:w-full relative">
                    {openSiteFormState ? (
                        <div className="h-screen w-full z-10 top-0 left-0 overflow-auto absolute bg-neutral-100">
                            <FaMinusCircle className="text-2xl text-red-600 flex justify-self-end mr-10" onClick={closeSiteForm}/>
                            <h1 className="text-6xl font-semibold mb-5">Create site</h1>
                            <form onSubmit={postSite} className="w-full pr-20">
                                <label>
                                    <input onChange={(e) => setSiteNameState(e.target.value)} value={siteNameState} className="h-10 text-2xl w-full outline-0" type="text" placeholder="Sites' name"/>
                                </label>
                                <label>
                                    <input onChange={(e) => setSiteBudgetState(e.target.value)} value={siteBudgetState} className="h-10 text-2xl w-full outline-0" type="number" placeholder="Budget in $"/>
                                </label>
                                <label>
                                    <input onChange={(e) => setSiteFrameworkState(e.target.value)} value={siteFrameworkState} className="h-10 text-2xl w-full outline-0 mb-50" type="text" placeholder="create site with (React, node, Next, Vue, Typescript... )"/>
                                </label>
                                <button className='text-white text-3xl bg-black rounded-full w-full py-5 expand-cursor-dramatic cursor-none'>Create Site</button>
                            </form>
                        </div>
                    ) : (
                        <div className=""></div>
                    )}


                    <h1 className="text-6xl max-sm:text-3xl font-semibold mb-5">Create your own brand and identity</h1>
                    <form onSubmit={postBrand} className="w-full pr-20">
                        <label>
                            <input onChange={(e) => setBrandNameState(e.target.value)} value={brandNameState} className="h-10 text-2xl w-full outline-0" type="text" placeholder="Brands' name"/>
                        </label>
                        <label>
                            <input onChange={(e) => setBrandOriginState(e.target.value)} value={brandOriginState} className="h-10 text-2xl w-full outline-0" type="text" placeholder="Brands' origin"/>
                        </label>
                        <label>
                            <input onChange={(e) => setBrandSloganState(e.target.value)} value={brandSloganState} className="h-10 text-2xl w-full outline-0" type="text" placeholder="slogan"/>
                        </label>
                        <label>
                            <textarea onChange={(e) => setBrandDescriptionState(e.target.value)} value={brandDescriptionState} className="h-50 text-2xl w-full outline-0 block" type="" placeholder="desctiption"/>
                        </label>
                        <button className='text-white text-3xl bg-black rounded-full w-full py-5 expand-cursor-dramatic cursor-none'>{editingId ? "Update Brand" : "Create Brand"}</button>
                    </form>
                        <button onClick={cancelEdit} className='text-white text-xl bg-black rounded-full w-fit px-10 py-4 expand-cursor-dramatic cursor-none mt-5'>Cancel edit</button>
                </div>

                <div className="overflow-hidden w-[50vw] max-sm:w-full">
                    <div className="">
                        {brandsState.map((brands) => 
                        {
                            const brandsSites = sitesState.filter((site) => site.brand._id == brands._id)
                            return (<div className="py-5 border-t-2 flex flex-col" key={brands._id}>
                                <div className="flex justify-between max-sm:block group">
                                    <div className="">
                                        <h1 className="text-5xl font-bold ">{brands.name}</h1>
                                        <h2 className="text-3xl font-semibold ">Originated in {brands.origin}</h2>
                                        <p className="text-2xl ">{brands.slogan}</p>
                                        <p className="">{brands.description}</p>
                                    </div>
                                    <div className="flex group-hover:scale-x-100 max-sm:scale-x-100 max-sm:w-full scale-x-0 origin-right duration-300">
                                        <button className="cursor-none hover:scale-110 hover:brightness-110 hover:shadow-2xl duration-300 px-10 max-sm:w-full max-sm:py-5 flex justify-center items-center sm:h-full bg-red-600 text-4xl" onClick={() => deleteBrand(brands._id)}><MdDeleteForever/></button>
                                        <button className="cursor-none hover:scale-110 hover:brightness-110 hover:shadow-2xl duration-300 px-10 max-sm:w-full max-sm:py-5 flex justify-center items-center sm:h-full bg-amber-600 text-4xl" onClick={() => handleEdit(brands)}><FaEdit/></button>
                                        <button className="cursor-none hover:scale-110 hover:brightness-110 hover:shadow-2xl duration-300 px-10 max-sm:w-full max-sm:py-5 flex justify-center items-center sm:h-full bg-green-600 text-4xl" onClick={() => handleSite(brands)}> {openSiteFormState ? <FaMinusCircle/> : <FaCirclePlus/> }</button>
                                    </div>
                                </div>
                                <div className="">
                                    {brandsSites.map((site) => (
                                        <div className="ml-5 p-5 flex justify-between border-l-2 group" key={site._id}>
                                            <div className="">
                                                <h1 className="text-3xl font-semibold">{site.name}</h1>
                                                <p className="text-2xl">{site.budget} $</p>
                                                <p className="text-xl">Create with: {site.framework}</p>
                                            </div>
                                            <div className="flex group-hover:scale-x-100 scale-x-0 origin-right duration-300">
                                                <button className="cursor-none hover:scale-110 hover:brightness-110 hover:shadow-2xl duration-300 px-10 h-full bg-red-600 text-4xl" onClick={() => deleteSite(site._id)}><MdDeleteForever/></button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
