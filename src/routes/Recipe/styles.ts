import {
  BlankContainer,
  Container,
  Heading,
} from 'components/common-styled/common';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
  font-family: 'Playfair Display', serif;
  padding: 2rem 15rem;

  @media (max-width: 1300px) {
    padding: 2rem 10rem;
  }
  @media (max-width: 1000px) {
    padding: 2rem 5rem;
  }
  @media (max-width: 500px) {
    padding: 1rem 2rem;
  }
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
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const StyledContent = styled(BlankContainer)`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 700px) {
    flex-direction: column;
    > div:nth-child(1) {
      order: 2;
    }
    > div:nth-child(2) {
      order: 1;
      width: 100%;
      box-shadow: none;
      padding: 0;
    }
  }
`;
export const StyledContentLeft = styled(BlankContainer)`
  flex: 1;
`;
export const StyledContentRight = styled(BlankContainer)`
  box-shadow: 0px 0px 20px 0px #0000001a;
  padding: 4rem;
  margin: 0.5rem;
  margin-right: 0;
  border-radius: 0.75rem;
  .restro-icon {
    color: #f2994a;
  }

  @media (max-width: 1300px) {
    padding: 2rem;
  }
`;
export const StyledContentRightBottomContainer = styled(BlankContainer)`
  @media (max-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
export const StyledContentRightTopContainer = styled(BlankContainer)`
  // margin: 5rem 5rem 0 5rem;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem 0;
  align-items: center;
  @media (max-width: 700px) {
    margin: 0.5rem 0;
  }
`;
export const StyledContentRightDetail = styled(BlankContainer)`
  font-family: 'Montserrat', sans-serif;
  margin-left: 1rem;
`;

export const StyledContentRightTitle = styled.p`
  font-size: 0.625rem;
  font-weight: 700;
  color: #bdbdbd;
  margin-bottom: 0.5rem;
`;
export const StyledContentRightDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
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
