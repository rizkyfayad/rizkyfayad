import React from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import ScrollVelocityPage from "./components/sections/ScrollVelocityPage";

function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <ThemeProvider>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`transition-all duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-background text-foreground`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <ScrollVelocityPage />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
