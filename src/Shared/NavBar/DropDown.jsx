import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const DropDown = () => {
    const { logout, user } = useContext(AuthContext)
    return (
        <div className="dropdown  text-white font-bold">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="bg-base-100 flex flex-col justify-center items-center gap-5 dropdown-content mt-3 p-2  shadow  rounded-box w-52">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/alltoys'>All Toys</Link></li>
                <li><Link to='/blogs'>Blogs</Link></li>

                {user ? <>
                    <li><Link to='/mytoys'>My Toys</Link></li>
                    <li><Link to='/addtoy'>Add A Toy</Link></li>
                    <Link onClick={logout} to='/'><button className="btn btn-primary text-white font-bold">Logout</button></Link>
                    <div className="avatar online">
                        <div className="w-10 mask mask-squircle">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                </> : <>
                    <Link to='/login'><button className="btn btn-primary text-white font-bold">Login</button></Link>
                    <Link to='/singup'><button className="btn btn-primary text-white font-bold">SingUp</button></Link>
                </>}

            </ul>
        </div>
    );
};

export default DropDown;