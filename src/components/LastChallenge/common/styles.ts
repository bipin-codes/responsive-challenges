import styled from 'styled-components';
import {
  BlankContainer,
  BaseFlexContainer,
} from 'components/common-styled/common';

const bpOne = '700px';

export const Default = styled(BlankContainer)`
  background: #f2f2f2;
  padding: 2rem;
`;
export const Root = styled(BaseFlexContainer)`
  margin: 2rem;
  background: #fff;
  padding: 2rem;
  display: flex;
  border-radius: 12px;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: ${bpOne}) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  border-radius: 12px;
  height: auto;
  max-width: 100%;
`;
