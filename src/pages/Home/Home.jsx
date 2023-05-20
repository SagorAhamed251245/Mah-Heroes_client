import PageTitles from "../../Shared/PageTitles/PageTitles";
import Banner from "./Banner";
import OurService from "./OurService/OurService";
import ShopCategory from "./ShopCategory/ShopCategory";
import UserReview from "./UserReview/UserReview";

const Home = () => {
    return (
        <div>
            <PageTitles titles='Mah Heroes'></PageTitles>
            <Banner></Banner>
            <ShopCategory></ShopCategory>
            <OurService></OurService>
            <UserReview></UserReview>
        </div>
    );
};

export default Home;