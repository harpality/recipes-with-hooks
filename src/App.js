import React, {useEffect, useState} from "react";
import "./App.css";

const App = () => {
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${
    process.env.REACT_APP_ID
  }&app_key=${process.env.REACT_APP_KEY}`;

  useEffect(()=> {
    console.log('Effect has been run')
  })

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
