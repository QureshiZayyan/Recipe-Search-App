import { useState } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import './App.css';
import './components/Media.css';

function App() {
  const [query, setQuery] = useState('chicken');
  return (
    <>
      {/* {heading ? <h2 className='search-heading'>showing results for {heading}</h2> : null} */}

      <Navbar setQuery={setQuery} />

      <div className="cards-container">
        <Card query={query} />
      </div >
    </>
  )
}

export default App;