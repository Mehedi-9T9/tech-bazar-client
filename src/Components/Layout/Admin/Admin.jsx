import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Navbar/Navbar';

const Admin = () => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main>

                <div className='flex'>
                    <div className='w-[20%] max-h-screen bg-white'>
                        <ul className='ml-5'>
                            <NavLink to="/admin"><li className='text-xl font-merriweather font-semibold text-[#3B3B98] mt-5'>Home</li></NavLink>
                            <NavLink to="admin/addProduct"><li className='text-xl font-merriweather font-semibold text-[#3B3B98] mt-2'>Add Product</li></NavLink>
                            <NavLink to="/admin"><li className='text-xl font-merriweather font-semibold text-[#3B3B98] mt-2'>Manage Users</li></NavLink>
                        </ul>
                    </div>
                    <div className='w-[80%] h-screen bg-[#ff7979]'>
                        <Outlet></Outlet>

                    </div>
                </div>




            </main>
            <footer>
                this is footer
            </footer>
        </>
    );
};

export default Admin;