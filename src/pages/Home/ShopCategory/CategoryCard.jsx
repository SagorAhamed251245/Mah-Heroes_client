
import { Link } from "react-router-dom";


const CategoryCard = ({ product }) => {

    const { toy_name, toy_image, price, rating, _id } = product
    return (
        <div className="card w-96  bg-base-100 shadow-xl border  text-white">

            <div className="h-[300px] flex">
                <img className="object-cover w-auto  rounded-2xl" src={toy_image} alt={toy_name} />
            </div>

            <div className="card-body ">
                <h2 className="card-title">Toy Name: {toy_name}</h2>
                <p>Price: ${price}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-end">
                    <Link to={`/toy/${_id}`}><button className="btn btn-primary text-white font-bold">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;