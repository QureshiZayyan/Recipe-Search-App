import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import './App.css';
import './components/Media.css';
import { ThemeProvider, ThemeContext } from './js/context';

function App() {
  return (
    <>
      {/* Ensure the context provider wraps the entire app */}
      <ThemeProvider>
        <MainContent />
      </ThemeProvider>
    </>
  );
}

function MainContent() {
  const { query } = useContext(ThemeContext); // Now inside the provider
  return (
    <>
      <Navbar />
      {query && <h2 className='search-heading'>Showing results for {query}</h2>}
      <div className="cards-container">
        <Card />
      </div >
    </>
  );
}

export default App;
