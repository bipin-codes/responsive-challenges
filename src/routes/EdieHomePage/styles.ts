import {
  BlankContainer,
  Container,
  Heading,
} from "components/common-styled/common";
import styled from "styled-components";

export const MainContainer = styled(Container)`
  background: #fff;
`;
export const PaddedContainer = styled(BlankContainer)`
  margin: 2rem 0;
  padding: 0 15rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
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
`;

export const Image = styled.img`
  border-radius: 1.25rem;
  margin: 1rem 3.5rem;
`;

export const Mission = styled(SectionHeading)`
  font-size: 1.25rem;
  font-weight: 400;
  margin: 2rem 0;
  width: 40%;
`;

export const MissionAction = styled(BlankContainer)`
  width: 40%;
  p {
    color: #828282;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  > div {
    display: flex;
    flex-direction: row;
    background: #f2f2f2;
    justify-content: space-between;
    padding: 0.25rem;
    border-radius: 12px;
    input {
      border: none;
      padding: 0.25rem;

      outline: none;
      flex: 1;
      background: transparent;
      font-size: 1.25rem;
      ::placeholder {
        color: #bdbdbd;
        font-weight: 500;
      }
    }
    button {
      border: none;
      outline: none;
      background: #2d9cdb;
      width: 5.84rem;
      height: 3rem;
      border-radius: 0.75rem;
      color: white;
      font-size: 1.25rem;
      font-weight: 500;
      float: right;
    }
  }
`;
export const BaseFlexContainer = styled(BlankContainer)`
  display: flex;
`;
export const ServiceCard = styled(BaseFlexContainer)`
  padding: 2rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  > p {
    margin: 1rem 0;
  }
  > button {
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 0.75rem;
    background: #e0e0e0;
    color: #828282;
    font-weight: 500;
    font-size: 1rem;
    border: none;
  }
  :hover {
    transition-duration: 0.5s;
    border-radius: 1.5rem;
    box-shadow: 0px 10px 30px rgba(51, 51, 51, 0.1);
    > button {
      background: #2d9cdb;
      color: #fff;
    }
  }
`;
export const ServiceCardIconContainer = styled(BaseFlexContainer)`
  background: ${(props) => props.color};
  padding: 1rem;
  align-items: center;
  justify-content: center;

  color: white;
  border-radius: 1rem;
  margin: 1rem 0;
`;
export const ServiceCardTitle = styled(Heading)`
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: 700;
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
`;
export const ProductCard = styled(BaseFlexContainer)`
  flex-direction: column;
  width: 100%;
  img {
    border-radius: 12px;
    width: 100%;
  }
  > p:nth-child(2) {
    font-size: 0.75rem;
    font-weight: 300;
    color: #828282;
  }
  > p-nth-child(3) {
    font-size: 1.5rem;
    font-weight: 500;
    color: #333;
    margin-top: 1rem;
  }
`;
export const Span = styled(BaseFlexContainer)`
  float: right;

  align-items: center;
  color: #2d9cdb;
  font-weight: 500;
  font-size: 1.5rem;

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
`;
export const ClientDetail = styled(BaseFlexContainer)`
  margin: 2rem 0;
  img {
    border-radius: 0.75rem;
    width: 5rem;
    width: 5rem;
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
`;
