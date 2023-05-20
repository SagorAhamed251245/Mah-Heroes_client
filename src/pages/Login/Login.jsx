import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import PageTitles from "../../Shared/PageTitles/PageTitles";


const Login = () => {
    const { loginUser, singinWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [successful, setSuccessful] = useState('')
    const navigate = useNavigate()

    const location = useLocation();

    console.log(location);

    const handelLoginUser = () => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('Password Must Be 6 Character')
        }
        else {
            loginUser(email, password)
                .then(result => {
                    console.log(result.user);
                    setSuccessful('Successfully Login')
                    { location.state?.from?.pathname ? navigate(location.state.from.pathname) : navigate('/') }

                })
                .catch(error => {
                    setError(error.message);
                })
        }
    }

    const handelGoogleLogin = () => {
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
             <PageTitles titles='Mah Heroes | Log in'></PageTitles>
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <div className="text-center lg:text-left flex items-center flex-col md:flex-row">

                    <img className="md:w-[50%]" src="herologo-1.png" alt="" />
                    <h1 className="text-6xl text-center font-bold text-white">Let's Go <span className="text-primary">Hero</span></h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelLoginUser} className="card-body">
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
                        <div className=" mt-6">
                            <input type="submit" className="btn btn-primary w-full text-white font-bold" value="Login"></input>

                        </div>


                        <div className="text-sm font-medium text-white">
                            Not registered? <Link state={location} to='/singup' className="text-primary hover:underline dark:text-green-500">Create account</Link>
                        </div>


                    </form>

                    <div className=' mb-1 w-10/12 mx-auto'>
                        <button onClick={handelGoogleLogin} className="w-full text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                            Login With Google</button>
                    </div>
                    {
                        error ? <p className='text-red-500 text-lg text-center font-bold'>{error}</p> : <p className='text-green-500 text-lg text-center  font-bold'>{successful}</p>
                    }

                </div>
            </div>
        </div>
    );
};

export default Login;