import React from "react";
import Section from "./Section";

const Home = () => {
  return (
    <div>
      <Section
        title="Model S"
        description="Order online for touchless delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order online for touchless delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order online for touchless delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order online for touchless delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        displayArrow="none"
      />
    </div>
  );
};

export default Home;
