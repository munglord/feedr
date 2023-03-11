import axios from "axios";
import {
  GET_INGREDIENT,
  SEARCH_INGREDIENTS,
  SPOONACULAR_BASE,
} from "../constants/urls";

const API_KEY = process.env.SPOONACULAR_API_KEY;

export const searchIngredients = (query) => {
  console.log("query = ", query);
  return axios.get(`${SPOONACULAR_BASE}${SEARCH_INGREDIENTS}?query=${query}`, {
    headers: { "x-api-key": API_KEY },
  });
  // return getMockIngredients();
};

export const getIngredient = (ingredientId) => {
  return axios.get(
    `${SPOONACULAR_BASE}${GET_INGREDIENT(ingredientId)}?amount=100&unit=grams`,
    {
      headers: { "x-api-key": API_KEY },
    }
  );
  // return getMockIngredient();
};
