import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const MyToys = () => {
  const {user} = useContext(AuthContext)

  const [myToy , setMyToy] = useState([])
  useEffect(()=> {
    fetch(`http://localhost:5000/mytoys/${user.email}`)
    .then(res => res.json())
    .then(data => setMyToy(data))
  }, [user])

  console.log(myToy);

  return (
    <></>
  );
};

export default MyToys;