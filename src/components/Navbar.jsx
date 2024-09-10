import { useState, useContext } from 'react';
import './Navbar.css';
import { FaSearch } from "react-icons/fa";
import { ThemeContext } from '../js/context';

const Navbar = () => {
  const [input, setInput] = useState('');
  const { setQuery } = useContext(ThemeContext);

  const submit = (e) => {
    e.preventDefault();
    if (!input) return;
    setQuery(input);
    setInput('');
    // setRecipe([]);
    // setHeading(input);
  }
  return (
    <header>
      <div className="heading">
        <h1 className="gap">Welcome to FindRecipe!</h1>
        <h3 className="gap">Search Delicious recipes and Dishes...</h3>
      </div>
      <div className="search">
        <form onSubmit={submit}>
          <input type="text" name="" id="input" value={input} onChange={(e) => setInput(e.target.value)} placeholder='...Search Dishes' />
          <button onClick={submit}><FaSearch size={37.5} className='search-icon' /></button>
        </form>
      </div>
    </header>
  )
}

export default Navbar;