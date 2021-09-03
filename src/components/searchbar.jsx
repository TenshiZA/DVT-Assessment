import React, { Component, useState } from 'react';
import { useHistory, withRouter } from "react-router-dom";

const SearchBar = () => {
    let history = useHistory();

    const [searchText, setSearchText] = useState('');
  
    const handleClick = () => {  
        history.push("/search_results/" + searchText);
    };

    const handleTextChange = (e) => { 
        console.log(e.target.value);
        setSearchText(e.target.value);
    };
   
        return (
            <div className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search Artist" aria-label="Search" onChange={handleTextChange} value={searchText}></input>
                <button className="btn btn-outline-success" type="submit" onClick={handleClick}>Search</button>
            </div>     
          );
   
};
 
export default SearchBar;