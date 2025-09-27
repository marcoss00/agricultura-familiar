import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Target, Users, BarChart3 } from "lucide-react";

const About = () => {
  const objectives = [
    {
      icon: <Target className="w-8 h-8 text-nature" />,
      title: "Objetivo Principal",
      description: "Analisar o panorama das compras de produtos da agricultura familiar pelas universidades federais do estado do Pará."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-earth" />,
      title: "Metodologia",
      description: "Pesquisa quantitativa e qualitativa com análise de dados de compras, entrevistas e questionários aplicados entre 2019-2023."
    },
    {
      icon: <Users className="w-8 h-8 text-nature" />,
      title: "Participantes",
      description: "55 agricultores familiares, gestores de 3 universidades federais e representantes de cooperativas agrícolas."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-earth" />,
      title: "Contribuição",
      description: "Propor diretrizes para fortalecer a relação entre universidades e agricultura familiar no contexto amazônico."
    }
  ];

  return (
    <section id="about" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-nature to-earth bg-clip-text text-transparent">
            Sobre a Pesquisa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esta pesquisa de doutorado investiga como as universidades federais do Pará 
            podem potencializar seu papel no desenvolvimento da agricultura familiar regional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Contexto da Pesquisa
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              O Programa Nacional de Alimentação Escolar (PNAE) estabelece que pelo menos 30% 
              dos recursos destinados à alimentação escolar devem ser utilizados na compra de 
              produtos da agricultura familiar. Esta pesquisa analisa como essa política pode 
              ser adaptada e implementada no contexto das universidades federais.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O estado do Pará, com sua rica diversidade agrícola e forte tradição na agricultura 
              familiar, representa um cenário ideal para investigar os desafios e oportunidades 
              dessa relação entre instituições de ensino superior e pequenos produtores rurais.
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
                Esta pesquisa é desenvolvida como parte do programa de doutorado em Desenvolvimento 
                Rural Sustentável, com foco em políticas públicas de alimentação e desenvolvimento 
                territorial. O trabalho busca contribuir para o fortalecimento das relações entre 
                universidades e agricultura familiar na região amazônica.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-nature mb-2">Área de Pesquisa</h4>
                  <p className="text-muted-foreground">Desenvolvimento Rural Sustentável</p>
                </div>
                <div>
                  <h4 className="font-semibold text-earth mb-2">Linha de Pesquisa</h4>
                  <p className="text-muted-foreground">Políticas Públicas e Agricultura Familiar</p>
                </div>
                <div>
                  <h4 className="font-semibold text-nature mb-2">Período</h4>
                  <p className="text-muted-foreground">2019 - 2024</p>
                </div>
                <div>
                  <h4 className="font-semibold text-earth mb-2">Instituição</h4>
                  <p className="text-muted-foreground">Universidade Federal do Pará</p>
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