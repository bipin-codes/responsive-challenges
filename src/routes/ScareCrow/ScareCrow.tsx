import React from "react";
import { Body, Container, DetailsContainer, Header, Image } from "./styles";
const ScareCrow = () => {
  const backToHome = () => console.log("Back to home!");
  return (
    <Container>
      <Header>404 NOT FOUND</Header>
      <Body>
        <Image src={require("assets/scarecrow/scare.png")} />
        <DetailsContainer>
          <h3
            style={{
              margin: "2rem 0",
              fontSize: "4rem",
              color: "#333333",
              lineHeight: "5.9rem",
            }}
          >
            I have bad news for you
          </h3>
          <p
            style={{
              margin: "2rem 0",
              fontSize: "1.5rem",
              fontWeight: "400",
              lineHeight: "2.25rem",
            }}
          >
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <button
            type="button"
            onClick={backToHome}
            style={{
              margin: "2rem 0",
              width: "13.5rem",
              height: "5.3rem",
              backgroundColor: "#333333",
              color: "#fff",
              fontWeight: "700",
            }}
          >
            BACK TO HOME PAGE
          </button>
        </DetailsContainer>
      </Body>
    </Container>
  );
};
export default ScareCrow;
