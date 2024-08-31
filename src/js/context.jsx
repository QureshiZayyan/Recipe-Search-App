import React, { createContext, useState } from 'react';

// Create the context
const ThemeContext = createContext();

// Create the provider component
function ThemeProvider({ children }) {
    const [query, setQuery] = useState('chicken'); // Initial query state

    return (
        <ThemeContext.Provider value={{ query, setQuery }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };
