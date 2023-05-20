import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import PageTitles from "../../Shared/PageTitles/PageTitles";


const AllToys = () => {
    const [searchToy, SetSearchToy] = useState("");

    const [alltoys, setAllToys] = useState([])
    console.log(searchToy);


    const FindAlltoys = useLoaderData();

    useEffect(() => {

        setAllToys(FindAlltoys)

    }, [FindAlltoys])

    useEffect(() => {
        fetch(`https://mah-heros-server.vercel.app/getToyByName/${searchToy}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAllToys(data);
            });

    }, [searchToy])



    const handelClick = (event) => {
        event.preventDefault()
        const form = event.target;

        const text = form.findName.value
        SetSearchToy(text);
    }

    return (
        <div className="overflow-x-auto mt-10">


            <PageTitles titles='Mah Heroes | All Toys'></PageTitles>
            <div>
                <form onSubmit={handelClick} className="w-1/2 mx-auto my-10">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </div>
                        <input

                            type="text"
                            name='findName'
                            className="block w-full p-4 pl-10  text-white text-lg border border-gray-300 rounded-lg bg-transparent    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                            placeholder="Search"
                            required
                        />
                        <button
                            type="text"
                            className="text-white absolute right-2.5 bottom-2.5    focus:ring-4 focus:outline-none btn btn-primary font-medium rounded-lg text-sm px-4   "

                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>



            <table className="table w-11/12 mx-auto">
                {/* head */}
                <thead >
                    <tr className="text-center font-bold text-white">
                        <th>#</th>
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
                        alltoys.map((toy, index) => <tr className="text-center text-white text-lg" key={toy._id}>
                            <td>{index + 1}</td>
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
                            <td><Link to={`/toy/${toy._id}`}><button className="btn btn-primary text-white font-bold">View Details</button></Link></td>


                        </tr>)
                    }




                </tbody>


            </table>
        </div>
    );
};

export default AllToys;