import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Target, Users, BarChart3 } from "lucide-react";
import mapaMental from "@/assets/mapa_mental.png";
import {
  BarChart,
  Cell,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  CartesianGrid,
  Legend
} from "recharts";
import React from "react";

export const TabelaModelosGestao: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-10 overflow-x-auto">
      <h4 className="text-center text-lg font-semibold mb-6 text-foreground">
        Modelos de Gestão dos Restaurantes Universitários das Universidades Federais Paraenses
      </h4>

      <table className="min-w-full border border-gray-300 text-sm text-left">
        <thead>
          <tr className="bg-blue-100 text-foreground">
            <th className="border border-gray-300 px-4 py-3 font-semibold text-center align-middle w-1/5">
              Universidades Federais Paraenses
            </th>
            <th className="border border-gray-300 px-4 py-3 font-semibold text-center align-middle w-1/4">
              Modelo de Gestão Adotado
            </th>
            <th className="border border-gray-300 px-4 py-3 font-semibold text-center align-middle w-2/4">
              Justificativa para Adoção do Modelo
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-3 text-center font-semibold">UFPA</td>
            <td className="border border-gray-300 px-4 py-3 text-center">
              Misto (Gestão própria com terceirização parcial de mão de obra)
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Combina com a terceirização de serviços operacionais, com o controle estratégico da
              universidade sobre o planejamento e a fiscalização.
            </td>
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-3 text-center font-semibold">UFRA</td>
            <td className="border border-gray-300 px-4 py-3 text-center">
              Terceirizado (Concessão), a partir de 2021.
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Possibilita ampliar o atendimento, diversificar o cardápio e reduzir os custos com pessoal,
              manutenção e administração.
            </td>
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-3 text-center font-semibold">UFOPA</td>
            <td className="border border-gray-300 px-4 py-3 text-center">
              Terceirizado (Concessão)
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Otimiza os recursos públicos ao transferir os riscos operacionais e financeiros para empresa
              especializada, garantindo maior agilidade, flexibilidade e expertise na gestão.
            </td>
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-3 text-center font-semibold">UNIFESSPA</td>
            <td className="border border-gray-300 px-4 py-3 text-center">
              Terceirizado (Concessão)
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Relação custo-benefício, em virtude dos custos operacionais e pelo limitado número de
              servidores no RU.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


const dataEntraves = [
  { name: "LOGÍSTICA E CUSTOS", nivel: "Média", cor: "#FFD700", valor: 2 },
  { name: "BUROCRACIA DOS EDITAIS", nivel: "Média", cor: "#FFD700", valor: 2 },
  { name: "DIVULGAÇÃO INSUFICIENTE", nivel: "Média", cor: "#FFD700", valor: 2 },
  { name: "CONCORRÊNCIA COM 'FAKES'/INFORMAIS", nivel: "Alta", cor: "#FF4C4C", valor: 3 },
  { name: "IRREGULARIDADE E SAZONALIDADE", nivel: "Alta", cor: "#FF4C4C", valor: 3 },
];

const dataFrequencia = [
  { categoria: "Preços praticados", valor: 9 },
  { categoria: "Burocracia/ editais/ regras", valor: 9 },
  { categoria: "Renda/retorno financeiro", valor: 8 },
  { categoria: "Produtos/ portfólio", valor: 5 },
  { categoria: "Quantidade/ demanda", valor: 3 },
  { categoria: "Capacidade/ apoio institucional", valor: 2 },
  { categoria: "Concorrência desleal/ irregulares", valor: 8 },
  { categoria: "Logística/ transporte", valor: 4 },
  { categoria: "Gênero/ autonomia feminina", valor: 3 },
  { categoria: "Planejamento/ regularidade", valor: 4 },
  { categoria: "Sazonalidade", valor: 1 },
];

const GraficoEntraves = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
      <h4 className="text-center text-lg font-semibold mb-6 text-foreground">
        Entraves por nível de importância na execução do PAA-CI
      </h4>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={dataEntraves}
            layout="vertical"
            margin={{ top: 10, right: 50, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
            <XAxis type="number" hide />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fontSize: 13, fill: "#333" }}
              width={260}
            />
            <Tooltip
              formatter={(value: number, name: string, props: any) => [
                props.payload.nivel,
                "Nível de importância",
              ]}
            />
            <Bar dataKey="valor" radius={[0, 6, 6, 0]} barSize={28}>
              <LabelList
                dataKey="nivel"
                position="right"
                style={{ fill: "#000", fontWeight: "bold" }}
              />
              {dataEntraves.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.cor} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const GraficoRefeicoesDiarias: React.FC = () => {
  const data = [
    { universidade: "UFPA", refeicoes: 6000, cor: "#FFA54C" },
    { universidade: "UFRA", refeicoes: 1000, cor: "#3CB8B8" },
    { universidade: "UFOPA", refeicoes: 865, cor: "#9370DB" },
    { universidade: "UNIFESSPA*", refeicoes: 412, cor: "#A0522D" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
      <h4 className="text-center text-lg font-semibold mb-4 text-foreground">
        Quantidade média de fornecimento de refeições diárias nas Universidades Federais Paraenses analisadas
      </h4>

      <div className="w-full h-80">
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 30, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="universidade" /> {/* label={{ value: "Refeições Diárias", position: "bottom", offset: 10 }} */}
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="refeicoes" name="Refeições Diárias">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.cor} />
              ))}
              <LabelList dataKey="refeicoes" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="text-sm text-right mt-2 italic text-foreground">
        * Fornece somente almoço.
      </p>
    </div>
  );
};

export const GraficoFrequencia: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
      <h4 className="text-center text-lg font-semibold mb-6 text-foreground">
        Frequência de menções por categoria (todas as organizações)
      </h4>

      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={dataFrequencia}
            margin={{ top: 10, right: 30, left: 10, bottom: 80 }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis
              dataKey="categoria"
              angle={-45}
              textAnchor="end"
              interval={0}
              height={80}
              tick={{ fontSize: 12, fill: "#222" }}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#222" }}
              domain={[0, 10]}
              label={{
                value: "",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
            <Legend verticalAlign="bottom" height={36} />
            <Bar
              dataKey="valor"
              name="Categorias"
              fill="#FFB300"
              barSize={35}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

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
            <GraficoEntraves />
            <GraficoFrequencia />
            <TabelaModelosGestao />
            <GraficoRefeicoesDiarias />
            <h3 className="text-3xl font-bold mb-6 text-foreground bg-gradient-to-r from-nature to-earth bg-clip-text text-transparent">
              Sobre a perspectiva das Universidades Federais.
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Analisou-se- a influência dos modelos de gestão (misto e terceirizado) e do arcabouço normativo das
              compras institucionais (PAA-CI) na efetividade das aquisições da agricultura familiar pelas
              Universidades Federais Paraenses.
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