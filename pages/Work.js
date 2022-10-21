import React from "react";
import Hero from "./componants/Hero";
import Portfolio from "./componants/Portfolio";

export default function Work() {
  return (
    <div>
      <Hero
        heading="My Work"
        message="This is some of my recent work traveling the world."
      />
      <Portfolio />
    </div>
  );
}
