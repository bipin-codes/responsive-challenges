import {
  BaseFlexContainer,
  BlankContainer,
  Heading,
} from 'components/common-styled/common';
import styled from 'styled-components';

export const Content = styled(BlankContainer)`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  justify-content: space-evenly;
  font-family: Montserrat;
  align-self: stretch;
`;

export const Title = styled(Heading)`
  font-size: 1.5rem;
  font-weight: 500;
  color: #333;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 1rem;
  color: #828282;
`;
export const Tags = styled(BaseFlexContainer)`
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: 500;
  color: #4f4f4f;

  span {
    margin: 0 0.5rem 0 0;
  }
`;
export const ActionContainer = styled(BaseFlexContainer)`
  justify-content: initial;
  margin: 1rem 0;
`;

export const ActionButton = styled.button<{ solid: boolean }>`
  border-radius: 12px;
  background: ${({ solid }) => (solid ? '#2f80ed' : 'transparent')};
  outline: none;
  border: 1px solid #2f80ed;
  color: ${({ solid }) => (!solid ? '#2f80ed' : 'white')};
  width: 135px;
  height: 46px;
  margin-right: 1rem;
`;
