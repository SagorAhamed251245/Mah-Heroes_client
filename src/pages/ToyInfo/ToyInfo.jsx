import { useLoaderData } from "react-router-dom";


const ToyInfo = () => {
    const toyinfo = useLoaderData()
    const { toy_name, toy_image, price, rating, description, seller_name, seller_email, category, sub_category, available_quantity } = toyinfo
    console.log(toyinfo);
    return (
        <div className=' mt-5 w-[90%] mx-auto flex flex-col gap-24 h-[500px] text-white'>

            <div className="flex   h-[700px]  ">
                <div className="w-1/2 h-[700px] items-center justify-center  flex">
                    <img className='object-cover w-auto h-[400px] rounded-2xl' src={toy_image} alt="Movie" />
                </div>
                <div className=" flex w-1/2  items-center ml-10 text-start">
                    <div className='flex flex-col gap-3'>
                        <h2 className="card-title font-bold text-3xl">{toy_name}</h2>
                        <p>
                            <span className='font-bold text-primary'>Price:</span>
                            <span className=' font-semibold     '> ${price}</span>

                        </p>
                        <p>
                            <span className='font-bold text-primary'>Category:</span>
                            <span className=' font-semibold '> {category}</span>

                        </p>
                        <p>
                            <span className='font-bold text-primary'>Sub Category:</span>
                            <span className=' font-semibold '> {sub_category}</span>

                        </p>
                        <p>
                            <span className='font-bold text-primary'>Available Quantity:</span>
                            <span className=' font-semibold '> {available_quantity}</span>

                        </p>
                        <p>
                            <span className='font-bold text-primary'>Seller Name:</span>
                            <span className=' font-semibold '> {seller_name}</span>

                        </p>
                        <p>
                            <span className='font-bold text-primary'>Seller Email:</span>
                            <span className=' font-semibold '> {seller_email}</span>

                        </p>

                        <p>
                            <span className='font-bold text-primary'>Rating:</span>
                            <span className=' font-semibold '> {rating}</span>
                        </p>

                        <p >
                        <span className='font-bold text-primary'>Description:</span>
                            <span className=' font-semibold '> {description}</span>

                        </p>
                        
                    </div>

                </div>
            </div>



        </div>







    );
};

export default ToyInfo;