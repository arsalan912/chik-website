import React from "react";
import Hero from "./componants/Hero";
import ContactInn from "./componants/ContactInn";

export default function Contact() {
  return (
    <div>
      <Hero
        heading="Contact"
        message="Submit the form bellow for more work and quotes"
      />
      <ContactInn />
    </div>
  );
}
