import "./App.css";
import { useState } from "react";
import RepoCard from "./components/RepoCard";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const search = () => {
    if (searchKey) {
      fetch(
        `https://api.github.com/search/repositories?q=user:${searchKey}&&s=stars&type=Repositories`
      )
        .then((res) => res.json())
        .then((res) => {
          setSearchResult(res.items);
        });
    }
  }

  return (
    <div className="App">
      <h1>Welcome to Github Search</h1>
      <input type="text" placeholder="type the search keyword here" onChange={({target}) => setSearchKey(target.value)} />
      <button onClick={() => search()}>Search</button>
      <div className="search-results">
        {searchResult && searchResult.map((res) => <RepoCard key={res.id} res={res}></RepoCard>)}
      </div>
    </div>
  );
}

export default App;
