import { useState, useEffect, useContext } from "react";
import './Card.css'
import { FiLoader } from "react-icons/fi";
import { ThemeContext } from "../js/context";

const Card = () => {
  const [recipe, setRecipe] = useState([]);
  const [errors, setErrors] = useState('');
  const { query, setLoading, loading } = useContext(ThemeContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        if (!response.ok) throw new Error('Server problem');
        const data = await response.json();
        setRecipe(data.meals || []); // Set an empty array if there are no meals
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = recipe.slice(indexOfFirstItem, indexOfLastItem);

  const formatTags = (tags) => {
    return tags.split(',').slice(0, 2).join(', ');
  };

  const totalPages = Math.ceil(recipe.length / itemsPerPage); // Calculate total pages

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {loading ? (
        <div className='loader'>
          <FiLoader size={40} className='loading-icon' />
        </div>
      ) : errors ? (
        <p>{errors}</p>
      ) : (
        recipe && recipe.length > 0 ? (
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

            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item"><a className="page-link" href="#" onClick={() => setCurrentPage(currentPage + 1)}>1</a></li>
                <li className="page-item"><a className="page-link" href="#" onClick={() => setCurrentPage(currentPage + 1)}>2</a></li>
                <li className="page-item"><a className="page-link" href="#" onClick={() => setCurrentPage(currentPage + 1)}>3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
              </ul>
            </nav>
          </>
        ) : (
          <p>No recipes available.</p> // Optional: Display a message if no recipes
        )
      )}
    </>
  );
}

export default Card;
