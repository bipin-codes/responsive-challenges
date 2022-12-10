import {
  BlankContainer,
  Container,
  Heading,
  BaseFlexContainer,
} from "components/common-styled/common";
import styled from "styled-components";

export const MainContainer = styled(Container)`
  background: #fff;
  @media (max-width: 1750px) {
    padding: 0 10rem;
  }
  @media (max-width: 1500px) {
    padding: 0 5rem;
  }
  @media (max-width: 1200px) {
    padding: 0 1rem;
  }
  @media (max-width: 500px) {
    padding: 0 0.5rem;
  }
`;
export const PaddedContainer = styled(BlankContainer)`
  margin: 2rem 0;
  padding: 0 15rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;

  @media (max-width: 1750px) {
    padding: 0 10rem;
  }
  @media (max-width: 1500px) {
    padding: 0 5rem;
  }
  @media (max-width: 1200px) {
    padding: 0 1rem;
  }
`;
export const SubHeading = styled(Heading)`
  color: #2d9cdb;
  font-size: 1.25rem;
`;
export const SectionHeading = styled(Heading)`
  color: #333333;
  font-size: 3rem;
  margin: 0.5rem 0;
  width: 40%;
  @media (max-width: 1750px) {
    width: 80%;
  }
  @media (max-width: 1000px) {
    width: 100%;
    font-size: 1.5rem;
  }
`;

export const Image = styled.img`
  border-radius: 1.25rem;
  margin: 1rem 3.5rem;
  min-height: 148px;
  object-fit: fill;
  @media (max-width: 1750px) {
    margin: 1rem;
  }
  @media (max-width: 500px) {
    margin: 0.2rem;
  }
`;

export const Mission = styled(SectionHeading)`
  font-size: 1.25rem;
  font-weight: 400;
  margin: 2rem 0;
  width: 40%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
export const ServiceContainer = styled(BaseFlexContainer)`
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const ProductsContainer = styled(BlankContainer)`
  display: grid;
  gap: 1rem;
  grid-template-columns: auto auto;
  margin: auto;
  justify-content: space-between;
  align-items: flex-start;
  div:nth-child(odd) {
    margin: 10rem 0 0 0;
  }
  @media (max-width: 800px) {
    grid-template-columns: auto;
    justify-content: center;
    div:nth-child(odd) {
      margin: 0;
    }
  }
`;

export const Span = styled(BaseFlexContainer)`
  float: right;

  align-items: center;
  color: #2d9cdb;
  font-weight: 500;
  font-size: 1.5rem;

  @media (max-width: 800px) {
    float: left;
    flex-direction: row;
    margin: 1rem 0;
  }

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const StyledSpan = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  :hover {
    text-decoration: none;
  }
`;

export const TeamContainer = styled(BaseFlexContainer)`
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const TeamDetails = styled(BlankContainer)`
  > p:last-child {
    font-weight: 400;
    font-size: 1rem;
  }
`;

export const TeamGrid = styled(BlankContainer)`
  display: grid;
  grid-template-columns: auto auto;
  img {
    width: 90%;
    margin: 1rem;
    border-radius: 1.75rem;
  }
  > img:first-child {
    grid-row: 1/3;
    align-self: center;
  }
`;

export const TestimonialTitle = styled.p`
  font-weight: 500;
  font-size: 2.25rem;
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;
export const ClientDetail = styled(BaseFlexContainer)`
  margin: 2rem 0;
  flex-direction: row;
  img {
    border-radius: 0.75rem;
    width: 100%;
    max-width: 5rem;
    height: auto;
  }
  div {
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    p:first-child {
      font-weight: 500;
      font-size: 1.5rem;
      color: #333;
    }
    p:last-child {
      color: #828282;
      font-size: 1.25rem;
      font-weight: 500;
    }
  }
`;

export const Footer = styled(BlankContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5rem 15rem;
  margin: 2rem;
  margin-bottom: 0;
  color: white;
  align-items: flex-start;
  ul {
    list-style: none;
    font-weight: 400;
    font-size: 1.25rem;
  }
  li {
    margin: 1rem 0;
  }

  > div:nth-child(2) {
    > p {
      font-size: 2.25rem;
      font-family: Heebo;
    }
    img {
      margin: 0 0.5rem 0 0;
    }
  }
  @media (max-width: 1500px) {
    padding: 5rem 10rem;
  }
  @media (max-width: 1200px) {
    padding: 5rem 5rem;
  }
  @media (max-width: 1000px) {
    padding: 1rem;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    margin: 0;
    align-item: center;
    padding: 3rem 1rem;
    ul {
      margin: 2rem 0;
    }
    > div {
      > * {
        margin: 2rem 0;
      }
    }
  }
`;
