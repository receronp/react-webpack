import React, { useState } from "react";

const SearchBar = ({ onSearchTermChange }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onSearchTermChange(term);
  };

  return (
    <form className="search-bar" onSubmit={(event) => onSubmit(event)}>
      <input
        value={term}
        onChange={(event) => {
          setTerm(event.target.value);
        }}
      />
      <button type="submit" className="btn btn-default">
        Submit
      </button>
    </form>
  );
};

export default SearchBar;
