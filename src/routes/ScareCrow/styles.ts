import { Container, Heading } from "components/common-styled/common";
import styled from "styled-components";
export const StyledContainer = styled(Container)`
  font-family: "Space Mono";
`;
export const Header = styled(Heading)`
  font-size: 1.5rem;
  font-weight: 700;
`;
export const Body = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  flex-wrap: wrap;
  height: 100%;
  flex-grow: 1;
`;
export const Image = styled.img`
  width: 33.75rem;
  height: 28rem;
  margin: auto;

  @media (max-width: 560px) {
    width: 17.88rem;
    height: 14.88rem;
  }
`;
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MainHeader = styled.h3`
  margin: 1rem 0;
  font-size: 4rem;
  color: #333333;
  line-height: 5.9rem;
  @media (max-width: 560px) {
    line-height: 4.44rem;
    font-size: 3rem;
    margin: 0.5rem 0;
  }
`;
export const Description = styled.p`
margin: 1rem 0,
font-size: 1.5rem,
font-weight: 400,
line-height: 2.25rem;
@media (max-width: 560px) {
    line-height: 1.63rem;
    font-size: 1.125rem;
    margin: 0.5rem 0;

  }
`;
export const ActionToHome = styled.button`
  margin: 2rem 0;
  width: 13.5rem;
  height: 5.3rem;
  background-color: #333333;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
`;
