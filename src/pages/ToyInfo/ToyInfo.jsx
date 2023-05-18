import { useLoaderData } from "react-router-dom";


const ToyInfo = () => {
    const toyinfo = useLoaderData()
    console.log(toyinfo);
    return (
        <div>
            <h1>This is toy info</h1>
        </div>
    );
};

export default ToyInfo;