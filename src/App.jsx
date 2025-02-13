import Hero from "./view/Hero";
import About from "./view/About";
import Tokenomics from "./view/Tokenomics";
import Contact from "./view/Contact";
import HowToBuy from "./view/HowToBuy";

const App = () => {
  return (
    <>
      <main className="w-full overflow-hidden bg-[#070707]">
        <Hero />
        <About />
        <Tokenomics />
        <HowToBuy />
        <Contact />
        <video
          className="fixed top-0 left-0 w-full h-full object-cover opacity-20 "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/img/bg-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </main>
    </>
  );
};

export default App;
