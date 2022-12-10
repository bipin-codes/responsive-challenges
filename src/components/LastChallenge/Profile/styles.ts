import {
  BaseFlexContainer,
  BlankContainer,
} from "components/common-styled/common";
import styled from "styled-components";

const bpOne = "1500px";

export const Default = styled(BlankContainer)`
  background: #f2f2f2;
  padding: 10rem;
`;
export const Root = styled(BaseFlexContainer)`
  margin: 10rem;
  background: #fff;
  padding: 2rem;
  display: flex;
  border-radius: 12px;
  justify-content: center;

  @media (max-width: ${bpOne}) {
    flex-direction: column;
  }
`;
export const Image = styled.img`
  border-radius: 12px;
`;
export const Details = styled(BlankContainer)`
  display: flex;
  flex-direction: column;
  justify-content: initial;

  @media (max-width: ${bpOne}) {
    align-items: flex-start;
  }
`;
export const PersonDetail = styled(BlankContainer)`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;

  @media (max-width: ${bpOne}) {
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

  @media (max-width: ${bpOne}) {
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

  @media (max-width: ${bpOne}) {
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
  className: "material-symbols-outlined",
})`
  color: #4f4f4f;
  font-size: 1.125rem;
  font-weight: 500;
  margin: 0 0.5rem;

  @media (max-width: ${bpOne}) {
    margin: 0.5rem 0;
  }
`;
