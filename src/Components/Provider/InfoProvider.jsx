import React, { createContext, useState } from 'react';
export const infoContex = createContext(null)



const InfoProvider = ({ children }) => {
    const [users, setUsers] = useState(null)

    const allInfo = { users }

    return (
        <div>
            <infoContex.Provider value={allInfo}>
                {children}
            </infoContex.Provider>

        </div>
    );
};

export default InfoProvider;