import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular envio do formulário
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Obrigado pelo seu interesse. Entrarei em contato em breve.",
      });

      setFormData({
        name: "",
        email: "",
        institution: "",
        message: ""
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-nature to-earth bg-clip-text text-transparent">
            Contato
          </h2>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Vamos Dialogar
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Esta pesquisa é um convite para refletir. Se você é gestor, agricultor familiar, pesquisador ou simplesmente
                tem interesse no tema, sua contribuição é bem-vinda!
              </p>
            </div>

            <div className="space-y-6">
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Mail className="w-6 h-6 text-nature" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">edsonlouzadajr@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/*
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <MapPin className="w-6 h-6 text-earth" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Localização</h4>
                      <p className="text-muted-foreground">Belém, Pará, Brasil</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              */}
              {/*
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Phone className="w-6 h-6 text-nature" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Telefone</h4>
                      <p className="text-muted-foreground">+55 (91) 9xxxx-xxxx</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              */}
            </div>

            <div className="bg-gradient-to-r from-nature/10 to-earth/10 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-3 text-foreground">
                Oportunidades de Colaboração
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Parcerias para futuras pesquisas</li>
                <li>• Implementação de projetos piloto</li>
                <li>• Capacitação de agricultores familiares</li>
                <li>• Desenvolvimento de políticas públicas</li>
              </ul>
            </div>
          </div>

          {/* Formulário de Contato */}
          {/*
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-nature">Envie sua Mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entrarei em contato em breve
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="institution">Instituição/Organização</Label>
                  <Input
                    id="institution"
                    name="institution"
                    type="text"
                    value={formData.institution}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="Universidade, cooperativa, empresa..."
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 min-h-[120px]"
                    placeholder="Conte-me sobre seu interesse na pesquisa, dúvidas ou propostas de colaboração..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-nature to-earth hover:from-nature-light hover:to-earth-light text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isLoading ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          */}
        </div>
      </div>
    </section>
  );
};

export default Contact;