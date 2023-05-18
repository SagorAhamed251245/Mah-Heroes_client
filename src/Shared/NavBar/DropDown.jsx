import { Link } from "react-router-dom";


const DropDown = () => {
    return (
        <div className="dropdown  text-white font-bold">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="bg-primary menu menu-compact dropdown-content mt-3 p-2  shadow  rounded-box w-52">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/alltoys'>All Toys</Link></li>
                <li><Link to='/blogs'>Blogs</Link></li>
                <li><Link to='/mytoys'>My Toys</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/singup'>SingUp</Link></li>
                <li><Link to='/login'>Logout</Link></li>

                <div className="avatar">
                    <div className="w-10 mask mask-squircle">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </ul>
        </div>
    );
};

export default DropDown;