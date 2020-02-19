import React from "react";

// core components
import SectionNavbar from "./Components/Sections/SectionNavbars";
import SectionCarousel from "./Components/Sections/SectionCarousel";
import SectionVideo from "./Components/Sections/SectionVideo";
import SectionWhatsIoled from "./Components/Sections/SectionWhatsIoled";

import SectionInformationParameters from "./Components/Sections/SectionInformationParameters";
import SectionFooter from "./Components/Sections/SectionFooter";

export default function App() {
  return (
    <React.Fragment>
      <SectionNavbar />
      <SectionCarousel />
      <SectionVideo />
      <SectionWhatsIoled />
      <SectionInformationParameters />
      <SectionFooter />
    </React.Fragment>
  );
}
