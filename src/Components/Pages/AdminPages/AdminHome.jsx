import React from 'react';
import { NavLink } from 'react-router-dom';


const AdminHome = () => {
    return (
        <div className='h-screen'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='w-[400px] p-5 border-2 rounded '>
                    <h2 className='text-5xl font-merriweather font-bold text-center text-amber-400'>Total Mobile</h2>
                    <h3 className='text-5xl font-merriweather font-extrabold text-center text-white'>150 Pcs</h3>
                </div>
                <div className='w-[400px] p-5 border-2 rounded '>
                    <h2 className='text-5xl font-merriweather font-bold text-center text-amber-400'>Total Laptop</h2>
                    <h3 className='text-5xl font-merriweather font-extrabold text-center text-white'>150 Pcs</h3>
                </div>
                <div className='w-[400px] p-5 border-2 rounded '>
                    <h2 className='text-5xl font-merriweather font-bold text-center text-amber-400'>Total Watch</h2>
                    <h3 className='text-5xl font-merriweather font-extrabold text-center text-white'>150 Pcs</h3>
                </div>
                <div className='w-[400px] p-5 border-2 rounded '>
                    <h2 className='text-5xl font-merriweather font-bold text-center text-amber-400'>Total Uses</h2>
                    <h3 className='text-5xl font-merriweather font-extrabold text-center text-white'>150 Pcs</h3>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;