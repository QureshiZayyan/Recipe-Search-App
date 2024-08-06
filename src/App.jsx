import { useState, useEffect } from 'react'
import './App.css'
import { FiLoader } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

function App() {
  const [query, setQuery] = useState('chicken');
  const [input, setInput] = useState('');
  const [recipe, setRecipe] = useState([]);
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(false);
  // const [heading, setHeading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const Data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        if (!Data.ok) throw new Error('server problem');
        const response = await Data.json();
        setRecipe(response.meals);
        console.log(response);
      } catch (error) {
        console.error(error);
        setErrors('some error occured');
      }
      finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query])

  const submit = (e) => {
    e.preventDefault();
    if (!input) return;
    setQuery(input);
    setInput('');
    setRecipe([]);
    // setHeading(input);
  }

  return (
    <>
      <header>
        <div className="heading">
          <h1 className="gap">Welcome to FindRecipe!</h1>
          <h3 className="gap">Search Delicious recipes and Dishes...</h3>
        </div>
        <div className="search">
          <form onSubmit={submit}>
            <input type="text" name="" id="input" value={input} onChange={(e) => setInput(e.target.value)} placeholder='...Search Dishes' />
            <button><FaSearch size={40} className='search-icon' /></button>
          </form>
        </div>
      </header>

      {/* {heading ? <h2 className='search-heading'>showing results for {heading}</h2> : null} */}

      <div className="cards-container">

        {
          loading ?
            (
              <div className='loader'>
                <FiLoader size={50} className='loading-icon' />
              </div>
            )
            :
            errors ?
              (
                <p>{errors}</p>
              )
              :
              recipe && recipe.length > 0 ?
                (
                  recipe.map((recipes) => (

                    <div className="card" key={recipes.idMeal}>
                      <div className="card-img">
                        <img src={recipes.strMealThumb} alt={recipes.strMeal} />
                      </div>
                      <div className="recipe-content shadow-lg">
                        <h3>{recipes.strMeal}</h3>
                        <p className='dish'>Dish : {recipes.strArea}</p>
                        <a href={recipes.strYoutube} className="link space" target="_blank">Watch On Youtube</a>
                        <a href={recipes.strSource} className="link space" target="_blank">Recipe Source</a>
                      </div>
                    </div>
                  ))
                )
                :
                (
                  <div className='error'>
                  <h2>no result for the search</h2>
                  </div>
                )
        }
      </div>
    </>
  )
}

export default App;