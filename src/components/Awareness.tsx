import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, TrendingUp, Heart, Recycle, Award } from "lucide-react";

const Awareness = () => {
  const benefits = [
    {
      icon: <Users className="w-12 h-12 text-nature mb-4" />,
      title: "Desenvolvimento Local",
      description: "Fortalece a agricultura familiar, gera emprego e renda para as famílias, promovendo inclusão social e reduzindo desigualdades."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-earth mb-4" />,
      title: "Economia Circular",
      description: "Movimenta a economia local, cria circuitos curtos de comercialização e aumenta a produtividade dos pequenos produtores."
    },
    {
      icon: <Leaf className="w-12 h-12 text-nature mb-4" />,
      title: "Sustentabilidade Ambiental",
      description: "Promove práticas agroecológicas, sistemas agroflorestais e preserva a biodiversidade local."
    },
    {
      icon: <Heart className="w-12 h-12 text-earth mb-4" />,
      title: "Segurança Alimentar e Nutricional",
      description: "Garante acesso a alimentos frescos, nutritivos e culturalmente apropriados para o órgão comprador."
    },

  ];

  return (
    <section id="awareness" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-nature to-earth bg-clip-text text-transparent">
            Por Que Isso Importa?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            A compra de produtos da agricultura familiar pelas universidades federais
            vai muito além da alimentação. É um investimento transformador que gera
            benefícios sociais, econômicos e ambientais para toda a sociedade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-nature/10 to-earth/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Vamos Fortalecer Essa Parceria?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Os produtos técnicos, resultados da Tese, direcionam à ferramentas que podem ajudar as
            Universidade Federais e Agricultores Familiares: juntos podemos criar um futuro mais
            saudável, justo e prospero à agricultura familiar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            <a
              href="https://drive.google.com/file/d/12Kq7j8IOWHpjcom0zR10yG-P39shWFPO"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 block"
            >
              <h4 className="text-xl font-semibold mb-3 text-nature">Para Universidades Federais</h4>
              <p className="text-muted-foreground">
                Conheça a Nota Técnica e Minuta de Resolução Normativa para sua Instituição como
                ferramentas de implementação efetiva da política.
              </p>
            </a>

            <a
              href="https://drive.google.com/file/d/1llXBrUnJhDGVYfyjciHyH6Vvfm_aU2ZP"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 block"
            >
              <h4 className="text-xl font-semibold mb-3 text-earth">Para Agricultores Familiares</h4>
              <p className="text-muted-foreground">
                Conheça o Guia Explicativo e de Orientação para os grupos de agricultores como forma de
                acesso à informação e participação ativa do mercado institucional de alimentos.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awareness;