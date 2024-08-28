import React, { useContext } from 'react';
import { infoContex } from '../Provider/InfoProvider';

const UseInfo = () => {
    const info = useContext(infoContex)
    return info
};

export default UseInfo;