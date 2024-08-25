import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { IoMdCheckmarkCircle } from "react-icons/io";

const Bannar = () => {
    return (
        <div>
            <Carousel autoPlay={true} infiniteLoop={true}>
                <div className='bg-white flex rounded'>
                    <div className='md:w-[60%] p-5 '>
                        <h2 className='text-5xl font-bold font-merriweather text-[#FC427B] pt-5'>Apple Watch Ulta</h2>
                        <div className='flex'>
                            <ul className='ml-14 pt-5'>
                                <li className='text-start text-xl font-medium text-[#3B3B98]'><IoMdCheckmarkCircle className='text-green-400 text-3xl inline-block'></IoMdCheckmarkCircle> Premium Quality</li>
                                <li className='text-start text-xl font-medium text-[#3B3B98]'><IoMdCheckmarkCircle className='text-green-400 text-3xl inline-block'></IoMdCheckmarkCircle> 5<sup>+</sup> Years Garanty</li>
                                <li className='text-start text-xl font-medium text-[#3B3B98]'><IoMdCheckmarkCircle className='text-green-400 text-3xl inline-block'></IoMdCheckmarkCircle> Water Prove</li>
                                <li className='text-start text-xl font-medium text-[#3B3B98]'><IoMdCheckmarkCircle className='text-green-400 text-3xl inline-block'></IoMdCheckmarkCircle> Life Time Service Free</li>
                            </ul>
                            <div className='w-[150px] h-[150px] rounded-full flex justify-center flex-col items-center bg-amber-300 bg-opacity-25 ml-10 -rotate-45'>
                                <h2 className='text-3xl text-red-500 font-bold font-merriweather'>Offer</h2>
                                <p className='text-2xl text-black font-poppins font-bold'>20% OFF</p>
                            </div>
                        </div>

                    </div>
                    <div className='md:w-[30%]'>
                        <img src="https://i.ibb.co/M56M4bj/download-10.jpg" className='object-contain p-5 ' />
                    </div>

                </div>
                <div className='bg-white flex rounded'>
                    <div className='md:w-[60%] p-5 '>
                        <h2 className='text-5xl font-bold font-merriweather text-[#FC427B] pt-5 text-start ml-14'>Iphone 15 Pro</h2>
                        <div className='flex'>
                            <ul className='ml-14 pt-5'>
                                <li className='text-start text-xl font-medium text-[#3B3B98]'><IoMdCheckmarkCircle className='text-green-400 text-3xl inline-block'></IoMdCheckmarkCircle> Premium Quality</li>
                                <li className='text-start text-xl font-medium text-[#3B3B98]'><IoMdCheckmarkCircle className='text-green-400 text-3xl inline-block'></IoMdCheckmarkCircle> 5<sup>+</sup> Years Garanty</li>
                                <li className='text-start text-xl font-medium text-[#3B3B98]'><IoMdCheckmarkCircle className='text-green-400 text-3xl inline-block'></IoMdCheckmarkCircle> Official Phone</li>
                                <li className='text-start text-xl font-medium text-[#3B3B98]'><IoMdCheckmarkCircle className='text-green-400 text-3xl inline-block'></IoMdCheckmarkCircle> Life Time Service Free</li>
                            </ul>
                            <div className='w-[150px] h-[150px] rounded-full flex justify-center flex-col items-center bg-amber-300 bg-opacity-25 ml-10 -rotate-45'>
                                <h2 className='text-3xl text-red-500 font-bold font-merriweather'>Offer</h2>
                                <p className='text-2xl text-black font-poppins font-bold'>15% OFF</p>
                            </div>
                        </div>

                    </div>
                    <div className='md:w-[30%] rotate-12'>
                        <img src="https://i.ibb.co/b64PmVn/download-4.jpg" className='object-contain p-5 ' />
                    </div>

                </div>
                <div className='bg-white flex rounded'>
                    <div className='md:w-[60%] p-5 '>
                        <h2 className='text-5xl font-bold font-merriweather text-[#FC427B] pt-5 text-start ml-14'>Samsung Book C</h2>
                        <div className='flex'>
                            <ul className='ml-14 pt-5'>
                                <li className='text-start text-xl font-medium text-[#3B3B98]'><IoMdCheckmarkCircle className='text-green-400 text-3xl inline-block'></IoMdCheckmarkCircle> Premium Quality</li>
                                <li className='text-start text-xl font-medium text-[#3B3B98]'><IoMdCheckmarkCircle className='text-green-400 text-3xl inline-block'></IoMdCheckmarkCircle> 5<sup>+</sup> Years Garanty</li>
                                <li className='text-start text-xl font-medium text-[#3B3B98]'><IoMdCheckmarkCircle className='text-green-400 text-3xl inline-block'></IoMdCheckmarkCircle> Official Phone</li>
                                <li className='text-start text-xl font-medium text-[#3B3B98]'><IoMdCheckmarkCircle className='text-green-400 text-3xl inline-block'></IoMdCheckmarkCircle> Life Time Service Free</li>
                            </ul>
                            <div className='w-[150px] h-[150px] rounded-full flex justify-center flex-col items-center bg-amber-300 bg-opacity-25 ml-10 -rotate-45'>
                                <h2 className='text-3xl text-red-500 font-bold font-merriweather'>Offer</h2>
                                <p className='text-2xl text-black font-poppins font-bold'>25% OFF</p>
                            </div>
                        </div>

                    </div>
                    <div className='md:w-[30%] '>
                        <img src="https://i.ibb.co/wW8TsDf/download-3.jpg" className='object-contain p-5 ' />
                    </div>

                </div>
            </Carousel>

        </div>
    );
};

export default Bannar;