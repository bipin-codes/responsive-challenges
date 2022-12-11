import {
  BaseFlexContainer,
  BlankContainer,
  Heading,
} from 'components/common-styled/common';
import styled from 'styled-components';
import { Root } from '../common/styles';
export const StyledRoot = styled(Root)`
  justify-content: flex-start;
`;
export const Content = styled(BaseFlexContainer)`
  flex-direction: column;
`;
export const Title = styled.p`
  font-family: Montserrat;
  font-size: 1.125rem;
  font-weight: 700;
`;

export const TechGrid = styled(BlankContainer)`
  display: grid;
  grid-template-columns: auto auto;
  flex-direction: column;
  justify-content: space-between;
`;
