import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Results from "@/components/Results";
import Awareness from "@/components/Awareness";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Results />
      <Awareness />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
