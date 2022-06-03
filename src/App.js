import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchKey, setSeasrchKey] = useState("facebook");

  useEffect(() => {
    fetch(
      "https://api.github.com/search/repositories?q=facebook&&s=stars&type=Repositories"
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.items);
      });
  }, []);
  return (
    <div className="App">
      <h1>Welcome to Github Search</h1>
      <input type="text" placeholder="tpye the search keyword here" />
      <div className="search-results">
        {searchResult && searchResult.map((res) => <p>{res.id}</p>)}
      </div>
    </div>
  );
}

export default App;
