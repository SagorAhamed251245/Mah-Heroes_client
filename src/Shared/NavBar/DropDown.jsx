import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";



const DropDown = () => {
    const { logout, user } = useContext(AuthContext)

    return (
        <div className={` dropdown  text-white font-bold`}>
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="bg-base-100 flex flex-col justify-center items-center gap-5 dropdown-content mt-3 p-2  shadow  rounded-box w-52">
                <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
                >Home</NavLink></li>

                <li><NavLink to='/alltoys' className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
                >All Toys</NavLink></li>

                <li><NavLink to='/blogs' className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
                >Blogs</NavLink></li>

                {user ? <>
                    <li><NavLink to='/mytoys' className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
                    >My Toys</NavLink></li>

                    <li><NavLink to='/addtoy' className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
                    >Add A Toy</NavLink></li>

                    <NavLink onClick={logout} to='/' className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
                    ><button className="btn btn-primary text-white font-bold">Logout</button></NavLink>

                    <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                        <div className="avatar online">
                            <div className="w-12 mask mask-squircle">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                    </div>
                </> : <>
                    <NavLink to='/login' className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
                    ><button className="btn btn-primary text-white font-bold">Login</button></NavLink>

                    <NavLink to='/singup' className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
                    ><button className="btn btn-primary text-white font-bold">SingUp</button></NavLink>
                </>}

            </ul>
        </div>
    );
};

export default DropDown;