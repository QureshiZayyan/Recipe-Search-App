import { useState, useEffect } from "react";
import './Card.css'
import { FiLoader } from "react-icons/fi";

const Card = ({ query }) => {

  const [recipe, setRecipe] = useState([]);
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        if (!response.ok) throw new Error('Server problem');
        const data = await response.json();
        setRecipe(data.meals);
        console.log(data);
        setErrors('');
      } catch (error) {
        console.error(error);
        setErrors('Some error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  const formatTags = (tags) => {
    return tags.split(',').slice(0, 2).join(', ');
  };

  return (
    <>
      {loading ? (
        <div className='loader'>
          <FiLoader size={40} className='loading-icon' />
        </div>
      ) : errors ? (
        <p>{errors}</p>
      ) :
        recipe && recipe.length > 0
          ? (
            recipe.slice(0, visible).map((recipes) => (
              <div className="card" key={recipes.idMeal}>
                <div className="card-img">
                  <img src={recipes.strMealThumb} alt={recipes.strMeal} />
                </div>
                <div className="recipe-content shadow-lg">
                  <h3 className='dish-title'>{recipes.strMeal}</h3>
                  <p className='dish-area space'>Dish : {recipes.strArea}</p>
                  {recipes.strTags ? <p className=' space'>Type : {formatTags(recipes.strTags)}</p> : null}
                  <a href={recipes.strYoutube} className="link space" target="_blank" rel="noopener noreferrer">Watch Recipe On <span>Youtube</span></a>
                  <a href={recipes.strSource} className="link space" target="_blank" rel="noopener noreferrer">View Recipe Source</a>
                </div >
              </div >
            ))
          )
          :
          (
            <div className='error'>
              <h2>No result for the search</h2>
            </div>
          )}
    </>
  )
};

export default Card;