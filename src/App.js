/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import "./App.scss";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const getRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${
          process.env.REACT_APP_KEY
        }`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearch = event => {
    setSearch(event.target.value);
  };

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1 className="main-title">Find Your Meal</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Enter any food item here"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {!recipes.length ? (
          <h1>no results</h1>
        ) : (
          recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              makes={recipe.recipe.yield}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
