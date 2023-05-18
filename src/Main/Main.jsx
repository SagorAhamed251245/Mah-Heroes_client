import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
    return (
        <>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default Main;