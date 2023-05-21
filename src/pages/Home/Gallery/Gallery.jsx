import { useEffect, useState } from "react";
import AOS from 'aos'; import 'aos/dist/aos.css';
import 'aos/dist/aos.css';

const Gallery = () => {
    const [galleryPhotos, setGalleryPhotos] = useState([]);



    useEffect(() => {
        fetch('https://mah-heros-server.vercel.app/galleryPhotos')
            .then(res => res.json())
            .then(data => setGalleryPhotos(data))

    }, [galleryPhotos])
    console.log(galleryPhotos);


    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="grid grid-cols-2 grid-rows-2 h-[900px] w-9/12 mx-auto gap-5 mt-24">
            <div className="col-span-1   flex  ">
                <img data-aos="fade-right" className="w-full object-cover rounded-xl" src={galleryPhotos[0]?.imageURL} alt="" />
            </div>

            <div className="col-span-1 grid grid-cols-2 grid-rows-2  w-full  gap-5  ">
                <div className="col-span-1   flex ">
                    <img data-aos="fade-left" className="w-full object-cover rounded-xl" src={galleryPhotos[1]?.imageURL} alt="" />
                </div>
                {/* 1 */}
                <div className="col-span-1   flex ">
                    <img data-aos="fade-right" className="w-full object-cover rounded-xl" src={galleryPhotos[2]?.imageURL} alt="" />
                </div>
                {/* 2 */}
                <div className="col-span-1   flex ">
                    <img data-aos="fade-left" className="w-full object-cover rounded-xl" src={galleryPhotos[3]?.imageURL} alt="" />
                </div>
                {/* 3 */}
                <div className="col-span-1  flex ">
                    <img data-aos="fade-right" className="w-full object-cover rounded-xl" src={galleryPhotos[4]?.imageURL} alt="" />
                </div>

            </div>

            <div className="col-span-1 grid grid-cols-2 grid-rows-2  w-full  gap-5  ">
                <div className="col-span-1   flex ">
                    <img data-aos="fade-right" className="w-full object-cover rounded-xl" src={galleryPhotos[4]?.imageURL} alt="" />
                </div>
                {/* 1 */}
                <div className="col-span-1   flex ">
                    <img data-aos="fade-left" className="w-full object-cover rounded-xl" src={galleryPhotos[3]?.imageURL} alt="" />
                </div>
                {/* 2 */}
                <div className="col-span-1   flex ">
                    <img data-aos="fade-right" className="w-full object-cover rounded-xl" src={galleryPhotos[2]?.imageURL} alt="" />
                </div>
                {/* 3 */}
                <div className="col-span-1  flex ">
                    <img data-aos="fade-left" className="w-full object-cover rounded-xl" src={galleryPhotos[1]?.imageURL} alt="" />
                </div>

            </div>

            <div className="col-span-1   flex ">
                <img data-aos="fade-right" className="w-full object-cover rounded-xl" src={galleryPhotos[5]?.imageURL} alt="" />
            </div>
        </div>
    );
};

export default Gallery;