import bannerImg1 from '../../assets/spider-man-1.png'


const Banner = () => {
    return (
        <section className='md:w-11/12 md:rounded-xl mx-auto md:h-[500px]   h-auto bg-primary flex '>
          <div className='w-1/2 flex items-center '>
              <h1 className='md:text-6xl text-3xl font-bold p-5 font-Playfair text-white '>My Father <br /> Is
               My <br /> <span className='text-[#2aabfb]'>Super Hero</span> </h1>
          </div>
              <div className='w-1/2 flex  justify-end items-start md:items-stretch'>
                <img className='lg:object-cover object-contain' src={bannerImg1} alt="banner" />
              </div>
        </section>
    );
};

export default Banner;