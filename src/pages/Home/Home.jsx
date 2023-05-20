import PageTitles from "../../Shared/PageTitles/PageTitles";
import Banner from "./Banner";
import ShopCategory from "./ShopCategory/ShopCategory";

const Home = () => {
    return (
        <div>
            <PageTitles titles='Mah Heroes'></PageTitles>
            <Banner></Banner>
            <ShopCategory></ShopCategory>
        </div>
    );
};

export default Home;