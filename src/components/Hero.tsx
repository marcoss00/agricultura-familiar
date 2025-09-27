import { Button } from "@/components/ui/button";
import heroImage from "@/assets/agricultura-familiar-hero.jpg";

const Hero = () => {
  const scrollToResults = () => {
    const element = document.querySelector("#results");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Agricultura familiar - produtos frescos e sustentáveis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center lg:text-left">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Fortalecendo</span>
            <span className="block bg-gradient-to-r from-nature to-earth bg-clip-text text-transparent">
              Agricultura Familiar
            </span>
            <span className="block text-foreground text-3xl md:text-4xl lg:text-5xl mt-2">
              nas Universidades do Pará
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Descobrindo como as universidades federais paraenses podem transformar 
            vidas através da compra direta de produtos da agricultura familiar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              onClick={scrollToResults}
              size="lg"
              className="bg-gradient-to-r from-nature to-earth hover:from-nature-light hover:to-earth-light text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Conhecer os Resultados
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-nature text-nature hover:bg-nature hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Sobre a Pesquisa
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-nature mb-2">+50</div>
              <div className="text-muted-foreground">Agricultores Familiares</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-earth mb-2">3</div>
              <div className="text-muted-foreground">Universidades Federais</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-nature mb-2">R$ 2M+</div>
              <div className="text-muted-foreground">Em Compras Analisadas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-nature rounded-full flex justify-center">
          <div className="w-1 h-3 bg-nature rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;