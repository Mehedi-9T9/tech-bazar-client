import React, { useState } from 'react';
import AddMobile from './InputForm/AddMobile';
import AddLaptop from './InputForm/AddLaptop';
import AddWatch from './InputForm/AddWatch';

const AddProduct = () => {
    const [category, setCategory] = useState(null)
    const categoryHandle = (e) => {
        setCategory(e.target.value);
    }
    return (
        <div>
            <div >
                <select onChange={categoryHandle} className="select select-bordered w-full max-w-xs ml-3">
                    <option disabled selected>Category</option>
                    <option>Mobile</option>
                    <option>Laptop</option>
                    <option>Watch</option>
                </select>
            </div>

            {/* mobile */}
            {
                category == null ? <AddMobile></AddMobile> : null

            }
            {
                category == "Mobile" ? <AddMobile></AddMobile> : null

            }
            {

                category == "Watch" ? <AddWatch></AddWatch> : null
            }
            {

                category == "Laptop" ? <AddLaptop></AddLaptop> : null
            }


            {/* laptop */}





        </div>
    );
};

export default AddProduct;