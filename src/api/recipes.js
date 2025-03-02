import axios from "axios";

const API_KEY = "44123451b6b1434896b7920b7b68173f";
const API_URL = "https://api.spoonacular.com/recipes/findByIngredients";

/**
 * Fetch recipes based on multiple ingredients
 * @param {string} ingredients - Comma-separated list of ingredients
 * @returns {Promise} - Resolves to an array of recipes
 */
export const fetchRecipes = async (ingredients) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        ingredients: ingredients, // Comma-separated ingredients
        number: 10, // Number of results to fetch
        apiKey: API_KEY,
      },
    });

    return response.data || []; // Return an empty array if no recipes found
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
