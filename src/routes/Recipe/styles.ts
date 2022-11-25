import {
  BlankContainer,
  Container,
  Heading,
} from 'components/common-styled/common';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
  font-family: 'Playfair Display', serif;
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
    font-family: 'Montserrat', sans-serif;
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
  margin: 2rem 0;
`;
export const RecipeItems = styled.ul`
  list-style-type: none;
`;
export const RecipeItem = styled.li`
  display: flex;
  font-family: 'Montserrat', sans-serif;
  margin: 1rem 0;

  div {
    border-radius: 4px;
    margin-right: 1rem;
    height: 21px;
    width: 21px;
    border: 1px solid #828282;
  }
  p {
    font-size: 1rem;
    flex: 1;
  }
`;

export const Instruction = styled(BlankContainer)`
  margin: 2rem 0;
  display: flex;
`;
export const Checkbox = styled(BlankContainer)``;
export const Idx = styled.span`
  background: #f2994a;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-family: 'Playfair Display', serif;
  margin-right: 1rem;
  color: white;
  font-size: 1.5rem;
  align-self: flex-start;
`;
export const InstructionDescription = styled.span``;
export const InstructionHeading = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1rem;
`;
