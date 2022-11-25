import React from "react";
import {
  RecipeItem,
  RecipeItems,
  RecipeTitle,
  StyledContainer,
  StyledContent,
  StyledDescription,
  StyledHeading,
  Subheading,
} from "./styles";
const Header = () => (
  <>
    <StyledHeading>Classic Cheesecake Recipe</StyledHeading>
    <StyledDescription>
      <img src="images/recipe/6dots.svg" alt="dots-svg" />
      <p>
        Look no further for a creamy and ultra smooth classic cheesecake recipe!
        Paired with a buttery graham cracker crust, no one can deny its simple
        decadence. For the best results, bake in a water bath.
      </p>
    </StyledDescription>
    <img src="images/recipe/photo1.png" alt="dish_img" />
  </>
);

const Content = () => (
  <StyledContent>
    <Subheading>Ingredients</Subheading>
    <RecipeTitle>Graham Cracker Crust</RecipeTitle>
    <RecipeItems>{<RecipeItem></RecipeItem>}</RecipeItems>
  </StyledContent>
);

const Recipe = () => {
  return (
    <StyledContainer>
      <Header />
      <Content />
    </StyledContainer>
  );
};

export default Recipe;
