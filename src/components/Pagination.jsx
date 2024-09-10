import React from 'react';
import '../components/Pagination.css'
const Pagination = () => {
  const click = (e) => e.preventDefault();
  return (

    <div class="pagination" onClick={click}>
      <a href="#" class="prev">Previous</a>
      <a href="#" class="page">1</a>
      <a href="#" class="page active">2</a>
      <a href="#" class="page">3</a>
      <a href="#" class="page">4</a>
      <a href="#" class="next">Next</a>
    </div>

  )
}

export default Pagination;