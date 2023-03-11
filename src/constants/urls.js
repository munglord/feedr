const SPOONACULAR_BASE = "https://api.spoonacular.com/";
const SEARCH_INGREDIENTS = "food/ingredients/search";
const GET_INGREDIENT = (ingredientId) =>
  `food/ingredients/${ingredientId}/information`;
const IMAGE_100 = "https://spoonacular.com/cdn/ingredients_100x100/";
const IMAGE_500 = "https://spoonacular.com/cdn/ingredients_500x500/";

export {
  SPOONACULAR_BASE,
  SEARCH_INGREDIENTS,
  GET_INGREDIENT,
  IMAGE_100,
  IMAGE_500,
};
