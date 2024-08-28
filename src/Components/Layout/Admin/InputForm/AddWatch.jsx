import React from 'react';

const AddWatch = () => {
    return (
        <div className="">

            <form className="card-body grid grid-cols-1 md:grid-cols-2 border-2 m-3 p-5 rounded">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" placeholder="Title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">ProductId</span>
                    </label>
                    <input type="number" placeholder="6 charecter id" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select className="select select-bordered w-full max-w-xs ml-3">
                        <option disabled selected>Category</option>
                        <option>Mobile</option>
                        <option>Laptop</option>
                        <option>Watch</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand</span>
                    </label>
                    <input type="text" placeholder="Brand" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Chipset</span>
                    </label>
                    <input type="text" placeholder="Chipset" className="input input-bordered" required />
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Display</span>
                    </label>
                    <input type="text" placeholder="Display" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Color</span>
                    </label>
                    <input type="text" placeholder="Color" className="input input-bordered" required />
                </div>




                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="url" placeholder="Photo URL" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6 md:col-span-2">
                    <button className="bg-[#3B3B98] text-white font-bold py-3 rounded-xl">Add Watch</button>
                </div>
            </form>
        </div>

    );
};

export default AddWatch;