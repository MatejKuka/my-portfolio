import React from 'react';
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Separator from "./components/UI/Separator";
import AboutMeSection from "./components/AboutMeSection";
import SkillsSection from "./components/SkillsSection";
import ContactMeSection from "./components/ContactMeSection";

function App() {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
      <Separator classProp={"md:my-10"}/>
      <AboutMeSection/>
      <Separator classProp={"md:my-20"}/>
      <SkillsSection/>
      <Separator classProp={"md:my-20"}/>
      <ContactMeSection/>
    </div>
  );
}

export default App;
