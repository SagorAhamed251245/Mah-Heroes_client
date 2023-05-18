import { Link, useLoaderData } from "react-router-dom";


const AllToys = () => {
    const alltoys = useLoaderData()
    console.log(alltoys);
    return (
        <div className="overflow-x-auto mt-10">
            <table className="table w-11/12 mx-auto">
                {/* head */}
                <thead >
                    <tr className="text-center font-bold text-white">
                        <th></th>
                        <th>Toy Name</th>
                        <th>Price</th>
                        <th>Sub-category</th>
                        <th>Available Quantity</th>
                        <th>Seller</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>

                    {
                        alltoys.map(toy => <tr className="text-center text-white text-lg" key={toy._id}>

                            <td>
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src={toy.toy_image} />
                                    </div>
                                </div>
                            </td>
                            <td>{toy.toy_name}</td>
                            <td>{toy.price}</td>
                            <td>{toy.sub_category}</td>
                            <td>{toy.available_quantity}</td>
                            <td>{toy.seller_name}</td>
                            <td><Link to={`/toyinfo/${toy._id}`}><button className="btn btn-primary text-white font-bold">View Details</button></Link></td>


                        </tr>)
                    }




                </tbody>


            </table>
        </div>
    );
};

export default AllToys;