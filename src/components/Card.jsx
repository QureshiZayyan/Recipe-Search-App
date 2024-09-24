import { useState, useEffect, useContext } from "react";
import './Card.css'
import { FiLoader } from "react-icons/fi";
import { ThemeContext } from "../js/context";

const Card = () => {
  const [errors, setErrors] = useState('');
  const { query, setLoading, loading, currentPage, setRecipe, recipe } = useContext(ThemeContext);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        if (!response.ok) throw new Error('Server problem');
        const data = await response.json();
        setRecipe(data.meals);
        setErrors('');
      } catch (error) {
        console.error(error);
        setErrors('no recipes found');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = recipe.slice(indexOfFirstItem, indexOfLastItem);

  const formatTags = (tags) => {
    return tags.split(',').slice(0, 2).join(', ');
  };

  return (
    <>
      {loading ? (
        <div className='loader'>
          <FiLoader size={40} className='loading-icon' />
        </div>
      ) :
        (
          <>
            {currentItems.map((recipes) => (
              <div className="card" key={recipes.idMeal}>
                <div className="card-img">
                  <img src={recipes.strMealThumb} alt={recipes.strMeal} />
                </div>
                <div className="recipe-content shadow-lg">
                  <h3 className='dish-title'>{recipes.strMeal}</h3>
                  <p className='dish-area space'>Dish: {recipes.strArea}</p>
                  {recipes.strTags ? <p className='space'>Type: {formatTags(recipes.strTags)}</p> : null}
                  <a href={recipes.strYoutube} className="link space" target="_blank" rel="noopener noreferrer">
                    Watch Recipe On <span>Youtube</span>
                  </a>
                  <a href={recipes.strSource} className="link space" target="_blank" rel="noopener noreferrer">
                    View Recipe Source
                  </a>
                </div>
              </div>
            ))}
          </>
        )
      }
    </>
  )
}

export default Card;
