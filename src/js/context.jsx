import React, { createContext, useState } from 'react';

// Create the context
const ThemeContext = createContext();

// Create the provider component
function ThemeProvider({ children }) {
    const [query, setQuery] = useState('chicken');
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [recipe, setRecipe] = useState([]);
    const [pagination, setPagination] = useState(false);

    return (
        <ThemeContext.Provider value={{ query, setQuery, loading, setLoading, currentPage, setCurrentPage, recipe, setRecipe, pagination, setPagination }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };
