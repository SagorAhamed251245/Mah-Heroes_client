import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const NavBar = () => {
    const {logout, user} = useContext(AuthContext)
    return (
        <div className="navbar  font-bold text-white">
            <div className="navbar-start">
                <DropDown></DropDown>
                <a className=" normal-case text-xl font-bold hidden lg:inline-block">Mah Heroes</a>
                <img className="w-14 lg:inline-block hidden" src="herologo-1.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/alltoys'>All Toys</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/mytoys'>My Toys</Link></li>


                </ul>
            </div>
            <div className="navbar-end ">
                <a className=" normal-case text-xl font-bold lg:hidden">Mah Heroes</a>
                <img className="w-14 lg:hidden" src="herologo-1.png" alt="" />

               <div className="hidden lg:inline-flex">
               <ul className="menu menu-horizontal px-1 ">
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/singup'>SingUp</Link></li>
                    <li><Link onClick={logout} to='/login'>Logout</Link></li>
                    <div className="avatar online">
                        <div className="w-10 mask mask-squircle">
                            <img src={user?.photoURL} />
                        </div>
                    </div>

                </ul>
               </div>
            </div>
        </div>
    );
};

export default NavBar;