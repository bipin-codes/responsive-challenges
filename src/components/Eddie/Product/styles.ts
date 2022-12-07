import { BaseFlexContainer } from "components/common-styled/common";
import styled from "styled-components";
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
