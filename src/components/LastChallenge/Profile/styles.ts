import {
  BaseFlexContainer,
  BlankContainer,
} from 'components/common-styled/common';
import styled from 'styled-components';

const bpFinal = '700px';
const bpOne = '930px';

export const Details = styled(BlankContainer)`
  display: flex;
  flex-direction: column;
  justify-content: initial;

  @media (max-width: ${bpFinal}) {
    align-items: flex-start;
    margin: 0 1rem;
  }
`;
export const PersonDetail = styled(BlankContainer)`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  @media (max-width: ${bpOne}) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: ${bpFinal}) {
    flex-direction: column;
    padding: 2rem 0rem;
  }
`;
export const PersonDescription = styled(BlankContainer)`
  padding: 0 2rem;

  font-family: Montserrat;
  font-size: 1.125rem;
  font-weight: 500;
  color: #828282;
  p {
    margin: 1rem 0;
  }

  @media (max-width: ${bpFinal}) {
    padding: 0;
  }
`;

export const NameAndTag = styled(BlankContainer)`
  p:first-child {
    font-family: Montserrat;
    font-size: 1.75rem;
    font-weight: 600;
    color: #4f4f4f;
  }
  p:last-child {
    font-family: Montserrat;
    font-size: 1.125rem;
    font-weight: 500;
    color: #828282;
  }

  @media (max-width: ${bpFinal}) {
    margin: 1rem 0;
  }
`;
export const Contact = styled(BlankContainer)`
  span: nth-child(even) {
    font-family: Montserrat;
    font-size: 1.125rem;
    font-weight: 500;
    color: #4f4f4f;
  }
`;

export const ContactItem = styled(BaseFlexContainer)`
  align-items: center;
`;
export const StyledSpan = styled.span.attrs({
  className: 'material-symbols-outlined',
})`
  color: #4f4f4f;
  font-size: 1.125rem;
  font-weight: 500;
  margin: 0 0.5rem;

  @media (max-width: ${bpOne}) {
    margin: 0.5rem 0;
  }
`;
