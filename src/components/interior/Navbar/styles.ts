import { BlankContainer, Heading } from "components/common-styled/common";
import styled from "styled-components";

export const StyledContainer = styled(BlankContainer)`
  padding: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled(Heading)`
  border: 1px solid #fff;
  width: 6.375rem;
  color: #fff;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 200;
  padding: 0.8rem;
`;

export const Menu = styled(BlankContainer)`
  padding: 0.5rem;
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
