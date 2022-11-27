import {
  BlankContainer,
  Container,
  Heading,
} from "components/common-styled/common";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  padding: 3rem 10rem;
  font-family: "Montserrat", sans-serif;
`;

export const Title = styled(Heading)`
  font-weight: 600;
  font-size: 2.25rem;
`;

export const Content = styled(BlankContainer)`
  display: flex;
  justify-content: space-between;
`;
export const SubTitle = styled(Title)`
  font-size: 1.125rem;
  margin: 2rem 0;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
`;

export const Cart = styled.div`
  background: #f2f2f2;
  border-radius: 12px;
  margin: 6rem;
  padding: 2rem;
`;

export const Product = styled(BlankContainer)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 1rem 0;
`;
export const ProductImage = styled.img`
  border-radius: 12px;
`;
export const ProductDetail = styled.div`
  padding: 1rem;
  flex: 1;
  font-weight: 600;
  color: #4e5150;

  > p {
    font-size: 1rem;
    margin: 1rem 0;
  }
  > span:nth-child(2) {
    margin-right: 1rem;
    color: #f2994a;
    display: inline-block;
  }
  > span:nth-child(3) {
    text-decoration: line-through;
    font-size: 0.75rem;
    display: inline-block;
  }
  > div {
    margin: 1rem 0;
    border-radius: 12px;
    border: solid 1px #828282;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-weight: 600;
    }
    button {
      padding: 0.5rem;
      background: #e0e0e0;
      border-radius: 4px;
      outline: none;
      border: none;
    }
  }
`;
