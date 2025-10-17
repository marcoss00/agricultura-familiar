import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
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

  return (
    <section id="results" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-nature to-earth bg-clip-text text-transparent">
            Resultados da Pesquisa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dados coletados e analisados das compras realizadas pelas universidades federais
            do Pará junto aos agricultores familiares entre 2019 e 2023.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Tabela de Classes por Universidade */}
          <Card className="mt-12 shadow-lg">
            <CardHeader>
              <CardTitle className="text-nature">Classificação por UF’s de Belém</CardTitle>
              <CardDescription>
                Distribuição das universidades conforme as classes detectadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>UF’s de Belém</TableHead>
                      <TableHead>Classe 4<br /><span className="text-xs text-muted-foreground">Ideal</span></TableHead>
                      <TableHead>Classe 3<br /><span className="text-xs text-muted-foreground">Alta</span></TableHead>
                      <TableHead>Classe 2<br /><span className="text-xs text-muted-foreground">Média</span></TableHead>
                      <TableHead>Classe 1<br /><span className="text-xs text-muted-foreground">Baixa</span></TableHead>
                      <TableHead>Classe 0<br /><span className="text-xs text-muted-foreground">Inexistente</span></TableHead>
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
                        <TableCell className="font-medium">{row.universidade}</TableCell>
                        <TableCell className={row.c4 === "Sim" ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>{row.c4}</TableCell>
                        <TableCell className={row.c3 === "Sim" ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>{row.c3}</TableCell>
                        <TableCell className={row.c2 === "Sim" ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>{row.c2}</TableCell>
                        <TableCell className={row.c1 === "Sim" ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>{row.c1}</TableCell>
                        <TableCell className={row.c0 === "Sim" ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>{row.c0}</TableCell>
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
              <CardTitle className="text-earth">Histórico das Compras da Agricultura Familiar</CardTitle>
              <CardDescription>
                Valores anuais por universidade, classe detectada e mensuração
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

        {/* Estatísticas Resumo */}
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
      </div>
    </section>
  );
};

export default Results;