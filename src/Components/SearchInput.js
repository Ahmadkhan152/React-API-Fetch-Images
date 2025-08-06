import { useState } from 'react';
import '../css/SearchInput.css';


const SearchInput = ( { handleSearchTerm } ) => {

    const [userInput, setUserInput] = useState('');

    const handleOnChange = (e) => {
        setUserInput(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        handleSearchTerm(userInput);
    }

    return (
        <div className="searchInputContainer">
            <h1>Search Your Favourite Images </h1>
            <form className="searchForm" onSubmit = { handleOnSubmit }>
                <input value={userInput} type = "text" onChange = { handleOnChange } placeholder = "Search Your Images..." className = "searchImages" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchInput;