import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Target, Users, BarChart3 } from "lucide-react";
import mapaMental from "@/assets/mapa_mental.png";

const About = () => {
  const objectives = [
    {
      icon: <Target className="w-8 h-8 text-nature" />,
      title: "Objetivo Principal",
      description: "Demonstrar a potencialidade das Universidades Federais Paraenses, como Promotoras de Desenvolvimento Local da Agricultura Familiar por meio das Compras Institucionais do Programa de Aquisição de Alimentos."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-earth" />,
      title: "Metodologia",
      description: "Pesquisa quantitativa e qualitativa com análise de dados de compras governamentais, entre 2017-2024, e entrevistas aplicadas."
    },
    {
      icon: <Users className="w-8 h-8 text-nature" />,
      title: "Participantes",
      description: "14 Grupos de Agricultores Familiares (formais e informais), 8 Gestores (diretores dos restaurantes universitários e nutricionistas) das 4 Universidades Federais Paraenses."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-earth" />,
      title: "Contribuição",
      description: "Propor diretrizes para fortalecer a relação entre Universidades Federais e Agricultura Familiar no contexto amazônico."
    }
  ];

  return (
    <section id="about" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-nature to-earth bg-clip-text text-transparent">
            Sobre a Pesquisa de Doutorado
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A pesquisa de doutorado investigou o papel das Universidades Federais
            no Mercado Institucional de Alimentos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Contexto da Pesquisa
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              O potencial das universidades federais paraenses como agentes de
              desenvolvimento local, por meio das compras institucionais de alimentos,
              é realizado de forma incipiente e irregular. A efetividade desta política
              pública é criticamente condicionada pelo modelo de gestão adotado pelos
              restaurantes universitários e limitada pela ausência de um planejamento
              institucionalizado que garanta constância e previsibilidade à demanda,
              elementos essenciais para a sustentabilidade da agricultura familiar.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Conheça a Tese completa: <br />
              Após defesa e aprovação, o trabalho de Tese estará disponível no link abaixo: <br />
              <a
                href="https://repositorio.ufpa.br/jspui/handle/2011/16064"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                https://repositorio.ufpa.br/jspui/handle/2011/16064
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {objectives.map((obj, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
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
        </div>

        {/* Pesquisador */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Sobre o Pesquisador
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Trabalho desenvolvido como Produto apresentado ao Programa de Pós-Graduação em Gestão de
                Recursos Naturais e Desenvolvimento Local na Amazônia, do Núcleo de Meio Ambiente da Universidade
                Federal do Pará, como requisito parcial para obtenção do título de Doutor em Gestão de Recursos
                Naturais e Desenvolvimento Local.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-nature mb-2">Área de Pesquisa</h4>
                  <p className="text-muted-foreground">GESTÃO DOS RECURSOS NATURAIS E DESENVOLVIMENTO LOCAL</p>
                </div>
                <div>
                  <h4 className="font-semibold text-earth mb-2">Linha de Pesquisa</h4>
                  <p className="text-muted-foreground">Agricultura Familiar. Mercado Institucional. Universidades Federais. Avaliação de
                    Políticas Públicas.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-nature mb-2">Período</h4>
                  <p className="text-muted-foreground">2017 - 2024</p>
                </div>
                <div>
                  <h4 className="font-semibold text-earth mb-2">Instituição</h4>
                  <p className="text-muted-foreground">Universidade Federais Paraenses</p>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="bg-gradient-to-br from-nature/20 to-earth/20 p-6 rounded-xl">
                <h4 className="font-semibold text-lg mb-3 text-foreground">
                  Interesse em Colaborar?
                </h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  Esta pesquisa está aberta a colaborações com universidades,
                  cooperativas e organizações interessadas no desenvolvimento
                  da agricultura familiar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;