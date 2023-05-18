import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const SingUp = () => {
    const { createNewUser , updateUserProfile } = useContext(AuthContext)

     const handelCreateUser = (event) => {
        
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value ;
        const email = form.email.value ;
        const password = form.password.value ;
        const photo = form.photo_url.value ;

        createNewUser(email , password)
        .then(result => {
            updateUserProfile(userName, photo)
            console.log(result.user);
            
        })
        .catch(error => {
            console.log(error.message);
        })

     }
    return (
        <div className="hero min-h-screen bg-base-200   font-bold">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <div className="text-center lg:text-left flex items-center flex-col md:flex-row">

                    <img className="md:w-[50%]" src="herologo-1.png" alt="" />
                    <h1 className="text-6xl text-center font-bold text-white">Time To Save The World <span className="text-primary">Hero</span></h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelCreateUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Photo Url</span>
                            </label>
                            <input name='photo_url' type="text" placeholder="Url" className="input input-bordered" />
                        </div>
                        <div className=" mt-6">
                            <input type="submit" className="btn btn-primary w-full text-white font-bold" value="Sing UP"></input>
                            <input type="submit" value="" />
                        </div>

                        <div className='mb-5 mt-3'>
                            <button className="w-full text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                                Sing up With Google</button>
                        </div>
                        <div className="text-sm font-medium text-white">
                            Have an account? <Link to='/login' className="text-primary hover:underline dark:text-green-500">Login</Link>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default SingUp;