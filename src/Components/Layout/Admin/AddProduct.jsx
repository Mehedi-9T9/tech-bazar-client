import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import AxiosPublic from '../../Hooks/AxiosPublic';
import Swal from 'sweetalert2';




const AddProduct = () => {
    const axiosPublic = AxiosPublic()
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        axiosPublic.post("/product", data)
            .then(res => {
                if (res.data?._id) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Product Added Successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                reset()
            }
            )

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body grid grid-cols-1 md:grid-cols-2 border-2 m-3 p-5 rounded">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-merriweather text-[#3B3B98] font-semibold">Title</span>
                    </label>
                    <input type="text" {...register("title", { required: true })} placeholder="Title" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text  font-merriweather text-[#3B3B98] font-semibold">ProductId</span>
                    </label>
                    <input type="number" {...register("productId", { required: true })} placeholder="6 charecter id" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text  font-merriweather text-[#3B3B98] font-semibold">Category</span>
                    </label>
                    <select {...register("category", { required: true })} className="select select-bordered ">

                        <option value="mobile">Mobile</option>
                        <option value="laptop">Laptop</option>
                        <option value="watch">Watch</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text  font-merriweather text-[#3B3B98] font-semibold">Brand</span>
                    </label>
                    <select {...register("brand", { required: true })} className="select select-bordered ">

                        <option value="samsung">samsung</option>
                        <option value="asus">asus</option>
                        <option value="apple">apple</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text  font-merriweather text-[#3B3B98] font-semibold">Memory</span>
                    </label>
                    <input type="text" {...register("memory", { required: true })} placeholder="Memory" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text  font-merriweather text-[#3B3B98] font-semibold">Weight</span>
                    </label>
                    <input type="text" {...register("weight", { required: true })} placeholder="Weight" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-merriweather text-[#3B3B98] font-semibold">Display</span>
                    </label>
                    <input type="text" {...register("display", { required: true })} placeholder="Display" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-merriweather text-[#3B3B98] font-semibold">Processor</span>
                    </label>
                    <input type="text" {...register("processor", { required: true })} placeholder="Processor" className="input input-bordered" />
                </div>
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">Camera</span>
                    </label>
                    <input type="text" placeholder="Camera" className="input input-bordered" required />
                </div> */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-merriweather text-[#3B3B98] font-semibold">Price</span>
                    </label>
                    <input type="number" {...register("price", { required: true, valueAsNumber: true })} placeholder="Price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-merriweather text-[#3B3B98] font-semibold">Photo</span>
                    </label>
                    <input type="url" {...register("photo", { required: true })} placeholder="Photo URL" className="input input-bordered" />

                </div>
                <div className="form-control mt-6 md:col-span-2">
                    <button className="bg-[#3B3B98] text-white font-bold py-3 rounded-xl">Add Product</button>
                </div>
            </form>

        </div>
    );
};

export default AddProduct;