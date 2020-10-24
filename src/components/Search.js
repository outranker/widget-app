import React, { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  return (
    <div className="ui form">
      <div className="field">
        <label>Enter Search Input</label>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="input"
        />
      </div>
    </div>
  );
};

export default Search;