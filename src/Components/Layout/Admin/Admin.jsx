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

                <div className='md:flex'>
                    <div className='md:w-[20%]  h-auto bg-white'>
                        <ul className='ml-5 p-5 md:p-0'>
                            <NavLink to="/admin"><li className='text-xl font-merriweather font-semibold text-[#3B3B98] mt-5'>Home</li></NavLink>
                            <NavLink to="admin/addProduct"><li className='text-xl font-merriweather font-semibold text-[#3B3B98] mt-2'>Add Product</li></NavLink>
                            <NavLink to="/admin"><li className='text-xl font-merriweather font-semibold text-[#3B3B98] mt-2'>Manage Users</li></NavLink>
                        </ul>
                    </div>
                    <div className='md:w-[80%]   p-5'>
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