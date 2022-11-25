import React from "react";
import { LeftContainer, RightContainer, StyledContainer } from "./styles";
const Content: React.FC = () => (
  <StyledContainer>
    <LeftContainer>
      <h4>Modern Interior</h4>
      <p>
        A full-Service residential & commercial interior design and staging
        company offering professional organizing & eco-services.
      </p>

      <span>{"Read more ->"}</span>
    </LeftContainer>
    <RightContainer>
      <img src="images/interior/photo1.png" alt="interior_image" />
      <div>
        <div>
          <img src="images/interior/photo2.png" alt="user" />
          <div>
            <p>Aliza Webber</p>
            <p>Interior Designer</p>
          </div>
        </div>
        <p>Designed in 2020 by Aliza Webber</p>
      </div>
    </RightContainer>
  </StyledContainer>
);

export default Content;
