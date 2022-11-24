import { BlankContainer, Heading } from "components/common-styled/common";
import styled from "styled-components";

export const StyledContainer = styled(BlankContainer)`
  padding: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 760px) {
    padding: 0.5rem;
  }
`;

export const Title = styled(Heading)`
  border: 1px solid #fff;
  width: 6.375rem;
  color: #fff;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 200;
  padding: 0.8rem;
  :hover {
    border-bottom-color: white;
    cursor: pointer;
  }
`;

export const Menu = styled(BlankContainer)`
  padding: 0.5rem 0;
  @media (max-width: 800px) {
    display: none;
  }
`;
export const MenuItem = styled.li`
  margin: 0 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid transparent;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  :hover {
    border-bottom-color: white;
    cursor: pointer;
  }
`;

export const MenuButton = styled.button`
  border: none;
  background: transparent;
  color: #fff;
  @media (min-width: 801px) {
    display: none;
  }
`;
