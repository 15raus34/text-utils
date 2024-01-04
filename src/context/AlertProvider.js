import React, { createContext, useState } from 'react'

export const AlertContext = createContext();

let timeoutId;
export default function AlertProvider({ children }) {

    const [alert, newAlert] = useState(null);

    const showAlert = (mesg, type) => {
        clearTimeout(timeoutId);
        newAlert({
            message: mesg,
            type: type,
        });

        timeoutId = setTimeout(() => {
            newAlert(null);
        }, 2000);
    };

    return (
        <AlertContext.Provider value={{alert,showAlert}}>
            {children}
        </AlertContext.Provider>
    )
}
