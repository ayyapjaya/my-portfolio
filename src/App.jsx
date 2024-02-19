import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Service from "./components/Service.jsx";
import Skill from "./components/Skill.jsx";
import Footer from "./components/Footer.jsx";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Service />
      <Footer />
    </div>
  );
};

export default App;
