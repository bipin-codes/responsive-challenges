import { BlankContainer, Heading } from "components/common-styled/common";
import styled from "styled-components";

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
export const ServiceContainer = styled(BlankContainer)`
  display: flex;
`;
export const ServiceCard = styled(BlankContainer)`
  padding: 2rem;
  display: flex;
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
    border-radius: 1.5rem;
    box-shadow: 0px 10px 30px rgba(51, 51, 51, 0.1);
    > button {
      background: #2d9cdb;
      color: #fff;
    }
  }
`;
export const ServiceCardIconContainer = styled(BlankContainer)`
  background: ${(props) => props.color};
  padding: 1rem;
  align-items: center;
  justify-content: center;
  display: flex;
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
  align-items: flex-start;
  div:nth-child(odd) {
    margin: 10rem 0 0 0;
  }
`;
export const ProductCard = styled(BlankContainer)`
  display: flex;
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
export const Span = styled.div`
  float: right;
  display: flex;
  align-items: center;
  color: #2d9cdb;
  font-weight: 500;
  font-size: 1.5rem;
`;
export const StyledSpan = styled.span.attrs({
  className: "material-symbols-outlined",
})``;
