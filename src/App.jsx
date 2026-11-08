import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Education from "./sections/Education/Education";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div
      id="top"
      className="relative isolate min-h-screen bg-background text-foreground"
    >

      {/* Background Decorative Effects */}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >

        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[130px]" />

        <div className="absolute -right-40 top-[35%] h-[450px] w-[450px] rounded-full bg-teal-400/5 blur-[130px]" />

      </div>


      {/* Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App;