import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="bg-primary h-screen flex items-center justify-center flex-col">
            <img className="" src="/public/error-404.gif" alt="" />
            <p ><span className="text-3xl font-bold text-base-100">Go Back To </span><Link className="text-sky-500 font-bold">Home Page</Link></p>
        </div>
    );
};

export default ErrorPage;