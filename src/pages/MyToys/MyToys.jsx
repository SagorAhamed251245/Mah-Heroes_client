import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";


const MyToys = () => {
  const { user } = useContext(AuthContext)

  const [myToy, setMyToy] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/mytoys/${user.email}`)
      .then(res => res.json())
      .then(data => setMyToy(data))
  }, [user])

  console.log(myToy);

  return (
    <div className="overflow-x-auto mt-10">


      <div>
        <h1 className="text-3xl text-center my-10 font-bold text-white">My Toys</h1>
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
            myToy.map((toy, index) => <tr className="text-center text-white text-lg" key={toy._id}>
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
              <td className="flex  flex-col gap-3 items-center justify-center">
                <Link to={`/toy/${toy._id}`}><FaInfoCircle className="text-sky-500 text-3xl"></FaInfoCircle></Link>
                <Link ><img className="w-7" src="../../../public/updated.png" alt="" /></Link>
                <Link ><img className="w-7" src="../../../public/remove.png" alt="" /></Link>
              </td>


            </tr>)
          }




        </tbody>


      </table>
    </div>
  );
};

export default MyToys;