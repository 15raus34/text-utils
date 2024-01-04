import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {

    const [mode, toggleMode] = useState("light");

    const removeBodyClasses = () => {
        document.body.classList.remove("bg-primary");
        document.body.classList.remove("bg-warning");
        document.body.classList.remove("bg-danger");
        document.body.classList.remove("bg-success");
    };

    const modeToggle = (scrColor) => {
        removeBodyClasses();
        if (scrColor !== null) {
            document.body.classList.add("bg-" + scrColor);
        } else {
            if (mode === "light") {
                toggleMode("dark");
                document.body.style.backgroundColor = "#1f1f1f";
            } else {
                toggleMode("light");
                document.body.style.backgroundColor = "white";
            }
        }
    };
    return (
        <ThemeContext.Provider value={{mode,modeToggle}}>
            {children}
        </ThemeContext.Provider>
    )
}
