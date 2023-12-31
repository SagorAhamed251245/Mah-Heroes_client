import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import PageTitles from "../../Shared/PageTitles/PageTitles";
import logoIcon from '../../assets/herologo-1.png'


const SingUp = () => {
    const { createNewUser, updateUserProfile , singinWithGoogle} = useContext(AuthContext)
    const [error, setError] = useState('')
    const [successful, setSuccessful] = useState('')
    const navigate = useNavigate()

    const location = useLocation();

    console.log(location);

    const handelCreateUser = (event) => {

        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo_url.value;

        createNewUser(email, password)
            .then(result => {
                updateUserProfile(userName, photo)
                console.log(result.user);
                setSuccessful('Successfully Login')
                { location.state?.state?.from?.pathname ? navigate(location.state.state.from.pathname) : navigate('/') }

            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })

    }

    const handelGoogleSingin = () => {
        singinWithGoogle()
            .then(result => {
                { location.state?.from?.pathname ? navigate(location.state.from.pathname) : navigate('/') }
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200   font-bold">
            <PageTitles titles='Mah Heroes | Sing up'></PageTitles>
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <div className="text-center lg:text-left flex items-center flex-col md:flex-row">

                    <img className="md:w-[50%]" src={logoIcon} alt="" />
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

                        
                        <div className="text-sm font-medium text-white">
                            Have an account? <Link to='/login' className="text-primary hover:underline dark:text-green-500">Login</Link>
                        </div>
                        
                    </form>
                    <div className=' mb-1 w-10/12 mx-auto'>
                        <button onClick={handelGoogleSingin} className="w-full text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                            SingUp With Google</button>
                    </div>
                    {
                        error ? <p className='text-red-500 text-lg text-center font-bold'>{error}</p> : <p className='text-green-500 text-lg text-center  font-bold'>{successful}</p>
                    }



                </div>
            </div>
        </div>
    );
};

export default SingUp;