import PageTitles from "../../Shared/PageTitles/PageTitles";
import Banner from "./Banner";
import OurService from "./OurService/OurService";
import ShopCategory from "./ShopCategory/ShopCategory";
import UpdateNews from "./UpdateNews/UpdateNews";


const Home = () => {
    return (
        <div>
            <PageTitles titles='Mah Heroes'></PageTitles>
            <Banner></Banner>
            <ShopCategory></ShopCategory>
            <OurService></OurService>
            <UpdateNews></UpdateNews>
        </div>
    );
};

export default Home;