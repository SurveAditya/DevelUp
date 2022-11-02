// SearchBar.js
import React, { useState } from "react";
import axios from "axios";
import Results from "./Result";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleClick = async () => {
    console.log(searchInput);

    try {
      const result = await axios(
        `https://api.github.com/users/:users/${searchInput}/repos`
      );
      setRepos(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <input
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <Results repos={repos} />
    </>
  );
};
export default SearchBar;
