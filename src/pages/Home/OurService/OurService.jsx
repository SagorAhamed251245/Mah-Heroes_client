
import AOS from 'aos'; import 'aos/dist/aos.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const OurService = () => {
    useEffect(() => {
        AOS.init();
      }, [])


    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 mt-24 gap-5 w-11/12 mx-auto">
            <div data-aos="fade-up" className="col-span-1 h-48 bg-base border rounded-xl  flex flex-col items-center justify-center ">
                <img className="w-16" src="/car.png" alt="" />
                <p className="text-2xl font-bold text-white">Free shipping</p>
                <p className="font-semibold">Order 24h - 7 Days A Week</p>
            </div>
            {/* 1 */}

            <div data-aos= "fade-down" className="col-span-1 h-48 bg-base border rounded-xl  flex flex-col items-center justify-center ">
                <img className="w-16" src="/cashback.png" alt="" />
                <p className="text-2xl font-bold text-white">Money Back Guarantee</p>
                <p className="font-semibold">Within 7 days</p>

            </div>
            {/* 2 */}

            <div data-aos="fade-up" className="col-span-1 h-48 bg-base border rounded-xl  flex flex-col items-center justify-center ">
                <img className="w-16" src="/purchase.png" alt="" />
                <p className="text-2xl font-bold text-white">Free Returns</p>
                <p className="font-semibold">Within 30 days</p>
            </div>
            {/* 3 */}

            <div data-aos= "fade-down" className="col-span-1 h-48 bg-base border rounded-xl  flex flex-col items-center justify-center ">
                <img className="w-16" src="/24-7.png" alt="" />
                <p className="text-2xl font-bold text-white">24/7 Customer Service</p>
                <p className="font-semibold">Call us +1 (555) 123-4567</p>
            </div>
            {/* 4 */}
        </div>
    );
};

export default OurService;