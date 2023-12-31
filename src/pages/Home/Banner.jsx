import bannerImg1 from '../../assets/spider-man-1.png'
import AOS from 'aos'; import 'aos/dist/aos.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className='md:w-11/12 md:rounded-xl mx-auto md:h-[500px]   h-auto bg-primary flex '>
      <div className='w-1/2 flex items-center '>
        <h1 className='md:text-6xl text-3xl font-bold p-5 font-Playfair text-white ' data-aos="fade-up">My Father <br /> Is
          My <br /> <span className='text-[#2aabfb] overflow-hidden'>Super Hero</span> </h1>
      </div>
      <div className='w-1/2 flex  justify-end items-start md:items-stretch'>
        <img className='lg:object-cover object-contain overflow-hidden' src={bannerImg1} alt="banner" data-aos="zoom-in" />
      </div>
    </section>
  );
};

export default Banner;