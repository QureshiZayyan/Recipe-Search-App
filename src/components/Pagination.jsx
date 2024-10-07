import { useContext } from 'react';
import { ThemeContext } from "../js/context";
import './Pagination.css';

const Pagination = () => {
  const { setCurrentPage, currentPage, recipe } = useContext(ThemeContext);

  const totalPages = Math.ceil(recipe.length / 5);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="pagination" onClick={(e) => e.preventDefault()}>
        <a href="#" className="page-button prev" onClick={() => handlePrevious()}>Previous</a>
        <a href="#" className="page-button" onClick={() => setCurrentPage(currentPage + 1)}>1</a>
        <a href="#" className="page-button" onClick={() => setCurrentPage(currentPage + 1)}>2</a>
        <a href="#" className="page-button" onClick={() => setCurrentPage(currentPage + 1)}>3</a>
        <a href="#" className="page-button" onClick={() => setCurrentPage(currentPage + 1)}>4</a>
        <a href="#" className="page-button" onClick={() => setCurrentPage(currentPage + 1)}>5</a>
        <a href="#" className="page-button next" onClick={() => handleNext()}>Next</a>
      </div >
    </>
  )
}

export default Pagination;
