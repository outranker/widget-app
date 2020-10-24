import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  useEffect(async () => {
    const searchArticle = () => {
      axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
    };
    searchArticle();
  }, [term]);
  return (
    <div className="ui form">
      <div className="field">
        <label>Enter Search Input</label>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="input"
        />
        <p>{term}</p>
      </div>
    </div>
  );
};

export default Search;
