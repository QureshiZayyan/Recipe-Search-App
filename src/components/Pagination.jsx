import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from "../js/context";

const Pagination = () => {
  const { setCurrentPage, currentPage, recipe } = useContext(ThemeContext);

  const totalPages = Math.ceil(recipe.length / 5)

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    recipe.length > 0 ? (
      <nav aria-label="Page navigation example" onClick={(e) => e.preventDefault()}>
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#" onClick={() => handlePrevious()}>Previous</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === 1}>1</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={() => setCurrentPage(currentPage + 1)}>2</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={() => setCurrentPage(currentPage + 1)}>3</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={() => setCurrentPage(currentPage + 1)}>4</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={() => handleNext()}>Next</a></li>
        </ul>
      </nav>
    )
      : null
  )
}

export default Pagination
