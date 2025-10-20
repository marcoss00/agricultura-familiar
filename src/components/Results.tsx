import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"

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
    { ano: "2017", ufpa: "R$111.861,90", ufra: "R$0,00", ufopa: "R$0,00", unifesspa: "R$0,00", classe: 1, mensuracao: "BAIXO" },
    { ano: "2018", ufpa: "R$0,00", ufra: "R$34.898,62", ufopa: "R$0,00", unifesspa: "R$0,00", classe: 1, mensuracao: "BAIXO" },
    { ano: "2019", ufpa: "R$0,00", ufra: "R$0,00", ufopa: "R$0,00", unifesspa: "R$0,00", classe: 0, mensuracao: "INEXISTENTE" },
    { ano: "2020", ufpa: "R$295.056,67", ufra: "R$0,00", ufopa: "R$0,00", unifesspa: "R$0,00", classe: 1, mensuracao: "BAIXO" },
    { ano: "2021", ufpa: "R$0,00", ufra: "R$0,00", ufopa: "R$0,00", unifesspa: "R$0,00", classe: 0, mensuracao: "INEXISTENTE" },
    { ano: "2022", ufpa: "R$400.314,92", ufra: "R$0,00", ufopa: "R$0,00", unifesspa: "R$0,00", classe: 1, mensuracao: "BAIXO" },
    { ano: "2023", ufpa: "R$0,00", ufra: "R$0,00", ufopa: "R$0,00", unifesspa: "R$0,00", classe: 0, mensuracao: "INEXISTENTE" },
    { ano: "2024", ufpa: "R$732.217,00", ufra: "R$0,00", ufopa: "R$0,00", unifesspa: "R$0,00", classe: 1, mensuracao: "BAIXO" },
  ]

  const extraTables = [
    {
      title: "TABELA dos Valores Anuais das Compras da AF nas UF Paraenses, entre 2017 a 2024",
      description: "",
      data: [
        { ANO: "2017", UFPA: "R$ 111.861,90", UFRA: "R$ 0,00", UFOPA: "R$ 0,00", UNIFESSPA: "R$ 0,00", "Valor Total anual de compras da AF pelas UF Paraenses": "R$ 111.861,90" },
        { ANO: "2018", UFPA: "R$ 0,00", UFRA: "R$ 34.898,62", UFOPA: "R$ 0,00", UNIFESSPA: "R$ 0,00", "Valor Total anual de compras da AF pelas UF Paraenses": "R$ 34.898,62" },
        { ANO: "2019", UFPA: "R$ 0,00", UFRA: "R$ 0,00", UFOPA: "R$ 0,00", UNIFESSPA: "R$ 0,00", "Valor Total anual de compras da AF pelas UF Paraenses": "R$ 0,00" },
        { ANO: "2020", UFPA: "R$ 295.056,67", UFRA: "R$ 0,00", UFOPA: "R$ 0,00", UNIFESSPA: "R$ 0,00", "Valor Total anual de compras da AF pelas UF Paraenses": "R$ 295.056,67" },
        { ANO: "2021", UFPA: "R$ 0,00", UFRA: "R$ 0,00", UFOPA: "R$ 0,00", UNIFESSPA: "R$ 0,00", "Valor Total anual de compras da AF pelas UF Paraenses": "R$ 0,00" },
        { ANO: "2022", UFPA: "R$ 400.314,92", UFRA: "R$ 0,00", UFOPA: "R$ 0,00", UNIFESSPA: "R$ 0,00", "Valor Total anual de compras da AF pelas UF Paraenses": "R$ 400.314,92" },
        { ANO: "2023", UFPA: "R$ 0,00", UFRA: "R$ 0,00", UFOPA: "R$ 0,00", UNIFESSPA: "R$ 0,00", "Valor Total anual de compras da AF pelas UF Paraenses": "R$ 0,00" },
        { ANO: "2024", UFPA: "R$ 732.217,00", UFRA: "R$ 0,00", UFOPA: "R$ 0,00", UNIFESSPA: "R$ 0,00", "Valor Total anual de compras da AF pelas UF Paraenses": "R$ 732.217,00" },
        { ANO: "-", UFPA: "-", UFRA: "-", UFOPA: "-", UNIFESSPA: "-", "Valor Total anual de compras da AF pelas UF Paraenses": "-" },
        { ANO: "-", UFPA: "R$ 807.233,49", UFRA: "R$ 0,00", UFOPA: "R$ 0,00", UNIFESSPA: "R$ 0,00", "Valor Total anual de compras da AF pelas UF Paraenses": "MONTANTE POR UF (no período analisado)" },
        { ANO: "-", UFPA: "R$ 34.898,62", UFRA: "R$ 0,00", UFOPA: "R$ 0,00", UNIFESSPA: "R$ 0,00", "Valor Total anual de compras da AF pelas UF Paraenses": "R$ 732.217,00" },
        { ANO: "-", UFPA: "04", UFRA: "01", UFOPA: "0", UNIFESSPA: "0", "Valor Total anual de compras da AF pelas UF Paraenses": "QTDE DE COMPRAS POR UF (no período pesquisado)" },
        { ANO: "-", UFPA: "", UFRA: "", UFOPA: "", UNIFESSPA: "", "Valor Total anual de compras da AF pelas UF Paraenses": "" },
      ],
      note: "Montante gasto pelas UF Paraenses com compras da AF (2017~2024): R$ 1.574.349,11"
    },
    {
      title: "TABELA ANALITICA",
      description: "da Aplicação de alguns Princípios de Estatística Descritiva Básica sobre a Ocorrência de Compras da Agricultura Familiar nas Universidades Federais Paraenses entre 2017 a 2024.",
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
      note: ""
    },
    {
      title: "INDICADOR 2",
      description: "Indicador do Quantitativo da Ocorrência de Compras da AF nas UF Paraenses entre 2017 a 2024.",
      data: [
        { "Análise Realizada": "Quantidade das ocorrências de compras da Agricultura Familiar realizadas pelas Universidades Federais Paraenses, durante o período analisado.", UFPA: "03", UFRA: "01", UFOPA: "0", UNIFESSPA: "0" },
        { "Análise Realizada": "Percentual da Ocorrência Anual de compras da Agricultura Familiar nas Universidades Federais Paraenses, considerando o período analisado.", UFPA: "50%", UFRA: "12,50%", UFOPA: "0%", UNIFESSPA: "0%" },
      ],
      note: ""
    },
    {
      title: "ÍNDICE",
      description: "– MATRIZ de Classificação da Potencialidade das UF Paraenses sobre a compra de alimentos da AF.",
      data: [
        { "Categoria.": "Qu", UFPA: "03", UFRA: "01", UFOPA: "0", UNIFESSPA: "0" },
        { "Análise Realizada": "Percentual da Ocorrência Anual de compras da Agricultura Familiar nas Universidades Federais Paraenses, considerando o período analisado.", UFPA: "50%", UFRA: "12,50%", UFOPA: "0%", UNIFESSPA: "0%" },
      ],
      note: ""
    },
    // ...adicione mais 3 tabelas aqui
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Tabela de Classes por Universidade */}
          <Card className="mt-12 shadow-lg">
            <CardHeader>
              <CardTitle className="text-nature">INDICADOR 1</CardTitle>
              <CardDescription>
                MATRIZ do Indicador de Ocorrência Anual de Compras da AF nas UF
                Paraenses entre 2017 a 2024.
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
              <CardTitle className="text-earth">INDICADOR 1</CardTitle>
              <CardDescription>
                Indicador da Mensuração Anual das Compras na expectativa da AF sobre as
                UF Paraenses entre 2017 a 2024.
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

          {/* Evolução dos Valores */}
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

          {/* Gráfico de Barras Agrupadas - UFPA x UFRA x UFOPA x UNIFESSPA */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-nature">
                Comparativo das Compras por Universidade (2017–2024)
              </CardTitle>
              <CardDescription>Valores anuais em reais (R$)</CardDescription>
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

          {/* Tabela de Indicadores de Potencialidade */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-nature">Indicadores de Potencialidade</CardTitle>
              <CardDescription>MATRIZ de Classificação da Potencialidade das UF Paraenses sobre a compra de alimentos da AF.</CardDescription>
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
                    <tr className="bg-sky-400 text-white font-semibold">
                      <td className="border border-border px-4 py-2">Primeira</td>
                      <td className="border border-border px-4 py-2">Excelente</td>
                      <td className="border border-border px-4 py-2">81~99%</td>
                      <td className="border border-border px-4 py-2 bg-sky-400"></td>
                      <td className="border border-border px-4 py-2"></td>
                    </tr>
                    <tr className="bg-lime-400 text-white font-semibold">
                      <td className="border border-border px-4 py-2">Segunda</td>
                      <td className="border border-border px-4 py-2">Ótimo</td>
                      <td className="border border-border px-4 py-2">61~80%</td>
                      <td className="border border-border px-4 py-2 bg-lime-400"></td>
                      <td className="border border-border px-4 py-2"></td>
                    </tr>
                    <tr className="bg-yellow-300 font-semibold">
                      <td className="border border-border px-4 py-2">Terceira</td>
                      <td className="border border-border px-4 py-2">Moderado</td>
                      <td className="border border-border px-4 py-2">41~60%</td>
                      <td className="border border-border px-4 py-2 bg-yellow-300"></td>
                      <td className="border border-border px-4 py-2"></td>
                    </tr>
                    <tr className="bg-orange-400 text-white font-semibold">
                      <td className="border border-border px-4 py-2">Quarta</td>
                      <td className="border border-border px-4 py-2">Baixo</td>
                      <td className="border border-border px-4 py-2">21~40%</td>
                      <td className="border border-border px-4 py-2 bg-orange-400"></td>
                      <td className="border border-border px-4 py-2"></td>
                    </tr>
                    <tr className="bg-red-500 text-white font-semibold">
                      <td className="border border-border px-4 py-2">Quinta</td>
                      <td className="border border-border px-4 py-2">Insuficiente</td>
                      <td className="border border-border px-4 py-2">01~20%</td>
                      <td className="border border-border px-4 py-2 bg-red-500"></td>
                      <td className="border border-border px-4 py-2"></td>
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

          {/* Distribuição por Produtos */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-earth">Gráfico Relativo ao Indicador</CardTitle>
              <CardDescription>da Frequência Relativa Percentual por Instituição em
                relação ao Montante das Compras da Agricultura Familiar das Universidades Federais
                Paraenses entre 2017 a 2024.</CardDescription>
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

        {/* Tabela de Universidades */}
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
          {extraTables.map((table, idx) => (
            <Card key={idx} className="shadow-lg hover:shadow-xl transition-all duration-300">
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
                <p className="text-sm text-muted-foreground mt-4 italic text-center">
                  {table.note}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Results;