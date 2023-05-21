
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import loadingPng from '../assets/lottie1.gif'


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation()
    console.log(location);

    if (loading) {
        return <div className='w-full h-screen flex items-center justify-center bg-primary'>
             <img  src={loadingPng} alt="" />
           </div>

    }

    if (user) {
        return children
    }
    else {
        return <Navigate state={{from: location }} to='/login'></Navigate>
    }

};

export default PrivateRoute;