import React from 'react';

const Pagination = ({ skip, limit, setFilter }) => {
    function onPrevClick (e) {
        e.preventDefault()
        setFilter('skip', Math.max(skip - limit, 0))

    }

    function onNextClick (e) {
        e.preventDefault()
        setFilter('skip', skip + limit)
    }

    return (
        <ul className="pagination">
            <li className={ `page-item ${ skip === 0 ? 'disabled' : ''}`}>
           <a href="#" className="page-link" onClick={onPrevClick}>Previous</a>
           </li>
           <li className="page-item">
            <a href="#" className="page-link" onClick={onNextClick}>Next</a>
           </li>
        </ul>
    )
}

export default Pagination;