const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-nature-light to-earth-light bg-clip-text text-transparent">
              Agricultura Familiar & Universidades
            </h3>
            <p className="text-muted opacity-80 leading-relaxed">
              Pesquisa dedicada ao fortalecimento das relações entre universidades federais 
              e agricultura familiar no estado do Pará.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" })}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector("#results")?.scrollIntoView({ behavior: "smooth" })}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Resultados
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector("#awareness")?.scrollIntoView({ behavior: "smooth" })}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Conscientização
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Sobre a Pesquisa
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>pesquisa.agriculturafamiliar@gmail.com</li>
              <li>Belém, Pará, Brasil</li>
              <li>Universidade Federal do Pará</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-60">
            © 2024 Pesquisa de Doutorado - Agricultura Familiar e Universidades do Pará. 
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;