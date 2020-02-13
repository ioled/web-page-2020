import React from "react";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import SectionNavbar from "./Components/Sections/SectionNavbars";
import SectionCarousel from "./Components/Sections/SectionCarousel";

export default function App() {
  return (
    <div>
      <SectionNavbar />
      <SectionCarousel />
    </div>
  );
}
