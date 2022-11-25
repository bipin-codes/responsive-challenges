import { BlankContainer } from "components/common-styled/common";
import styled from "styled-components";

export const StyledContainer = styled(BlankContainer)`
  display: flex;
  flex-direction: row;
  padding: 3rem;
  flex: 1;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 760px) {
    padding: 0.5rem;
  }
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
  > div {
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    padding: 1rem 2rem;
    background: #181719;
    position: absolute;
    bottom: -4rem;
    right: 2rem;
    > div {
      display: flex;
      justify-content: space-between;

      img {
        border-radius: 100px;
        width: 50px;
        height: auto;
      }
      > div {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-left: 1rem;
        justify-content: center;
        p:nth-child(1) {
          color: #fff;
          font-weight: 500;
          font-size: 0.875rem;
          font-family: "Montserrat", sans-serif;
        }
        > p:nth-child(2) {
          color: #828282;
          font-weight: 500;
          font-size: 0.75rem;
          font-family: "Montserrat", sans-serif;
        }
      }
    }

    > p:last-child {
      margin-top: 1rem;
      color: #fff;
      font-family: "Lora", serif;
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
  @media (max-width: 800px) {
    > div {
      bottom: 0;
      > p:last-child {
        font-size: 1.125rem;
      }
    }
  }
  @media (max-width: 761px) {
    > div {
      bottom: 9rem;
      left: 5rem;
      padding: 0.5rem;
    }
  }
`;
