import React from "react";
import "./recipe.scss";

const Recipe = ({ title, calories, image, ingredients, makes }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <img className="image" src={image} alt={title} />
      <h2>Ingredients</h2>
      <ol>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ol>
      <p className="recipe-stats">
        <strong>Calories: </strong>
        {Math.round(calories)}
        <strong>Yields: </strong>
        {makes} servings
      </p>
    </div>
  );
};

export default Recipe;
