import { useState, useEffect } from 'react'
import './App.css'
import { FiLoader } from "react-icons/fi";

function App() {
  const [query, setQuery] = useState('chicken');
  const [input, setInput] = useState('');
  const [recipe, setRecipe] = useState([]);
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const Data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        if (!Data.ok) throw new Error('server problem');
        const response = await Data.json();
        setRecipe(response.meals);
        setErrors('')
        console.log(response);
        return response;
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
    if (!input) {
      return
    }
    setQuery(input);
    setInput('');
    setRecipe([]);
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
            <input type="text" name="" id="input" value={input} onChange={(e) => setInput(e.target.value)} />
            <button id="btn">Search</button>
          </form>
        </div>
      </header>

      <div id="cards-container">

        {
          loading ? (
            <FiLoader className='icon' />
          )
            :
            recipe && recipe.length > 0 ? (
              recipe.map((recipes) => (

                <div className="card" key={recipes.idMeal}>
                  <div className="card-img">
                    <img src={recipes.strMealThumb} alt={recipes.strMeal} />
                  </div>
                  <div className="recipe-content">
                    <h2>{recipes.strMeal}</h2>
                    <a href={recipes.strYoutube} className="link space" target="_blank">Watch On Youtube</a>
                    <a href={recipes.strSource} className="link space" target="_blank">Recipe Source</a>
                  </div>
                </div>
              ))
            )
              : (
                <p>!OOPS Something Wrong Happend</p>
              )
        }
      </div >
    </>
  )
}

export default App;



// import { useState, useEffect } from 'react';
// import './App.css';
// import { FiLoader } from "react-icons/fi";

// function App() {
//   const [query, setQuery] = useState('chicken');
//   const [input, setInput] = useState('');
//   const [recipe, setRecipe] = useState([]);
//   const [errors, setErrors] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true); // Set loading to true when fetching starts
//       try {
//         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
//         if (!response.ok) throw new Error('Server problem');
//         const data = await response.json();
//         setRecipe(data.meals);
//         setErrors('');
//       } catch (error) {
//         console.error(error);
//         setErrors('Some error occurred');
//         setRecipe([]); // Clear the recipe state in case of error
//       } finally {
//         setLoading(false); // Set loading to false after fetching completes
//       }
//     };

//     fetchData();
//   }, [query]);

//   const submit = (e) => {
//     e.preventDefault();
//     setQuery(input);
//     setInput('');
//   };

//   return (
//     <>
//       <header>
//         <div className="heading">
//           <h1 className="gap">Welcome to FindRecipe!</h1>
//           <h3 className="gap">Search Delicious recipes and Dishes...</h3>
//         </div>
//         <div className="search">
//           <form onSubmit={submit}>
//             <input
//               type="text"
//               id="input"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//             />
//             <button id="btn">Search</button>
//           </form>
//         </div>
//       </header>

//       <div id="cards-container">
//         {loading ? (
//           <FiLoader size={50} className='icon' />
//         ) : errors ? (
//           <p>{errors}</p>
//         ) : recipe && recipe.length > 0 ? (
//           recipe.map((recipes) => (
//             <div className="card" key={recipes.idMeal}>
//               <div className="card-img">
//                 <img src={recipes.strMealThumb} alt={recipes.strMeal} />
//               </div>
//               <div className="recipe-content">
//                 <h2>{recipes.strMeal}</h2>
//                 <a
//                   href={recipes.strYoutube}
//                   className="link space"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Watch On Youtube
//                 </a>
//                 <a
//                   href={recipes.strSource}
//                   className="link space"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Recipe Source
//                 </a>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No recipes found.</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;
