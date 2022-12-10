import { BlankContainer } from "components/common-styled/common";
import styled from "styled-components";

export const MissionAction = styled(BlankContainer)`
  p {
    color: #828282;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  > div {
    display: flex;
    flex-direction: row;
    max-width: 500px;
    background: #f2f2f2;
    justify-content: space-between;
    padding: 0.25rem;
    border-radius: 12px;
    input {
      border: none;
      padding: 0.25rem;
      outline: none;
      background: transparent;
      font-size: 1rem;

      ::placeholder {
        color: #bdbdbd;
        font-weight: 500;
      }
    }
    button {
      border: none;
      outline: none;
      background: #2d9cdb;
      height: 3rem;
      border-radius: 0.75rem;
      color: white;
      font-size: 1.25rem;
      font-weight: 500;
      min-width: 4rem;
    }
  }

  @media (max-width: 800px) {
    > div {
      width: 100%;
    }
  }
`;
