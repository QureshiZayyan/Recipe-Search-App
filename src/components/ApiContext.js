import React, { createContext, useState } from 'react';

// Create the context
export const ApiContext = createContext();

// Create a provider component
export const ApiProvider = ({ children }) => {
  const [query, setQuery] = useState('chicken');

  return (
    <ApiContext.Provider value={{ query, setQuery }}>
      {children}
    </ApiContext.Provider>
  );
};
