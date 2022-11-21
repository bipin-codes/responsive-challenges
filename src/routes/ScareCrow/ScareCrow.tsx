import React from "react";
import { useNavigate } from "react-router-dom";

import {
  ActionToHome,
  Body,
  Description,
  DetailsContainer,
  Header,
  Image,
  MainHeader,
  StyledContainer,
} from "./styles";

const ScareCrow: React.FC = () => {
  const navigate = useNavigate();
  const backToHome = () => navigate("/");
  return (
    <StyledContainer>
      <Header>404 NOT FOUND</Header>
      <Body>
        <Image src={require("assets/scarecrow/scare.png")} />
        <DetailsContainer>
          <MainHeader>I have bad news for you</MainHeader>
          <Description>
            The page you are looking for might be removed or is temporarily
            unavailable
          </Description>
          <ActionToHome type="button" onClick={backToHome}>
            BACK TO HOME PAGE
          </ActionToHome>
        </DetailsContainer>
      </Body>
    </StyledContainer>
  );
};
export default ScareCrow;
