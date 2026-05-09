import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Film from "./components/Film";
import Stats from "./components/Stats";
import Rankings from "./components/Rankings";
import Academic from "./components/Academic";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Film />
        <Stats />
        <Rankings />
        <Academic />
        <About />
        <Contact />
      </main>
      <footer className="bg-charcoal-mid border-t border-charcoal-light py-8 px-6 text-center">
        <p className="text-muted text-xs uppercase tracking-widest">
          Noah Abela · Kicker · Punter · Class of 2026
        </p>
      </footer>
    </>
  );
}
