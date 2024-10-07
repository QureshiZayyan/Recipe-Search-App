import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import './App.css';
import './components/Media.css';
import { ThemeProvider, ThemeContext } from './js/context';
import Pagination from './components/Pagination';

function App() {
  return (
    <>
      <ThemeProvider>
        <MainContent />
      </ThemeProvider>
    </>
  );
}

function MainContent() {
  const { pagination } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      {/* {query && <h2 className='search-heading'>Showing results for {query}</h2>} */}
      <div className="cards-container">
        <Card />
      </div >
      {pagination ? <Pagination /> : null}
    </>
  );
}

export default App;
