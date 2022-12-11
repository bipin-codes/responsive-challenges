import Profile from "components/LastChallenge/Profile";
import RecipeBlog from "components/LastChallenge/RecipeBlog";
import Technologies from "components/LastChallenge/Technologies/Technologies";
import React, { PropsWithChildren, useState } from "react";
import { Button } from "./styles";

const Portfolio: React.FC<PropsWithChildren> = ({ children }) => {
  const [component, setComponent] = useState("personCard");

  const renderComponent = () => {
    switch (component) {
      case "personCard":
        return <Profile />;
      case "blogCard":
        return <RecipeBlog />;
      case "technologies":
        return <Technologies />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        background: "#f2f2f2",
      }}
    >
      <Button
        type="button"
        onClick={() => {
          setComponent("personCard");
        }}
      >
        Profile Card
      </Button>
      <Button
        type="button"
        onClick={() => {
          setComponent("blogCard");
        }}
      >
        Recipe Card
      </Button>

      <Button
        type="button"
        onClick={() => {
          setComponent("technologies");
        }}
      >
        Technologies
      </Button>
      {renderComponent()}
    </div>
  );
};
export default Portfolio;
