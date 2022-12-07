import styled from "styled-components";
import { Heading, BaseFlexContainer } from "components/common-styled/common";

export const ServiceCard = styled(BaseFlexContainer)`
  padding: 2rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 1000px) {
    padding: 0.5rem;
    margin: 0.5rem 0;
  }

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
