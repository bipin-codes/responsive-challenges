import Profile from "components/LastChallenge/Profile";
import React, { PropsWithChildren, useState } from "react";
import { Button } from "./styles";

const Portfolio: React.FC<PropsWithChildren> = ({ children }) => {
  const [component] = useState("personCard");

  const renderComponent = () => {
    switch (component) {
      case "personCard":
        return <Profile />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Button type="button">Profile Card</Button>
      {renderComponent()}
    </div>
  );
};
export default Portfolio;
