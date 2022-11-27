import { BlankContainer, Container } from "components/common-styled/common";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  font-family: "Montserrat", sans-serif;
  padding: 2rem 8rem;
  @media (max-width: 850px) {
    padding: 3rem;
  }

  @media (max-width: 700px) {
    padding: 1rem;
  }
`;
export const ProfileCard = styled(BlankContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 9.75rem;
    height: 9.75rem;
    border-radius: 1rem;

    @media (max-width: 850px) {
      width: 6.25rem;
      height: 6.25rem;
    }
  }

  > p:nth-child(2) {
    font-weight: 600;
    font-size: 1.5rem;
    color: #4e5150;
  }
  > p:nth-child(3) {
    color: #a9a9a9;
    font-size: 0.875rem;
  }
`;

export const ProfileInfoContainer = styled(BlankContainer)`
  display: flex;
`;

export const ProfileInfo = styled(BlankContainer)`
  background: #e5e5e5;
  width: 6.25rem;
  height: 4.2rem;
  margin: 0.5rem;
  text-align: center;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 850px) {
    width: 4.875rem;
    height: 3.25rem;
  }

  justify-content: center;
  > p:nth-child(1) {
    color: #4e5150;
    font-size: 1.125rem;
    font-weight: 600;
  }
  > p:nth-child(2) {
    font-weight: 600;
    font-size: 0.875rem;
    color: #bdbdbd;
  }
`;

export const ImageGrid = styled(BlankContainer)`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  gap: 3.125rem;
  img {
    border-radius: 12px;
    width: 100%;
    height: 100%;
  }

  > img:nth-child(2) {
    grid-column: 2 / span 2;
  }

  > img:nth-child(3) {
    grid-column: 1 / span 2;
  }
  > img:nth-child(4) {
    grid-column: 3 / span 1;
    grid-row: 2 / span 2;
  }

  @media (max-width: 850px) {
    gap: 1rem;
  }

  @media (max-width: 700px) {
    gap: 0.5rem;
  }
`;
