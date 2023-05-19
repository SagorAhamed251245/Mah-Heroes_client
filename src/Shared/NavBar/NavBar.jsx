import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const NavBar = () => {
    const { logout, user } = useContext(AuthContext)


    return (
        <div className={`navbar  font-bold text-white md:w-11/12 mx-auto`}>
            <div className="navbar-start">
                <DropDown></DropDown>
                <a className=" normal-case text-xl font-bold hidden lg:inline-block">Mah Heroes</a>
                <img className="w-14 lg:inline-block hidden" src="herologo-1.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5">
                    <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
                    >Home</NavLink></li>

                    <li><NavLink to='/alltoys' className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
                    >All Toys</NavLink></li>

                    <li><NavLink to='/blogs' className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
                    >Blogs</NavLink></li>

                    {user && <>
                        <li><NavLink to='/mytoys' className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
                        >My Toys</NavLink></li>

                        <li><NavLink to='/addtoy' className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
                        >Add A Toy</NavLink></li>

                    </>}


                </ul>
            </div>
            <div className="navbar-end ">
                <a className=" normal-case text-xl font-bold lg:hidden">Mah Heroes</a>
                <img className="w-14 lg:hidden" src="herologo-1.png" alt="" />

                <div className="hidden lg:inline-flex">
                    <div className="menu menu-horizontal px-1 gap-3 ">

                        {user ? <>
                            <NavLink onClick={logout} to='/login'><button className="btn btn-primary text-white font-bold">Logout</button></NavLink>
                            <div className="avatar online">
                                <div className="w-10 mask mask-squircle">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                        </> : <>
                            <NavLink to='/login'><button className="btn btn-primary text-white font-bold">Login</button></NavLink>
                            <NavLink to='/singup'><button className="btn btn-primary text-white font-bold">SingUp</button></NavLink>
                        </>}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;