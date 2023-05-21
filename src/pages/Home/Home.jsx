import PageTitles from "../../Shared/PageTitles/PageTitles";
import Banner from "./Banner";
import Gallery from "./Gallery/Gallery";
import OurService from "./OurService/OurService";
import ShopCategory from "./ShopCategory/ShopCategory";
import UpdateNews from "./UpdateNews/UpdateNews";


const Home = () => {
    return (
        <div className="overflow-hidden">
            <PageTitles titles='Mah Heroes'></PageTitles>
            <Banner></Banner>
            <ShopCategory></ShopCategory>
            <Gallery></Gallery>
            <OurService></OurService>
            <UpdateNews></UpdateNews>
        </div>
    );
};

export default Home;