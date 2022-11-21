import {
  BlankContainer,
  Container,
  Heading,
} from "components/common-styled/common";
import styled from "styled-components";
export const StyledContainer = styled(Container)`
  font-family: "Poppins", sans-serif;
`;
export const BaseRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3rem;
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0;
  }
`;
export const LeftHeader = styled(Heading)`
  font-weight: 700;
  font-size: 2.25rem;
  font-family: "PT Serif", serif;
`;
export const RightHeaderContainer = styled(BlankContainer)`
  font-family: "Poppins", sans-serif;
  font-size: 1.125rem;
  flex-direction: column;
  display: flex;
  width: 40%;
  @media (max-width: 700px) {
    margin: 2rem 0;
    width: 100%;
  }
`;

export const RightHeader = styled(Heading)`
  font-weight: 600;
  float: right;
`;
export const RightHeaderContent = styled(Heading)`
  font-weight: 400;
  float: right;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-evenly;
  gap: 4rem;
  div:nth-child(3n-1) {
    margin: 4rem 0;
  }
  @media (max-width: 1048px) {
    gap: 2rem;
    grid-template-columns: auto auto;
    div:nth-child(3n-1) {
      margin: 0;
    }
    div:nth-child(even) {
      margin: 2rem 0;
    }
  }
`;
export const TeamCard = styled.div`
  display: flex;
`;
export const MemberImage = styled.img`
  width: 14.875rem;
  height: 21.313rem;
  @media (max-width: 640px) {
    width: 8.625rem;
    height: 13.063rem;
  }
`;
export const MemberName = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
`;
export const MemberPosition = styled.p`
  writing-mode: vertical-rl;
  font-family: "PT Serif", serif;
  font-weight: 400;
  font-size: 0.75rem;
`;
