import "./index.css";

import { Link } from "react-router-dom";

const IngredientPage = () => {
  return (
    <>
      <header class="header">
        <Link to="/">
          <span class="back-arrow">←</span>
        </Link>

        <h1 class="header-title">Ingredient list</h1>
      </header>

      <section class="dish-card">
        <div class="dish-info">
          <h2 class="dish-name">Fried Avocado Tacos...</h2>
          <p class="dish-description">
            Panco fried avocado, Mayo, panco fried avocado, Mayo, Panco fried
            avocado...
          </p>
        </div>
        <div class="dish-image-box">
          <img
            src="https://via.placeholder.com/120"
            alt="Dish"
            class="dish-image"
          />
        </div>
      </section>

      <section class="ingredients">
        <h3 class="ingredients-title">Ingredients</h3>
        <p class="ingredients-subtitle">For 2 people</p>

        <ul class="ingredients-list">
          <li class="ingredient-item">
            <span class="ingredient-name">Cauliflower</span>
            <span class="ingredient-qty">01 Pc</span>
          </li>
          <li class="ingredient-item">
            <span class="ingredient-name">Mustard oil</span>
            <span class="ingredient-qty">1/2 litres</span>
          </li>
          <li class="ingredient-item">
            <span class="ingredient-name">Cauliflower</span>
            <span class="ingredient-qty">01 Pc</span>
          </li>
          <li class="ingredient-item">
            <span class="ingredient-name">Tomato</span>
            <span class="ingredient-qty">01 Pc</span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default IngredientPage;
