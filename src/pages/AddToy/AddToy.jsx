import { useForm } from "react-hook-form";

const AddToy = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = data => console.log(data);
    return (
        <div>
            <div>
                {/*  <form onSubmit={handleSubmit(onSubmit)}>
               
                <input defaultValue="test" {...register("name")} />

                
                <input {...register("email", { required: true })} />
                
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form> */}
            </div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex w-full">

                        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className=" flex gap-5">
                                    {/* left side  */}
                                    <div className="w-1/2">

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Seller Name</span>
                                            </label>
                                            <input type="text" {...register("seller_name")} placeholder="Seller Name" className="input input-bordered" />
                                        </div>

                                        {/* 1  */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Seller Email</span>
                                            </label>
                                            <input {...register("seller_email")} type="email" placeholder="Email" className="input input-bordered" />

                                        </div>

                                        {/* 2 */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Category</span>
                                            </label>
                                            <input {...register("category")} type="text" placeholder="Action Figures" className="input input-bordered" />

                                        </div>

                                        {/* 3  */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Sub Category</span>
                                            </label>
                                            <select  {...register("sub_category")} className="select select-bordered w-full">
                                                <option value="Marvel">Marvel</option>
                                                <option value="DC Comics">DC Comics</option>
                                                <option value="Star Wars">Star Wars</option>
                                                <option value="Transformers">Transformers</option>
                                            </select>

                                        </div>

                                        {/* 4  */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Toy Name</span>
                                            </label>
                                            <input {...register("toy_name")} type="text" placeholder="Toy Name" className="input input-bordered" />

                                        </div>
                                        {/* 5  */}
                                    </div>
                                    {/* left side */}
                                    {/* right site  */}
                                    <div className="w-1/2">

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Price</span>
                                            </label>
                                            <input {...register("price")} type="text" placeholder="0" className="input input-bordered" />

                                        </div>

                                        {/* 6  */}

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Available Quantity</span>
                                            </label>
                                            <input {...register("available_quantity")} type="text" placeholder="0" className="input input-bordered" />

                                        </div>
                                        {/* 7  */}

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Toy Image</span>
                                            </label>
                                            <input {...register("toy_image")} type="text" placeholder="url" className="input input-bordered" />

                                        </div>

                                        {/* 8  */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Rating</span>
                                            </label>
                                            <input {...register("rating")} type="text" placeholder="0" className="input input-bordered" />

                                        </div>
                                        {/* 9  */}

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Description</span>
                                            </label>
                                            <input {...register("description")} type="text" placeholder="Description" className="input input-bordered" />

                                        </div>


                                    </div>
                                    {/* right site  */}
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

export default AddToy;