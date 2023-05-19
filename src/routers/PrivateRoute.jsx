
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className='w-full h-screen flex items-center justify-center bg-primary'>
             <img  src="../../public/lottie1.gif" alt="" />
           </div>

    }

    if (user) {
        return children
    }
    else {
        return <Navigate to='/login'></Navigate>
    }

};

export default PrivateRoute;