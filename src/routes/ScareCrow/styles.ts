import styled from "styled-components";
export const Container = styled.div`
  padding: 3rem;
  font-family: "Space Mono";
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const Header = styled.p`
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
`;
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;
