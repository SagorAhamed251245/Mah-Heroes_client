import {Helmet} from "react-helmet";

const PageTitles = ({titles}) => {
    return (
       
            <Helmet>
              <title>{titles}</title>  
            </Helmet>
       
    );
};

export default PageTitles;