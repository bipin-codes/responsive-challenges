import {
  BlankContainer,
  Container,
  Heading,
} from "components/common-styled/common";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  font-family: "Playfair Display", serif;
  padding: 2rem 15rem;
`;
export const StyledHeading = styled(Heading)`
  font-size: 3rem;
  font-weight: 700;
`;
export const StyledDescription = styled(BlankContainer)`
  width: 50%;
  margin: 1rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  p {
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
    font-style: italic;
    margin-left: 0.5rem;
  }
`;

export const StyledContent = styled(BlankContainer)`
  margin: 2rem 0;
`;
export const Subheading = styled(Heading)`
  font-weight: 700;
  font-size: 1.5rem;
`;

export const RecipeTitle = styled(Heading)`
  font-weight: 400;
  font-style: italic;
  font-size: 1.125rem;
  margin: 1rem 0;
`;
export const RecipeItems = styled.ul``;
export const RecipeItem = styled.li``;
