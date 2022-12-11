import {
  BaseFlexContainer,
  BlankContainer,
  Heading,
} from "components/common-styled/common";
import styled from "styled-components";
import { Root } from "../common/styles";
export const StyledRoot = styled(Root)`
  justify-content: flex-start;
  @media (max-width: 500px) {
    padding: 1rem;
    margin: 0;
  }
`;
export const Content = styled(BaseFlexContainer)`
  flex-direction: column;
  width: 100%;
`;
export const Title = styled.p`
  font-family: Montserrat;
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0.5rem 0;
`;

export const TechGrid = styled(BlankContainer)`
  display: grid;
  gap: 2rem;
  grid-template-columns: auto auto;
  flex-direction: column;
  justify-content: stretch;
  @media (max-width: 600px) {
    grid-template-columns: auto;
  }
`;
export const TechContainer = styled(BlankContainer)`
  width: 100%;
  margin: 0.5rem 0;
`;
export const TechName = styled(Heading)`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 1rem;
  color: #4f4f4f;
`;
export const Stats = styled(BlankContainer)`
  width: 100%;
  border-radius: 12px;
  background: #c4c4c4;
  height: 9px;
`;

export const InnerDiv = styled(BlankContainer)<{ fillAmount: string }>`
  height: 9px;
  background: #2f80ed;
  width: ${({ fillAmount }) => fillAmount};
  border-radius: 12px;
`;
