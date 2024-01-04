import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider';

export default function CustomButton({ children, onClickAction,text, ...rest }) {

    const useThemeContext = useContext(ThemeContext);
    const { mode } = useThemeContext;

    return (
        <button
            type="button"
            className={`btn btn-${mode === "light" ? "dark" : "light"
                } mx-2 my-2`}
            disabled={text.length === 0}
            onClick={onClickAction}
            {...rest}
        >
            {children}
        </button>
    )
}
