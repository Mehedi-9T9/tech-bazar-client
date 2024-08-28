import axios from 'axios';
import React from 'react';

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000

});

const AxiosPublic = () => {
    return axiosPublic
};

export default AxiosPublic;