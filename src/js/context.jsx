import React, { createContext, useState } from 'react';

// Create the context
const ThemeContext = createContext();

// Create the provider component
function ThemeProvider({ children }) {
    const [query, setQuery] = useState('chicken');
    const [loading, setLoading] = useState(false);

    return (
        <ThemeContext.Provider value={{ query, setQuery, loading, setLoading }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };
