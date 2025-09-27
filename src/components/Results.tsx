import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

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
    { name: "Verduras", value: 35, color: "hsl(var(--nature))" },
    { name: "Frutas", value: 28, color: "hsl(var(--earth))" },
    { name: "Grãos", value: 20, color: "hsl(var(--nature-light))" },
    { name: "Outros", value: 17, color: "hsl(var(--earth-light))" },
  ];

  const universityData = [
    { nome: "UFPA", compras: 450000, agricultores: 25 },
    { nome: "UFRA", compras: 320000, agricultores: 18 },
    { nome: "UNIFESSPA", compras: 180000, agricultores: 12 },
  ];

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
              <CardTitle className="text-earth">Distribuição por Tipo de Produto</CardTitle>
              <CardDescription>Percentual dos produtos adquiridos</CardDescription>
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