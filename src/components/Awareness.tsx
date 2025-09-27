import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, TrendingUp, Heart, Recycle, Award } from "lucide-react";

const Awareness = () => {
  const benefits = [
    {
      icon: <Users className="w-12 h-12 text-nature mb-4" />,
      title: "Impacto Social",
      description: "Fortalece comunidades rurais, gera emprego e renda para famílias agricultoras, promovendo inclusão social e reduzindo desigualdades."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-earth mb-4" />,
      title: "Desenvolvimento Econômico",
      description: "Movimenta a economia local, cria cadeias curtas de comercialização e aumenta a competitividade dos pequenos produtores."
    },
    {
      icon: <Leaf className="w-12 h-12 text-nature mb-4" />,
      title: "Sustentabilidade Ambiental",
      description: "Promove práticas agrícolas sustentáveis, reduz pegada de carbono no transporte e preserva a biodiversidade local."
    },
    {
      icon: <Heart className="w-12 h-12 text-earth mb-4" />,
      title: "Segurança Alimentar",
      description: "Garante acesso a alimentos frescos, nutritivos e culturalmente apropriados para a comunidade universitária."
    },
    {
      icon: <Recycle className="w-12 h-12 text-nature mb-4" />,
      title: "Economia Circular",
      description: "Cria ciclos virtuosos de produção e consumo, reduzindo desperdícios e valorizando recursos locais."
    },
    {
      icon: <Award className="w-12 h-12 text-earth mb-4" />,
      title: "Qualidade Educacional",
      description: "Oferece oportunidades de pesquisa, extensão e vivência prática para estudantes e comunidade acadêmica."
    }
  ];

  return (
    <section id="awareness" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-nature to-earth bg-clip-text text-transparent">
            Por Que Isso Importa?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            A compra de produtos da agricultura familiar pelas universidades vai muito além da alimentação. 
            É um investimento transformador que gera benefícios sociais, econômicos e ambientais para toda a sociedade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
            Vamos Fortalecer Essa Parceria
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Universidades, gestores públicos e agricultores familiares: juntos podemos criar 
            um futuro mais sustentável, justo e próspero para o Pará e para o Brasil.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-nature">Para Universidades</h4>
              <p className="text-muted-foreground">
                Ampliem seus programas de compra institucional, criem parcerias diretas 
                com agricultores e invistam em projetos de extensão rural.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-earth">Para Agricultores</h4>
              <p className="text-muted-foreground">
                Organizem-se em cooperativas, invistam em qualificação e busquem 
                certificações que facilitem o acesso ao mercado institucional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awareness;