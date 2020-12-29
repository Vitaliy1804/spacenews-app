import React from 'react';

const Filter = ({setFilter, limit, search}) => {
  
    const changeSearch = (e) => {
       setFilter('search', e.target.value)
    }
    
    const changeLimit = (e) => {
        setFilter('limit', e.target.value)
        
    }
    return (
        <form className="form-row">
            <div className="col-5">
            <input 
            placeholder="Search"
            type="text" 
            value={search}
            onChange={changeSearch}
            className="form-control"/>
            </div>
           
            <div className="col-2 offset-5">
            <select className="form-control" value={limit} onChange={changeLimit}>
                <option value="">5</option>
                <option value="">10</option>
                <option value="">15</option>
            </select>
            </div>
        </form>
    )
}

export default Filter;