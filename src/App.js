import React from "react";
import Navbar from "./Componets/Navbar";
import About from "./Componets/About";
import Home from "./Componets/Home";
import Experience from "./Componets/Experience";
import Skill from "./Componets/Skill";
import Footer from './Componets/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Experience />
      <Skill />
      <About />

      <Footer />
    </div>
  );
}

export default App;
