import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"

interface TableProps {
  table: {
    title: string;
    description: string;
    data: Record<string, string>[];
    note?: string;
  };
}

export const TabelaCard: React.FC<TableProps> = ({ table }) => (
  <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
    <CardHeader>
      <CardTitle className="text-nature">{table.title}</CardTitle>
      <CardDescription>{table.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {Object.keys(table.data[0]).map((header, hIdx) => (
                <TableHead key={hIdx} className="capitalize">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {table.data.map((row, rIdx) => (
              <TableRow key={rIdx}>
                {Object.values(row).map((cell, cIdx) => (
                  <TableCell key={cIdx}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {table.note && (
        <p className="text-sm text-muted-foreground mt-4 italic text-center">{table.note}</p>
      )}
    </CardContent>
  </Card>
);

export const TabelaCard2: React.FC<TableProps> = ({ table }) => {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-nature">{table.title}</CardTitle>
        <CardDescription>{table.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                {Object.keys(table.data[0]).map((header, hIdx) => (
                  <TableHead key={hIdx} className="capitalize text-center">
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {table.data.map((row, rIdx) => {
                const keys = Object.keys(row);
                const isLastRow = rIdx === table.data.length - 1;

                if (isLastRow) {
                  // última coluna (texto explicativo) deve ficar na última coluna
                  const lastKey = keys[keys.length - 1];
                  const otherKeys = keys.slice(0, -1);

                  // procura um valor monetário entre as colunas à esquerda (ex.: "R$ 1.574.349,11")
                  const currencyKey = otherKeys.find((k) => {
                    const v = String(row[k] ?? "");
                    return /^\s*R\$\s*[\d.,]+/.test(v);
                  });

                  // se encontrou valor monetário, usa ele; senão concatena os valores das colunas exceto a última
                  const mergedValue = currencyKey
                    ? (row[currencyKey] as string)
                    : otherKeys.map((k) => row[k]).join(" ");

                  return (
                    <TableRow key={rIdx}>
                      {/* célula única que ocupa todas as colunas exceto a última */}
                      <TableCell
                        colSpan={otherKeys.length}
                        className="font-semibold text-center bg-gray-50 border"
                      >
                        {mergedValue}
                      </TableCell>

                      {/* mantém o texto explicativo na última coluna */}
                      <TableCell className="text-left border bg-white">
                        {row[lastKey]}
                      </TableCell>
                    </TableRow>
                  );
                }

                // linhas normais
                return (
                  <TableRow key={rIdx}>
                    {Object.values(row).map((cell, cIdx) => (
                      <TableCell key={cIdx}>{cell}</TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        {table.note && (
          <p className="text-sm text-muted-foreground mt-4 italic text-center">
            {table.note}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export const TabelaCard3: React.FC<TableProps> = ({ table }) => (
  <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
    <CardHeader>
      <CardTitle className="text-nature">{table.title}</CardTitle>
      <CardDescription>{table.description}</CardDescription>
    </CardHeader>

    <CardContent>
      <div className="overflow-x-auto">
        <Table className="border-2 border-gray-400 border-collapse">
          <TableHeader>
            <TableRow className="border-2 border-gray-400">
              {Object.keys(table.data[0]).map((header, hIdx) => (
                <TableHead
                  key={hIdx}
                  className="capitalize border-2 border-gray-400 text-center bg-gray-100"
                >
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {table.data.map((row, rIdx) => (
              <TableRow key={rIdx} className="border-2 border-gray-400">
                {Object.values(row).map((cell, cIdx) => (
                  <TableCell
                    key={cIdx}
                    className="border-2 border-gray-400 text-center"
                  >
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {table.note && (
        <p className="text-sm text-muted-foreground mt-4 italic text-center">
          {table.note}
        </p>
      )}
    </CardContent>
  </Card>
);

export const IndiceIPCAF = () => {
  return (
    <Card className="shadow-lg border-2 border-black">
      {/* Título acima da tabela */}
      <CardHeader className="pb-2 text-center">
        <CardTitle className="text-green-700 font-bold uppercase">
          ÍNDICE IPCAF
        </CardTitle>
        <CardDescription className="text-black font-medium">
          Índice de Potencialidade das Universidades Paraenses para Compras da Agricultura Familiar.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="border-collapse border-2 border-black w-full text-center font-semibold text-black">
            {/* cabeçalho dos nomes das UFs (a primeira célula do cabeçalho fica vazia pois a coluna esquerda é o bloco descritivo) */}
            <thead>
              <tr>
                <th className="w-1/3 border-2 border-black bg-white"></th>
                <th className="bg-yellow-300 border-2 border-black p-2">UFPA</th>
                <th className="bg-red-400 border-2 border-black p-2">UFRA</th>
                <th className="bg-red-600 border-2 border-black p-2 text-white">UFOPA</th>
                <th className="bg-red-800 border-2 border-black p-2 text-white">UNIFESSPA</th>
              </tr>
            </thead>

            <tbody>
              {/* primeira linha de conteúdo: percentuais */}
              <tr>
                {/* célula grande da esquerda que ocupa 3 linhas */}
                <td
                  rowSpan={3}
                  className="align-middle text-left border-2 border-black bg-gray-100 p-4"
                  style={{ verticalAlign: "middle" }}
                >
                  <div className="font-bold text-base">
                    Índice de Potencialidade das Universidades Paraenses para
                    Compras da Agricultura Familiar.
                  </div>
                </td>

                <td className="bg-yellow-300 border-2 border-black p-4">50,00%</td>
                <td className="bg-red-400 border-2 border-black p-4">12,50%</td>
                <td className="bg-red-600 border-2 border-black p-4 text-white">0,00%</td>
                <td className="bg-red-800 border-2 border-black p-4 text-white">0,00%</td>
              </tr>

              {/* segunda linha de conteúdo: classificação textual */}
              <tr>
                <td className="bg-yellow-300 border-2 border-black p-4">Moderado</td>
                <td className="bg-red-400 border-2 border-black p-4">Insuficiente</td>
                <td className="bg-red-600 border-2 border-black p-4 text-white">Inexistente</td>
                <td className="bg-red-800 border-2 border-black p-4 text-white">Inexistente</td>
              </tr>

              {/* terceira linha de conteúdo: símbolos/ícones de intensidade */}
              <tr>
                {/* você pode ajustar os símbolos para os que preferir (use ícones se quiser) */}
                <td className="bg-yellow-300 border-2 border-black p-4 text-2xl">▮▮▮</td>
                <td className="bg-red-400 border-2 border-black p-4 text-2xl">▮</td>
                <td className="bg-red-600 border-2 border-black p-4 text-2xl text-white">○○</td>
                <td className="bg-red-800 border-2 border-black p-4 text-2xl text-white">○○</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export const GraficoIPCAF = () => {
  const data = [
    { nome: "UFPA", percentual: 50, cor: "#00b050" }, // verde
    { nome: "UFRA", percentual: 12.5, cor: "#c00000" }, // vermelho
    { nome: "UFOPA", percentual: 0, cor: "#7030a0" }, // roxo
    { nome: "UNIFESSPA", percentual: 0, cor: "#e36c09" }, // laranja
  ];

  const classificacoes = [
    "Excelente",
    "Ótimo",
    "Moderado",
    "Baixo",
    "Insuficiente",
    "Inexistente",
  ];

  return (
    <Card className="shadow-lg border border-gray-300">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-green-700 font-bold uppercase">
          FIGURA 3 ILUSTRATIVA DO ÍNDICE IPCAF
        </CardTitle>
        <CardDescription className="text-black font-medium">
          Percentual do Índice de Potencialidade das Universidades Paraenses
          para Compras da Agricultura Familiar.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div
          className="relative p-4 rounded-lg"
          style={{
            background:
              "linear-gradient(to bottom, #fff5e6, #fbd1b7, #f6c085, #fbd1b7, #fff5e6)",
            border: "1px solid #ccc",
          }}
        >
          <ResponsiveContainer width="100%" height={380}>
            <BarChart
              data={data}
              margin={{ top: 30, right: 100, left: 30, bottom: 70 }}
            >
              <XAxis dataKey="nome" />
              <YAxis
                domain={[0, 100]}
                tickFormatter={(v) => `${v.toFixed(0)}%`}
              />
              <Tooltip formatter={(v: number) => `${v.toFixed(2)}%`} />
              <Bar dataKey="percentual" barSize={60}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.cor} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          {/* Classificações à direita */}
          <div className="absolute right-20 top-12 text-sm font-medium text-black leading-10">
            {classificacoes.map((label, idx) => (
              <div key={idx} className="flex items-center space-x-1">
                <span>=&gt;</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const Resultado = () => {
  const data = [
    { nome: "UFPA", percentual: 50, cor: "#00b050" }, // verde
    { nome: "UFRA", percentual: 12.5, cor: "#c00000" }, // vermelho
    { nome: "UFOPA", percentual: 0, cor: "#7030a0" }, // roxo
    { nome: "UNIFESSPA", percentual: 0, cor: "#e36c09" }, // laranja
  ];

  const classificacoes = [
    "Excelente",
    "Ótimo",
    "Moderado",
    "Baixo",
    "Insuficiente",
    "Inexistente",
  ];

  return (
    <Card className="shadow-lg border border-gray-300">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-green-700 font-bold uppercase">
          Resultado
        </CardTitle>
        <CardDescription className="text-black font-medium">
          
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div
          className="relative p-4 rounded-lg"
          style={{
            background:
              "linear-gradient(to bottom, #fff5e6, #fbd1b7, #f6c085, #fbd1b7, #fff5e6)",
            border: "1px solid #ccc",
          }}
        >
          <p>
            O índice, ao mesmo tempo em que mostra o potencial das universidades federais paraenses
            como agentes de desenvolvimento local (por meio das compras institucionais de alimentos),
            revela que sua realização é incipiente e irregular, demonstrando a necessidade de um maior
            envolvimento das Universidades Federais na promoção dessas políticas.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};




const Results = () => {
  // Dados simulados para demonstração
  const yearlyData = [
    { year: "2019", value: 150000, produtos: 1200 },
    { year: "2020", value: 280000, produtos: 2100 },
    { year: "2021", value: 420000, produtos: 3200 },
    { year: "2022", value: 680000, produtos: 4800 },
    { year: "2023", value: 950000, produtos: 6500 },
  ];

  const productData = [
    { name: "UFRA", value: 2.22, color: "hsl(0, 80%, 55%)" },      // vermelho médio
    { name: "UFPA", value: 97.78, color: "hsl(140, 50%, 50%)" },    // verde um pouco claro
  ];

  const universityData = [
    { nome: "UFPA", compras: 50, agricultores: 4 },
    { nome: "UFRA", compras: 12.5, agricultores: 1 },
    { nome: "UNIFESSPA", compras: 0, agricultores: 0 },
    { nome: "UFOPA", compras: 0, agricultores: 0 },
  ];

  const tableData = [
    { ano: "2017", ufpa: "R$111.861,90", ufra: "R$0,00", ufopa: "R$0,00", unifesspa: "R$0,00", classe: "Classe 1", mensuracao: "BAIXO" },
    { ano: "2018", ufpa: "R$0,00", ufra: "R$34.898,62", ufopa: "R$0,00", unifesspa: "R$0,00", classe: "Classe 1", mensuracao: "BAIXO" },
    { ano: "2019", ufpa: "R$0,00", ufra: "R$0,00", ufopa: "R$0,00", unifesspa: "R$0,00", classe: "Classe 0", mensuracao: "INEXISTENTE" },
    { ano: "2020", ufpa: "R$295.056,67", ufra: "R$0,00", ufopa: "R$0,00", unifesspa: "R$0,00", classe: "Classe 1", mensuracao: "BAIXO" },
    { ano: "2021", ufpa: "R$0,00", ufra: "R$0,00", ufopa: "R$0,00", unifesspa: "R$0,00", classe: "Classe 0", mensuracao: "INEXISTENTE" },
    { ano: "2022", ufpa: "R$400.314,92", ufra: "R$0,00", ufopa: "R$0,00", unifesspa: "R$0,00", classe: "Classe 1", mensuracao: "BAIXO" },
    { ano: "2023", ufpa: "R$0,00", ufra: "R$0,00", ufopa: "R$0,00", unifesspa: "R$0,00", classe: "Classe 0", mensuracao: "INEXISTENTE" },
    { ano: "2024", ufpa: "R$732.217,00", ufra: "R$0,00", ufopa: "R$0,00", unifesspa: "R$0,00", classe: "Classe 1", mensuracao: "BAIXO" },
  ];

  const comparativeData = [
    { ano: "2017", UFPA: 111861.90, UFRA: 0, UFOPA: 0, UNIFESSPA: 0 },
    { ano: "2018", UFPA: 0, UFRA: 34898.62, UFOPA: 0, UNIFESSPA: 0 },
    { ano: "2019", UFPA: 0, UFRA: 0, UFOPA: 0, UNIFESSPA: 0 },
    { ano: "2020", UFPA: 295056.67, UFRA: 0, UFOPA: 0, UNIFESSPA: 0 },
    { ano: "2021", UFPA: 0, UFRA: 0, UFOPA: 0, UNIFESSPA: 0 },
    { ano: "2022", UFPA: 400314.92, UFRA: 0, UFOPA: 0, UNIFESSPA: 0 },
    { ano: "2023", UFPA: 0, UFRA: 0, UFOPA: 0, UNIFESSPA: 0 },
    { ano: "2024", UFPA: 732217.00, UFRA: 0, UFOPA: 0, UNIFESSPA: 0 },
  ];

  // TABELA 1
  const tabelaValoresAnuais = {
    title: "TABELA 1",
    description: "Dados primarios levantados dos Valores anuais das Compras da AF nas UF Paraenses, entre 2017 a 2024.",
    data: [
      { ANO: "2017", UFPA: "R$ 111.861,90", UFRA: "R$ 0,00", UFOPA: "R$ 0,00", UNIFESSPA: "R$ 0,00", "Valor total anual de compras da AF pelas UF Paraenses": "R$ 111.861,90" },
      { ANO: "2018", UFPA: "R$ 0,00", UFRA: "R$ 34.898,62", UFOPA: "R$ 0,00", UNIFESSPA: "R$ 0,00", "Valor total anual de compras da AF pelas UF Paraenses": "R$ 34.898,62" },
      { ANO: "2019", UFPA: "R$ 0,00", UFRA: "R$ 0,00", UFOPA: "R$ 0,00", UNIFESSPA: "R$ 0,00", "Valor total anual de compras da AF pelas UF Paraenses": "R$ 0,00" },
      { ANO: "2020", UFPA: "R$ 295.056,67", UFRA: "R$ 0,00", UFOPA: "R$ 0,00", UNIFESSPA: "R$ 0,00", "Valor total anual de compras da AF pelas UF Paraenses": "R$ 295.056,67" },
      { ANO: "2021", UFPA: "R$ 0,00", UFRA: "R$ 0,00", UFOPA: "R$ 0,00", UNIFESSPA: "R$ 0,00", "Valor total anual de compras da AF pelas UF Paraenses": "R$ 0,00" },
      { ANO: "2022", UFPA: "R$ 400.314,92", UFRA: "R$ 0,00", UFOPA: "R$ 0,00", UNIFESSPA: "R$ 0,00", "Valor total anual de compras da AF pelas UF Paraenses": "R$ 400.314,92" },
      { ANO: "2023", UFPA: "R$ 0,00", UFRA: "R$ 0,00", UFOPA: "R$ 0,00", UNIFESSPA: "R$ 0,00", "Valor total anual de compras da AF pelas UF Paraenses": "R$ 0,00" },
      { ANO: "2024", UFPA: "R$ 732.217,00", UFRA: "R$ 0,00", UFOPA: "R$ 0,00", UNIFESSPA: "R$ 0,00", "Valor total anual de compras da AF pelas UF Paraenses": "R$ 732.217,00" },
      { ANO: "-", UFPA: "R$ 1.539.450,49", UFRA: "R$ 34.898,62", UFOPA: "R$ 0,00", UNIFESSPA: "R$ 0,00", "Valor total anual de compras da AF pelas UF Paraenses": "MONTANTE POR UF (no período analisado)" },
      { ANO: "-", UFPA: "04", UFRA: "01", UFOPA: "0", UNIFESSPA: "0", "Valor total anual de compras da AF pelas UF Paraenses": "QTDE DE COMPRAS POR UF (no período pesquisado)" },
      { ANO: "-", UFPA: "R$ 1.574.349,11", UFRA: "R$ 0,00", UFOPA: "R$ 0,00", UNIFESSPA: "R$ 0,00", "Valor total anual de compras da AF pelas UF Paraenses": "Montante gasto pelas UF Paraenses com compras da AF (2017~2024)" },
    ],
    //note: "Montante gasto pelas UF Paraenses com compras da AF (2017~2024): R$ 1.574.349,11",
  };

  // TABELA 2
  const tabelaAnalitica = {
    title: "TABELA 2",
    description:
      "Aplicação de Princípios de Estatística Básica sobre a Ocorrência de Compras da AF nas UF Paraenses entre 2017 a 2024.",
    data: [
      { "Estatística Básica Aplicada": "Montante dos investimentos das UF Paraenses no mercado institucional de alimentos com as compras da A.F. no período estudado.", UFPA: "R$ 1.539.450,49", UFRA: "R$ 34.898,62", UFOPA: "0,00", UNIFESSPA: "0,00" },
      { "Estatística Básica Aplicada": "Frequência Absoluta", UFPA: "R$ 1.539.450,49", UFRA: "R$ 34.898,62", UFOPA: "0,00", UNIFESSPA: "0,00" },
      { "Estatística Básica Aplicada": "Frequência Relativa", UFPA: "0,9778", UFRA: "0,0222", UFOPA: "0,00", UNIFESSPA: "0,00" },
      { "Estatística Básica Aplicada": "Frequência Relativa (%)", UFPA: "97,78%", UFRA: "2,22%", UFOPA: "0,00", UNIFESSPA: "0,00" },
      { "Estatística Básica Aplicada": "Média aritmética", UFPA: "R$ 192.431,31", UFRA: "R$ 4.362,33", UFOPA: "R$0,00", UNIFESSPA: "R$0,00" },
      { "Estatística Básica Aplicada": "Valor Máximo", UFPA: "R$ 732.217,00", UFRA: "R$ 34.898,62", UFOPA: "R$0,00", UNIFESSPA: "R$0,00" },
      { "Estatística Básica Aplicada": "Valor Mínimo", UFPA: "R$0,00", UFRA: "R$0,00", UFOPA: "R$0,00", UNIFESSPA: "R$0,00" },
      { "Estatística Básica Aplicada": "Amplitude", UFPA: "R$ 732.217,00", UFRA: "R$ 34.898,62", UFOPA: "R$0,00", UNIFESSPA: "R$0,00" },
    ],
    note: "",
  };

  // TABELA 3
  const indicador2 = {
    title: "INDICADOR II",
    description:
      "Indicador do Quantitativo da Ocorrência de Compras da AF nas UF Paraenses entre 2017 a 2024.",
    data: [
      { "Análise Realizada": "Quantidade das ocorrências de compras da Agricultura Familiar realizadas pelas Universidades Federais Paraenses, durante o período analisado.", UFPA: "03", UFRA: "01", UFOPA: "0", UNIFESSPA: "0" },
      { "Análise Realizada": "Percentual da Ocorrência Anual de compras da Agricultura Familiar nas Universidades Federais Paraenses, considerando o período analisado.", UFPA: "50%", UFRA: "12,50%", UFOPA: "0%", UNIFESSPA: "0%" },
    ],
    note: "",
  };

  // TABELA 4
  const indiceMatriz = {
    title: "INDICADOR II",
    description:
      "Classificação da Potencialidade Anual das quatro Universidades Federais Paraenses em relação às compras da Agricultura Familiar.",
    data: [
      { uf: "UFPA", percentual: "50%", categoria: "Terceira", classificacao: "Moderado" },
      { uf: "UFRA", percentual: "12,5%", categoria: "Quinta", classificacao: "Insuficiente" },
      { uf: "UFOPA", percentual: "0%", categoria: "Sexta", classificacao: "Inexistente" },
      { uf: "UNIFESSPA", percentual: "0%", categoria: "Sexta", classificacao: "Inexistente" },
    ],
  };




  return (
    <section id="results" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-nature to-earth bg-clip-text text-transparent">
            Os Resultados do IPCAF
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O Índice de Potencialidade das Compras da Agricultura Familiar (IPCAF) usou dados
            primários do Painel de Compras do Governo Federal do período de 2017 até 2024 e
            permitiu acompanhar a ocorrência de compras da Agricultura Familiar (AF) e seus
            valores por Universidades Federais (UF) Paraenses: a Universidade Federal do Pará
            (UFPA), a Universidade Federal do Oeste do Pará (UFOPA), a Universidade Federal do Sul
            e Sudeste do Pará (UNIFESSPA) e a Universidade Federal Rural da Amazônia (UFRA). O
            IPCAF foi construído a partir de indicadores, conforme passamos a expor:
          </p>
        </div>

        <div className="mb-12">
          <TabelaCard2 table={tabelaValoresAnuais} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* Tabela de Classes por Universidade */}
          <Card className="mt-12 shadow-lg">
            <CardHeader>
              <CardTitle className="text-nature">INDICADOR I</CardTitle>
              <CardDescription>
                Matriz para construção do Indicador de Ocorrência Anual de Compras da
                AF nas UF Paraenses entre 2017 a 2024.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="bg-white">Categoria</TableHead>
                      <TableHead className="bg-blue-100">
                        1º<br /><span className="text-xs text-muted-foreground">Categoria</span>
                      </TableHead>
                      <TableHead className="bg-green-100">
                        2º<br /><span className="text-xs text-muted-foreground">Categoria</span>
                      </TableHead>
                      <TableHead className="bg-yellow-100">
                        3º<br /><span className="text-xs text-muted-foreground">Categoria</span>
                      </TableHead>
                      <TableHead className="bg-orange-100">
                        4º<br /><span className="text-xs text-muted-foreground">Categoria</span>
                      </TableHead>
                      <TableHead className="bg-red-100">
                        5º<br /><span className="text-xs text-muted-foreground">Categoria</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableHeader>
                    <TableRow>
                      <TableHead className="bg-white">Classe</TableHead>
                      <TableHead className="bg-blue-100">
                        Classe 4<br /><span className="text-xs text-muted-foreground">Ideal</span>
                      </TableHead>
                      <TableHead className="bg-green-100">
                        Classe 3<br /><span className="text-xs text-muted-foreground">Alta</span>
                      </TableHead>
                      <TableHead className="bg-yellow-100">
                        Classe 2<br /><span className="text-xs text-muted-foreground">Média</span>
                      </TableHead>
                      <TableHead className="bg-orange-100">
                        Classe 1<br /><span className="text-xs text-muted-foreground">Baixa</span>
                      </TableHead>
                      <TableHead className="bg-red-100">
                        Classe 0<br /><span className="text-xs text-muted-foreground">Inexistente</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {[
                      { universidade: "UNIVERSIDADE A", c4: "Sim", c3: "Sim", c2: "Sim", c1: "Sim", c0: "Não" },
                      { universidade: "UNIVERSIDADE B", c4: "Sim", c3: "Sim", c2: "Sim", c1: "Não", c0: "Não" },
                      { universidade: "UNIVERSIDADE C", c4: "Sim", c3: "Sim", c2: "Não", c1: "Não", c0: "Não" },
                      { universidade: "UNIVERSIDADE D", c4: "Sim", c3: "Não", c2: "Não", c1: "Não", c0: "Não" },
                    ].map((row, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="bg-white font-medium">{row.universidade}</TableCell>
                        <TableCell className={`bg-blue-50 ${row.c4 === "Sim" ? "text-green-700 font-semibold" : "text-red-700 font-semibold"}`}>{row.c4}</TableCell>
                        <TableCell className={`bg-green-50 ${row.c3 === "Sim" ? "text-green-700 font-semibold" : "text-red-700 font-semibold"}`}>{row.c3}</TableCell>
                        <TableCell className={`bg-yellow-50 ${row.c2 === "Sim" ? "text-green-700 font-semibold" : "text-red-700 font-semibold"}`}>{row.c2}</TableCell>
                        <TableCell className={`bg-orange-50 ${row.c1 === "Sim" ? "text-green-700 font-semibold" : "text-red-700 font-semibold"}`}>{row.c1}</TableCell>
                        <TableCell className={`bg-red-50 ${row.c0 === "Sim" ? "text-green-700 font-semibold" : "text-red-700 font-semibold"}`}>{row.c0}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>

                </Table>
              </div>
            </CardContent>
          </Card>


          {/* Tabela detalhada */}
          <Card className="mt-12 shadow-lg">
            <CardHeader>
              <CardTitle className="text-earth">INDICADOR I</CardTitle>
              <CardDescription>
                Indicador da Mensuração Anual das Compras na expectativa da AF sobre
                as UF Paraenses entre 2017 a 2024.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ANO</TableHead>
                      <TableHead>UFPA</TableHead>
                      <TableHead>UFRA</TableHead>
                      <TableHead>UFOPA</TableHead>
                      <TableHead>UNIFESSPA</TableHead>
                      <TableHead>CLASSE DETECTADA</TableHead>
                      <TableHead>MENSURAÇÃO</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tableData.map((row, index) => {
                      // cor condicional
                      const colorClass =
                        row.mensuracao === "INEXISTENTE"
                          ? "text-red-600 font-semibold"
                          : row.mensuracao === "BAIXO"
                            ? "text-yellow-600 font-semibold"
                            : "text-muted-foreground"

                      return (
                        <TableRow key={index}>
                          <TableCell>{row.ano}</TableCell>
                          <TableCell>{row.ufpa}</TableCell>
                          <TableCell>{row.ufra}</TableCell>
                          <TableCell>{row.ufopa}</TableCell>
                          <TableCell>{row.unifesspa}</TableCell>
                          <TableCell>{row.classe}</TableCell>
                          <TableCell className={colorClass}>{row.mensuracao}</TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/*
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-nature">Evolução dos Valores de Compra</CardTitle>
              <CardDescription>Valores anuais em reais (R$)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={yearlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    formatter={(value) => [`R$ ${value.toLocaleString()}`, "Valor"]}
                    labelStyle={{ color: "hsl(var(--foreground))" }}
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))"
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(var(--nature))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--nature))", strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          */}
        </div>
        <div className="mb-12">
          {/* Gráfico de Barras Agrupadas - UFPA x UFRA x UFOPA x UNIFESSPA */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-nature">
                FIGURA 1 ILUSTRATIVA DO INDICADOR I:
              </CardTitle>
              <CardDescription>Mensuração e Valores anuais das Compras da AF nas UF Paraenses entre 2017 a 2024.</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={comparativeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="ano" stroke="hsl(var(--muted-foreground))" />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    tickFormatter={(value) => `R$${(value / 1000).toLocaleString()}k`}
                  />
                  <Tooltip
                    formatter={(value) => [`R$ ${value.toLocaleString()}`, "Valor"]}
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))"
                    }}
                  />
                  <Bar dataKey="UFPA" fill="#3b82f6" name="UFPA" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="UFRA" fill="#ef4444" name="UFRA" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="UFOPA" fill="#10b981" name="UFOPA" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="UNIFESSPA" fill="#a855f7" name="UNIFESSPA" radius={[4, 4, 0, 0]} />
                  <Legend
                    verticalAlign="bottom"
                    height={36}
                    wrapperStyle={{
                      paddingTop: "10px",
                      fontSize: "14px",
                      color: "hsl(var(--muted-foreground))"
                    }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <TabelaCard table={tabelaAnalitica} />
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-earth">FIGURA 2 RELATIVA A TABELA 2</CardTitle>
              <CardDescription>Indicador da Frequência Relativa Percentual por Instituição em relação ao
                Montante das Compras da AF das UF Paraenses entre 2017 a 2024.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={productData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {productData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [`${value}%`, "Porcentagem"]}
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))"
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        {/* Tabela de Indicadores de Potencialidade */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-nature">MATRIZ DO INDICADOR DE OCORRENCIA E DO ÍNDICE IPCAF</CardTitle>
            <CardDescription>Matriz do indicador ocorrencia e do índice de Classificação da Potencialidade das UF
              Paraenses sobre a compra de alimentos da AF.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="min-w-full text-sm text-center border-collapse">
                <thead>
                  <tr className="bg-muted text-foreground font-semibold">
                    <th className="border border-border px-4 py-2">Categoria</th>
                    <th className="border border-border px-4 py-2">Indicador de Potencialidade</th>
                    <th className="border border-border px-4 py-2">Variação %</th>
                    <th className="border border-border px-4 py-2">Escala do IPCAF</th>
                    <th className="border border-border px-4 py-2">Nível</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-sky-400 font-semibold">
                    <td className="border border-border px-4 py-2">Primeira</td>
                    <td className="border border-border px-4 py-2">Excelente</td>
                    <td className="border border-border px-4 py-2">81~99%</td>
                    <td className="border border-border px-4 py-2 bg-sky-400"></td>
                    <td className="border border-border px-4 py-2">I</td>
                  </tr>
                  <tr className="bg-lime-400 font-semibold">
                    <td className="border border-border px-4 py-2">Segunda</td>
                    <td className="border border-border px-4 py-2">Ótimo</td>
                    <td className="border border-border px-4 py-2">61~80%</td>
                    <td className="border border-border px-4 py-2 bg-lime-400"></td>
                    <td className="border border-border px-4 py-2">II</td>
                  </tr>
                  <tr className="bg-yellow-300 font-semibold">
                    <td className="border border-border px-4 py-2">Terceira</td>
                    <td className="border border-border px-4 py-2">Moderado</td>
                    <td className="border border-border px-4 py-2">41~60%</td>
                    <td className="border border-border px-4 py-2 bg-yellow-300"></td>
                    <td className="border border-border px-4 py-2">III</td>
                  </tr>
                  <tr className="bg-orange-400 text-white font-semibold">
                    <td className="border border-border px-4 py-2">Quarta</td>
                    <td className="border border-border px-4 py-2">Baixo</td>
                    <td className="border border-border px-4 py-2">21~40%</td>
                    <td className="border border-border px-4 py-2 bg-orange-400"></td>
                    <td className="border border-border px-4 py-2">IV</td>
                  </tr>
                  <tr className="bg-red-500 text-white font-semibold">
                    <td className="border border-border px-4 py-2">Quinta</td>
                    <td className="border border-border px-4 py-2">Insuficiente</td>
                    <td className="border border-border px-4 py-2">01~20%</td>
                    <td className="border border-border px-4 py-2 bg-red-500"></td>
                    <td className="border border-border px-4 py-2">V</td>
                  </tr>
                  <tr className="bg-red-800 text-white font-semibold">
                    <td className="border border-border px-4 py-2">Sexta</td>
                    <td className="border border-border px-4 py-2">Inexistente</td>
                    <td className="border border-border px-4 py-2">0%</td>
                    <td className="border border-border px-4 py-2 bg-red-800"></td>
                    <td className="border border-border px-4 py-2 text-lg">○○</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        {/*
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-nature">Compras por Universidade (2023)</CardTitle>
            <CardDescription>Valores totais e número de agricultores beneficiados</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={universityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="nome" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  formatter={(value, name) => [
                    name === "compras" ? `R$ ${value.toLocaleString()}` : value,
                    name === "compras" ? "Valor Comprado" : "Agricultores"
                  ]}
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))"
                  }}
                />
                <Bar dataKey="compras" fill="hsl(var(--nature))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        */}

        {/*
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <Card className="text-center shadow-lg">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-nature mb-2">533%</div>
              <p className="text-muted-foreground">Crescimento em 5 anos</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-earth mb-2">55</div>
              <p className="text-muted-foreground">Agricultores beneficiados</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-nature mb-2">18,800</div>
              <p className="text-muted-foreground">Produtos adquiridos</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-earth mb-2">R$ 2.9M</div>
              <p className="text-muted-foreground">Total investido</p>
            </CardContent>
          </Card>
        </div>
        */}
        {/* Tabelas adicionais */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TabelaCard3 table={indicador2} />
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-nature">INDICADOR II</CardTitle>
              <CardDescription>
                Classificação da Potencialidade Anual das quatro Universidades Federais Paraenses em relação às compras da Agricultura Familiar.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="overflow-x-auto">
                <Table className="border">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="bg-gray-200 text-center font-semibold border">UF</TableHead>
                      <TableHead className="bg-gray-200 text-center font-semibold border">
                        Indicador do Percentual da Ocorrência Anual de compras da AF
                      </TableHead>
                      <TableHead className="bg-gray-200 text-center font-semibold border">Categoria mensurada</TableHead>
                      <TableHead className="bg-gray-200 text-center font-semibold border">
                        Classificação do Indicador de Ocorrência
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {indiceMatriz.data.map((row, idx) => {
                      // Define cores dinâmicas conforme os valores
                      let bgColorPercentual = "";
                      let bgColorCategoria = "";
                      let bgColorClassificacao = "";

                      if (row.uf === "UFPA") {
                        bgColorPercentual = "bg-yellow-300";
                        bgColorCategoria = "bg-yellow-300";
                        bgColorClassificacao = "bg-yellow-300";
                      } else if (row.uf === "UFRA") {
                        bgColorPercentual = "bg-red-500 text-white";
                        bgColorCategoria = "bg-red-500 text-white";
                        bgColorClassificacao = "bg-red-500 text-white";
                      } else {
                        bgColorPercentual = "bg-red-800 text-white";
                        bgColorCategoria = "bg-red-800 text-white";
                        bgColorClassificacao = "bg-red-800 text-white";
                      }

                      return (
                        <TableRow key={idx} className="text-center font-medium">
                          <TableCell className="border font-semibold bg-white">{row.uf}</TableCell>
                          <TableCell className={`border ${bgColorPercentual}`}>{row.percentual}</TableCell>
                          <TableCell className={`border ${bgColorCategoria}`}>{row.categoria}</TableCell>
                          <TableCell className={`border ${bgColorClassificacao}`}>{row.classificacao}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <IndiceIPCAF />
        </div>

        <div className="mb-12">
          <GraficoIPCAF />
        </div>

        <div className="mb-12">
          <Resultado />
        </div>

      </div>


    </section>
  );
};

export default Results;