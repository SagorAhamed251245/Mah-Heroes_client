import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaArrowsAltV, FaInfoCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import PageTitles from "../../Shared/PageTitles/PageTitles";
import updatePng from '../../assets/updated.png'
import removePng from '../../assets/remove.png'


const MyToys = () => {
  const { user } = useContext(AuthContext)

  const [myToy, setMyToy] = useState([])
  const [sortPrice, setSortPrice] = useState(false)
  const handelPriceSort = (sort) => {
    setSortPrice(sort)
  }

  useEffect(() => {
    fetch(`https://mah-heros-server.vercel.app/mytoys/${user.email}/${sortPrice}`)
      .then(res => res.json())
      .then(data => setMyToy(data))
  }, [user, sortPrice])






  const handelDeleteToy = (id) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {

        fetch(`https://mah-heros-server.vercel.app/deleteProduct/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(result => {
            console.log(result);
            if (result.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your Toy  has been deleted.',
                'success'
              )
              const remaining = myToy.filter(toy => toy._id !== id);
              setMyToy(remaining);
            }
          })

      }

    })



  }

  console.log(myToy);

  return (
    <div className="overflow-x-auto mt-10">

      <PageTitles titles='Mah Heroes | MY Toys'></PageTitles>
      
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
            <th onClick={() => handelPriceSort(!sortPrice)} className="flex w-full justify-center"><FaArrowsAltV cursor={`pointer`} className={` text-3xl  text-center ${sortPrice ? 'text-primary' : 'text-green-500'}`}></FaArrowsAltV></th>

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
              <td></td>
              <td className="flex  flex-col gap-3 items-center justify-center">
                <Link to={`/toy/${toy._id}`}><FaInfoCircle className="text-sky-500 text-3xl"></FaInfoCircle></Link>
                <Link to={`/updateToy/${toy._id}`} ><img className="w-7" src={updatePng } alt="" /></Link>
                <Link onClick={() => handelDeleteToy(toy._id)} ><img className="w-7" src={removePng} alt="" /></Link>
              </td>


            </tr>)
          }




        </tbody>


      </table>
    </div>
  );
};

export default MyToys;