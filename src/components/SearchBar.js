import {React, useState} from "react";

const SearchBar = (props) => {

let [searchInput, setSearchInput] = useState('');

let handleChange = (e) => {
    setSearchInput(e.target.value);    
};

let handleSubmit = (e) => {
    e.preventDefault();
    props.getSearchCriteria(searchInput);
};

    return (
        <div className="searchBar">
            <form onSubmit={handleSubmit}>
            <input tpe="text" placeholder="Enter Search Criteria" value={searchInput} onChange={handleChange}></input>
            <button type="submit">Search</button>
            </form>



        </div>
    )
};

export default SearchBar;
