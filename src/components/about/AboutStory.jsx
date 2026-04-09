// Images
import One from "../../assets/aboutPageImage.jpg";
import Two from "../../assets/friends.jpg";

export default function AboutStory() {
  return (
    <section>
        <div className="container mx-auto">
            <div className="h-screen bg-neutral-300 w-full grid grid-cols-3 max-sm:flex max-sm:flex-col">
                <div className="col-span-2 max-sm:w-full bg-neutral-50 rounded-[60px] p-13 flex flex-col gap-y-5">
                    <h1 className='py-5 border-y-2 border-neutral-500 text-6xl'>A little bit about us</h1>
                    <p className='text-neutral-600 w-100 text-center mx-auto'>QClay is becoming one of the world's top designs agencies, we do the best interfaces, branding and develop websites with mobile applications We are the only agency whose work is known to every UI/UX designer from anywhere in the world</p>
                    <div className="flex justify-around">
                        <h1 className='py-10 text-4xl font-semibold w-200' >We have implemented projects for companies such as :</h1>
                        <img className='object-contain w-130' src={Two} alt="image" />
                    </div>
                </div>
                <div className="rounded-[60px]">
                    <img className='w-full h-full max-sm:h-65 object-cover rounded-[60px]' src={One} alt="image" />
                </div>
            </div>
        </div>
    </section>
  )
}
