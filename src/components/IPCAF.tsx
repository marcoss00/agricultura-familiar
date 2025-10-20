import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Scale, Layers, ClipboardCheck, Eye, ArrowRightCircle, CirclePlus, Archive, Search, Compass } from "lucide-react";

const Carde: React.FC<{ title: string; Icon: any; children: React.ReactNode }> = ({
    title,
    Icon,
    children,
}) => (
    <div className="p-6 bg-background border border-border rounded-lg flex items-start gap-4">
        <div className="mt-1 text-primary">
            <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <div>
            <h4 className="text-lg font-semibold mb-1">{title}</h4>
            <div className="text-sm text-muted-foreground">{children}</div>
        </div>
    </div>
);

const IPCAF = () => {
    const benefits = [
        {
            icon: <BarChart3 className="w-12 h-12 text-nature mb-4" />,
            title: "Mensurar",
            description: "Quantificar a ocorrência e o volume financeiro das compras da AF realizadas em determinado período."
        },
        {
            icon: <Scale className="w-12 h-12 text-earth mb-4" />,
            title: "Comparar",
            description: "Permitir a análise comparativa entre as diferentes universidades ao longo dos anos."
        },
        {
            icon: <Layers className="w-12 h-12 text-nature mb-4" />,
            title: "Classificar",
            description: "Enquadrar o desempenho de cada instituição em uma escala facilitando a interpretação dos resultados."
        },
        {
            icon: <Eye className="w-12 h-12 text-earth mb-4" />,
            title: "Apoiar a Gestão",
            description: "Fornecer aos gestores um diagnóstico que possa orientar o planejamento, a tomada de decisão e o aprimoramento da política pública."
        },
        {
            icon: <ClipboardCheck className="w-12 h-12 text-earth mb-4" />,
            title: "Governança",
            description: "Funcionar como uma ferramenta de governança e controle social."
        },
        {
            icon: <ArrowRightCircle className="w-12 h-12 text-earth mb-4" />,
            title: "Transparência",
            description: "Promover a comunidade acadêmica e a sociedade em geral condições de fiscalização e o cumprimento da legislação."
        },

    ];

    const aplicabilidade = [
        {
            icon: <CirclePlus className="w-12 h-12 text-nature mb-4" />,
            title: "Para Gestores Universitários",
            description: "ferramenta de governança e diagnóstico, permitindo avaliar a eficácia da política, alocação de recursos e planejamento da meta de 30%."
        },
        {
            icon: <Archive className="w-12 h-12 text-earth mb-4" />,
            title: "Para Agricultores Familiares",
            description: "estimular diálogo mais qualificado com as universidades federais, permitindo que as organizações compreendam a dinâmica da demanda institucional e se preparem para atendê-la nas chamadas públicas."
        },
        {
            icon: <Search className="w-12 h-12 text-nature mb-4" />,
            title: "Para Órgãos de Controle e Sociedade",
            description: "instrumento de controle social que possibilita o monitoramento da aplicação da lei em consonância com os princípios da transparência."
        },
        {
            icon: <Compass className="w-12 h-12 text-earth mb-4" />,
            title: "Para Pesquisadores",
            description: "instrumento quantitativo que possibilita a realização de novas pesquisas, diagnósticos e a avaliação da eficiência, eficácia e efetividade das políticas públicas."
        },

    ];
    return (
        <section id="ipcaf" className="py-20 bg-muted" aria-labelledby="ipcaf-heading">
            <div className="container mx-auto px-4">
                {/* Título principal da seção IPCAF */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-foreground mb-3">
                        O Índice de Potencialidade das Compras da Agricultura Familiar (IPCAF)
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">

                    </p>
                </div>
                {/* 1 - Apresentação (texto apenas) */}
                <section className="max-w-3xl mx-auto text-left mb-10">
                    <h3 className="text-2xl font-semibold mb-3">Apresentação</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Para que as compras da Agricultura Familiar (AF) funcionem como um efetivo instrumento de
                        desenvolvimento sustentável, a gestão pública precisa desenvolver ferramentas que possam medir,
                        comparar e acompanhar a eficácia dessas políticas. A obrigatoriedade mínima de 30% para aquisição de
                        alimentos da AF por Órgãos Federais (Lei Federal 14.628/2023), como as Universidades Federais (UF),
                        representa uma oportunidade estratégica para fortalecer a economia local e promover a segurança
                        alimentar.
                        Assim, desenvolveu-se o Índice de Potencialidade das Compras da Agricultura Familiar (IPCAF), como
                        produto da tese ‘O Papel das Universidades Federais no Mercado Institucional de Alimentos’, que
                        identificou que a aplicação desta política nas UF Paraenses. O IPCAF é instrumento de gestão para que as
                        UF Paraenses se alinhem ao Programa de Alimentação Saudável na Educação Superior (PASES), criado
                        pela Lei Federal nº 14.914/2024.

                    </p>
                </section>

                {/* 2 - Conceito e Objetivo: texto + cards (cards à direita) */}
                <section className="grid grid-cols-1 gap-8 items-start max-w-3xl mx-auto">
                    {/* left: texto explicativo */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-3">Conceito e Objetivo</h3>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            O índice é uma medida sintética que combina diferentes indicadores que foi construído como ferramenta
                            metodológica para mensurar a efetividade das UF Paraenses nas compras no Mercado Institucional de
                            Alimentos da AF. Os objetivos do IPCAF são:
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                        </p>
                    </div>

                    {/* right: cards com ícone */}
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
                </section>

                {/* 3 - Aplicabilidade (texto apenas) */}
                <section className="max-w-3xl mx-auto text-left mb-10 mt-16">
                    <h3 className="text-2xl font-semibold mb-3">Aplicabilidade e Relevância do IPCAF</h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                        A relevância deste produto reside em sua capacidade de transformar dados brutos de compras públicas
                        em informação estratégica e acessível. O IPCAF transcende o contexto paraense, podendo ser adaptado
                        e replicado para a análise de outras instituições federais.
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Sua aplicabilidade comprovada se manifesta em múltiplas frentes:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
                        {aplicabilidade.map((benefit, index) => (
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
                </section>
            </div>
        </section>
    );
};

export default IPCAF;
