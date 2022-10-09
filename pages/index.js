import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import Hero from "../components/sections/Hero";
import Profile from "../components/sections/Profile";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
