import React from "react";

// core components
import SectionNavbar from "./Components/Sections/SectionNavbars";
import SectionCarousel from "./Components/Sections/SectionCarousel";
import SectionVideo from "./Components/Sections/SectionVideo";

export default function App() {
  return (
    <React.Fragment>
      <SectionNavbar />
      <SectionCarousel />
      <SectionVideo />
    </React.Fragment>
  );
}
