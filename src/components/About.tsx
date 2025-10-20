import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Target, Users, BarChart3 } from "lucide-react";
import mapaMental from "@/assets/mapa_mental.png";

const About = () => {
  const objectives = [
    {
      icon: <Target className="w-8 h-8 text-nature" />,
      title: "Objetivo",
      description: "Demonstrar a potencialidade das Universidades Federais Paraenses, como Promotoras de Desenvolvimento Local da Agricultura Familiar por meio das Compras Institucionais do Programa de Aquisição de Alimentos."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-earth" />,
      title: "Metodologia",
      description: "Pesquisa quali-quantitativa com análise de dados governamentais, entre 2017-2024, e entrevistas aplicadas."
    },
    {
      icon: <Users className="w-8 h-8 text-nature" />,
      title: "Participantes",
      description: "19 Grupos de Agricultores Familiares (formais e informais), 8 Gestores (restaurantes universitários e nutricionistas) das 4 Universidades Federais Paraenses."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-earth" />,
      title: "Contribuição",
      description: "Propor diretrizes para fortalecer a relação entre Universidades Federais e Agricultura Familiar no Mercado institucional de Alimentos."
    }
  ];

  return (
    <section id="about" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-nature to-earth bg-clip-text text-transparent">
            Sobre a Pesquisa de Doutorado
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            A pesquisa investigou o papel das Universidades Federais no Mercado Institucional de Alimentos.
            O potencial das universidades federais paraenses como agentes de desenvolvimento local, por meio das
            compras institucionais, é realizado de forma incipiente e irregular. A efetividade desta política pública é
            condicionada pelo modelo de gestão dos restaurantes universitários e pela ausência de um
            planejamento que garanta constância e previsibilidade à demanda, elementos para a sustentabilidade
            da agricultura familiar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center mb-16">
          <div>
            {/*
            <h3 className="text-3xl font-bold mb-6 text-foreground bg-gradient-to-r from-nature to-earth bg-clip-text text-transparent">

            </h3>
            */}
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              O potencial das universidades federais paraenses como agentes de
              desenvolvimento local, por meio das compras institucionais de alimentos,
              é realizado de forma incipiente e irregular. A efetividade desta política
              pública é criticamente condicionada pelo modelo de gestão adotado pelos
              restaurantes universitários e limitada pela ausência de um planejamento
              institucionalizado que garanta constância e previsibilidade à demanda,
              elementos essenciais para a sustentabilidade da agricultura familiar.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-9">
              {objectives.map((obj, index) => (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      {obj.icon}
                      <h4 className="font-semibold ml-3 text-foreground">{obj.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {obj.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <h3 className="text-3xl font-bold mb-6 text-foreground bg-gradient-to-r from-nature to-earth bg-clip-text text-transparent">
              Sobre a perspectiva dos Agricultores Familiares.
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Avaliou-se o impacto da demanda das universidades federais na organização social, planejamento
              produtivo e renda dos agricultores familiares, identificando os principais entraves operacionais
              (logística, burocracia) sob a ótica dos atores envolvidos.
            </p>
            <h3 className="text-3xl font-bold mb-6 text-foreground bg-gradient-to-r from-nature to-earth bg-clip-text text-transparent">
              Quer entender melhor, conheça a Tese
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Após a defesa e a homologação, o trabalho estará disponível{" "}
              <a
                href="https://repositorio.ufpa.br/jspui/handle/2011/16064"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                aqui.
              </a>
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Veja também o{" "}
              <a
                href={mapaMental}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Mapa Mental da Pesquisa
              </a>.
            </p>
          </div>
        </div>

        {/* Pesquisador */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Sobre o Produto
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="lg:col-span-2">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Website desenvolvido como Produto Tecnológico da Tese “o papel das Universidades Federais no
                Mercado Institucional de Alimentos”, apresentado ao Programa de Pós-Graduação em Gestão de
                Recursos Naturais e Desenvolvimento Local na Amazônia, do Núcleo de Meio Ambiente da Universidade
                Federal do Pará, como requisito parcial para obtenção do título de Doutor em Gestão de Recursos
                Naturais e Desenvolvimento Local.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-nature mb-2">Área de Pesquisa</h4>
                  <p className="text-muted-foreground">Gestão dos Recursos Naturais e Desenvolvimento Local.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-earth mb-2">Linha de Pesquisa</h4>
                  <p className="text-muted-foreground">Agricultura Familiar. Mercado Institucional. Universidades Federais. Avaliação de
                    Políticas Públicas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;