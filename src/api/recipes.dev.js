"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchRecipes = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API_KEY = "44123451b6b1434896b7920b7b68173f";
var API_URL = "https://api.spoonacular.com/recipes/findByIngredients";
/**
 * Fetch recipes based on multiple ingredients
 * @param {string} ingredients - Comma-separated list of ingredients
 * @returns {Promise} - Resolves to an array of recipes
 */

var fetchRecipes = function fetchRecipes(ingredients) {
  var response;
  return regeneratorRuntime.async(function fetchRecipes$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(API_URL, {
            params: {
              ingredients: ingredients,
              // Comma-separated ingredients
              number: 10,
              // Number of results to fetch
              apiKey: API_KEY
            }
          }));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data || []);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error("Error fetching recipes:", _context.t0);
          return _context.abrupt("return", []);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.fetchRecipes = fetchRecipes;