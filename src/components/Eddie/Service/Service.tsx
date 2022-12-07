import React from "react";
import { ServiceCard, ServiceCardIconContainer } from "./styles";
import { StyledSpan } from "routes/EdieHomePage/styles";
import { ServiceCardTitle } from "./styles";

import { ServiceType } from "./types";

const Service: React.FC<{ service: ServiceType }> = ({ service }) => {
  return (
    <ServiceCard>
      <ServiceCardIconContainer color={service.bg}>
        <StyledSpan>{service.icon}</StyledSpan>
      </ServiceCardIconContainer>
      <ServiceCardTitle>{service.title}</ServiceCardTitle>
      <p>{service.content}</p>
      <button>Get started</button>
    </ServiceCard>
  );
};
export default Service;
