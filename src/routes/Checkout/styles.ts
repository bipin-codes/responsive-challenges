import {
  BlankContainer,
  Container,
  Heading,
} from "components/common-styled/common";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  padding: 3rem 10rem;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 1430px) {
    padding: 2rem 7rem;
  }
  @media (max-width: 1030px) {
    padding: 1rem 3rem;
  }
  @media (max-width: 600px) {
    padding: 1rem;
  }
  @media (max-width: 480px) {
    margin: 0;
    padding: 1rem 0.5rem;
  }
`;

export const Title = styled(Heading)`
  font-weight: 600;
  font-size: 2.25rem;
`;

export const Content = styled(BlankContainer)`
  display: flex;
  justify-content: space-between;
  max-width: 1470px;
  margin: auto;

  @media (max-width: 850px) {
    flex-direction: column;
    max-width: 100%;
  }
`;
export const SubTitle = styled(Title)`
  font-size: 1.125rem;
  margin: 2rem 0;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  > div:first-child {
    margin-right: 1rem;
  }

  @media (max-width: 468px) {
    > div:first-child {
      margin-right: 2px;
    }
  }
`;
export const Form = styled.form`
  flex: 1;
  padding: 5rem;

  button[type="submit"] {
    margin: 1rem 0;
    background: #f2994a;
    padding: 1rem 2rem;
    border-radius: 12px;
    color: white;
    float: right;
    border: none;
    outline: none;
    font-size: 1rem;
  }

  @media (max-width: 1030px) {
    padding: 1rem;
  }
  @media (max-width: 850px) {
    order: 2;
  }
  @media (max-width: 480px) {
    margin: 0;
    padding: 0.2rem;
  }
`;

export const Cart = styled.div`
  background: #f2f2f2;
  border-radius: 12px;
  margin: 6rem 0;
  padding: 2rem;

  > div {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    border-top: 1px solid #bdbdbd;
    padding: 1rem 0;
    > p {
      font-weight: 600;
    }
  }

  @media (max-width: 850px) {
    order: 1;
  }
  @media (max-width: 600px) {
    padding: 0.5rem;
    margin: 1rem;
  }
  @media (max-width: 480px) {
    margin: 0;
  }
`;

export const Product = styled(BlankContainer)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 1rem 0;
`;
export const ProductImage = styled.img`
  border-radius: 12px;
  width: 8.375rem;
  height: 8.375rem;
`;
export const ProductDetail = styled.div`
  flex: 1;
  font-weight: 600;
  color: #4e5150;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  margin-left: 1rem;
  > p {
    font-size: 1rem;
  }
  > div:nth-child(2) {
    span:nth-child(1) {
      margin-right: 1rem;
      color: #f2994a;
    }
    span:nth-child(2) {
      text-decoration: line-through;
      font-size: 0.75rem;
    }
  }
  > div:nth-child(3) {
    border-radius: 12px;
    border: solid 1px #828282;
    padding: 0.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-self: flex-end;
    span {
      font-weight: 600;
    }
    button {
      padding: 0.5rem 0.8rem;
      background: #e0e0e0;
      border-radius: 4px;
      outline: none;
      border: none;
    }
  }
`;
