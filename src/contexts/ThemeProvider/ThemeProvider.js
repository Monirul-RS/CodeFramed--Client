import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext(null);

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () =>{
        setTheme((curr) => (curr === 'light' ? "dark" : "light"))
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;