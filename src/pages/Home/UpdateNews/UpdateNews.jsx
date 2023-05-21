import AOS from 'aos'; import 'aos/dist/aos.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const UpdateNews = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="flex flex-col lg:flex-row  gap-5 mt-24 w-11/12 mx-auto ">

            {/* 1 */}
            <div data-aos="fade-right" className="hero lg:h-96 h-auto bg-base-100 border rounded-xl">
                <div className="hero-content p-0 m-0 flex-col lg:flex-row h-auto lg:h-96 w-auto">
                    <div className="h-96 p-0 m-0 flex w-auto lg:w-[40%] overflow-hidden">
                        <img src="/public/person1.jpg" className=" h-[380px] my-auto rounded-lg  object-cover w-auto" />
                    </div>
                    <div className="w-[60%]">
                        <h1 className="text-3xl font-bold text-white">March Official Update News!</h1>
                        <p>From: Jeeves Hooks, CEO of Mah Heroes</p>
                        <p className="py-6">We are excited to announce that we have selected some incredible new action toys for this month! In addition, we have made significant improvements to our website, ensuring a user-friendly experience for all our customers....</p>
                        <button className="btn btn-primary mb-5 lg:mb-0 text-white ">Read more</button>
                    </div>
                </div>
            </div>
            {/* 1 */}

            <div data-aos="fade-left"  className="hero lg:h-96 h-auto bg-base-100 border rounded-xl">
                <div className="hero-content p-0 m-0 flex-col lg:flex-row h-auto lg:h-96 w-auto">
                    <div className="h-96 p-0 m-0 flex w-auto lg:w-[40%] overflow-hidden">
                        <img src="/public/person2.jpg" className=" h-[380px] my-auto rounded-lg  object-cover w-auto" />
                    </div>
                    <div className="w-[60%]">
                        <h1 className="text-3xl font-bold text-white">Exciting Updates at Mah Heroes!</h1>
                        <p>From: Robot Hell, Director of Mah Heroes</p>
                        <p className="py-6">We have some thrilling news to share with you! At Mah Heroes, we have been working tirelessly to enhance your shopping experience. We have curated an amazing selection of action toys that are bound to ignite your imagination...
                    </p>
                        <button className="btn btn-primary mb-5 lg:mb-0 text-white ">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateNews;