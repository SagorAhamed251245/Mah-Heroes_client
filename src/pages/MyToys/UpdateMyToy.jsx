import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import PageTitles from "../../Shared/PageTitles/PageTitles";


const UpdateMyToy = () => {
    const toy = useLoaderData()




    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }

    } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch(`https://mah-heros-server.vercel.app/updateToy/${toy._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Toy info Updated Successful',
                        icon: 'success',
                        confirmButtonText: 'Cool'

                    })
                }
            })


    };
    return (
        <div>
      <PageTitles titles='Mah Heroes | Update Toy Info'></PageTitles>
            <div>

                <div className="hero min-h-screen bg-base-200">

                    <div className="hero-content flex w-full">

                        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                                <div className="flex justify-center flex-col items-center">
                                    <div className="avatar">
                                        <div className="w-32 rounded">
                                            <img src={toy.toy_image} />
                                        </div>
                                    </div>
                                    <h1 className="text-3xl text-center my-3 font-bold text-white">Update {toy.toy_name} Toy information</h1>
                                </div>

                                <div className="w-full">


                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input  {...register("price", { min: 0, })} defaultValue={toy.price} type="number" placeholder={toy.price} className="input input-bordered" />

                                    </div>




                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available Quantity</span>
                                        </label>
                                        <input  {...register("available_quantity", { min: 1, })} type="number" placeholder="0" 
                                        defaultValue={toy.available_quantity}  className="input input-bordered" />
                                    </div>



                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Description</span>
                                        </label>
                                        <input  {...register("description")} type="text" placeholder="Description" defaultValue={toy.description} className="input input-bordered" />

                                    </div>


                                </div>


                                {errors.exampleRequired && <span>This field is required</span>}
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn btn-primary" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default UpdateMyToy;