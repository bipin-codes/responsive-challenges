import { BlankContainer } from "components/common-styled/common";
import styled from "styled-components";

export const StyledContainer = styled(BlankContainer)`
  display: flex;
  flex-direction: row;
  padding: 3rem;
  flex: 1;
`;
export const LeftContainer = styled(BlankContainer)`
  color: #fff;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h4 {
    font-family: "Lora", serif;
    font-size: 3rem;
    font-weight: 500;
  }
  p {
    margin-top: 3rem;
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    width: 65%;
  }
  span {
    margin-top: 3rem;
    font-family: "Montserrat", sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    :hover {
      cursor: pointer;
    }
  }
`;
export const RightContainer = styled(BlankContainer)`
  flex: 1;
  align-self: center;
  position: relative;
  > img {
    width: 100%;
    height: auto;
  }
  div {
    position: absolute;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    padding: 3rem;
    background: #181719;
    bottom: -15.63rem;
    right: 6.25rem;
    p:nth-child(2) {
      color: #fff;
      font-weight: 500;
      font-size: 0.875rem;
      font-family: "Montserrat", sans-serif;
    }
    p:nth-child(3) {
      color: #828282;
      font-weight: 500;
      font-size: 0.75rem;
      font-family: "Montserrat", sans-serif;
    }
    p:last-child {
      width: 70%;
      margin: auto;
      color: #fff;
      font-family: "Lora", serif;
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
`;
