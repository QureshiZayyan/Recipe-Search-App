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
    <>
      recipe? (
      <nav aria-label="Page navigation example" onClick={(e) => e.preventDefault()}>
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#" onClick={() => handlePrevious()}>Previous</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={() => currentPage !== 2 ? setCurrentPage(currentPage + 1) : null}>1</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={() => currentPage !== 3 ? setCurrentPage(currentPage + 1) : null}>2</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={() => currentPage !== 4 ? setCurrentPage(currentPage + 1) : null}>3</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={() => currentPage !== 5 ? setCurrentPage(currentPage + 1) : null}>4</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={() => handleNext()} disabled={currentPage === totalPages}>Next</a></li>
        </ul >
      </nav >
      )
    </>
  )
}

export default Pagination
