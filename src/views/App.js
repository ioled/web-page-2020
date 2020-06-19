import React from "react";

// core components
import SectionNavbar from "./Components/Sections/SectionNavbars";
import SectionHeader from "./Components/Sections/SectionHeader";
import SectionVideo from "./Components/Sections/SectionVideo";
import SectionWhatsIoled from "./Components/Sections/SectionWhatsIoled";
import SectionContact from "./Components/Sections/SectionContact";

import SectionInformationParameters from "./Components/Sections/SectionInformationParameters";
import SectionFooter from "./Components/Sections/SectionFooter";

export default function App() {
  return (
    <React.Fragment>
      <SectionNavbar />
      <SectionHeader />
      <SectionWhatsIoled />
      <SectionInformationParameters />
      <SectionContact />
      <SectionVideo />
      <SectionFooter />
    </React.Fragment>
  );
}
