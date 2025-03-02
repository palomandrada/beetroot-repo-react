import React, { useState } from "react";
import NavigationBar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { fetchRecipes } from "./api/recipes";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./styles.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    const formattedQuery = query.replace(/\s+/g, ""); // Remove spaces
    const fetchedRecipes = await fetchRecipes(formattedQuery);
    setRecipes(fetchedRecipes);
  };

  return (
    <div className="app-container">
      <NavigationBar />
      <div className="search-container">
        <h1 className="text-white">Find Your Perfect Recipe</h1>
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Display Recipes */}
      <Container className="recipe-results">
        <Row className="g-4">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <Col key={recipe.id} xs={12} sm={6} md={4} lg={3}>
                <Card className="recipe-card">
                  <Card.Img variant="top" src={recipe.image} alt={recipe.title} />
                  <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    <Card.Text>Click to see details</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-white mt-3 text-center">No recipes found.</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default App;
