import React, { useState } from "react";

export const authContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [photosData, setPhotosData] = useState({});

    return (
        <authContext.Provider value={{ photosData, setPhotosData }}>
            {children}
        </authContext.Provider>
    );
};
