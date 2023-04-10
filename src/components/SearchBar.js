import React, { useState } from "react";

const SearchBar = () => {
  const [term, setTerm] = useState("");

  return (
    <div className="search-bar">
      <input
        value={term}
        onChange={(event) => {
          setTerm(event.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
