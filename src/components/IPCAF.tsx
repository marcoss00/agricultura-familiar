import React from "react";
import { BarChart3, Scale, Layers, ClipboardCheck, Eye } from "lucide-react";

const Card: React.FC<{ title: string; Icon: any; children: React.ReactNode }> = ({
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
    return (
        <section id="ipcaf" className="py-20 bg-muted" aria-labelledby="ipcaf-heading">
            <div className="container mx-auto px-4">
                {/* Título principal da seção IPCAF */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-foreground mb-3">
                        Índice de Potencialidade das Compras da Agricultura Familiar (IPCAF)
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        
                    </p>
                </div>
                {/* 1 - Apresentação (texto apenas) */}
                <section className="max-w-3xl mx-auto text-left mb-10">
                    <h3 className="text-2xl font-semibold mb-3">Apresentação</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        A gestão pública brasileira está utilizando novas tecnologias de informação para monitorar e avaliar
                        políticas públicas. No contexto das compras da agricultura familiar, há necessidade de desenvolver
                        ferramentas que possam medir, comparar e acompanhar a eficácia dessas políticas.
                        As compras públicas são reconhecidas como um instrumento de políticas públicas de desenvolvimento
                        sustentável. A obrigatoriedade de destinar no mínimo 30% dos recursos para aquisição de alimentos da
                        Agricultura Familiar (AF) por órgãos federais, como as Universidades Federais (UF), representa uma
                        oportunidade estratégica para fortalecer a economia local e promover a segurança alimentar.
                        Diante da necessidade de avaliar este cenário, foi desenvolvido um instrumento quantitativo
                        padronizado para o diagnóstico e monitoramento das compras da AF: o Índice de Potencialidade das
                        Compras da Agricultura Familiar (IPCAF), como produto da tese ‘O Papel das Universidades Federais no
                        Mercado Institucional de Alimentos’, que identificou que a aplicação desta política nas Universidades
                        Federais Paraenses é irregular e enfrenta desafios significativos.
                        O IPCAF atua como instrumento de gestão para que as UF Paraenses se alinhem ao Programa de
                        Alimentação Saudável na Educação Superior (PASES), criado pela Lei Federal nº 14.914/2024, bem
                        como, com a obrigatoriedade de aquisição mínima de 30% dos recursos destinados a alimentos da AF,
                        conforme exige o art.8 da Lei Federal nº 14.628/2023.

                    </p>
                </section>

                {/* 2 - Conceito e Objetivo: texto + cards (cards à direita) */}
                <section className="grid grid-cols-1 gap-8 items-start max-w-3xl mx-auto">
                    {/* left: texto explicativo */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-3">Conceito e Objetivo</h3>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            Um índice é uma medida sintética que combina diferentes indicadores para representar um fenômeno
                            complexo em um único valor. O IPCAF foi construído como uma ferramenta metodológica para
                            mensurar a efetividade das UF Paraenses na realização de seu potencial como compradoras no mercado
                            institucional de alimentos da AF.
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Os objetivos principais do IPCAF são:
                        </p>
                    </div>

                    {/* right: cards com ícone */}
                    <div className="grid grid-cols-1 gap-4">
                        <Card title="Mensurar" Icon={BarChart3}>
                            Quantificar a ocorrência e o volume financeiro das compras da AF realizadas por cada
                            universidade em um determinado período.
                        </Card>

                        <Card title="Comparar" Icon={Scale}>
                            Permitir a análise comparativa do desempenho entre as diferentes universidades ao
                            longo dos anos.
                        </Card>

                        <Card title="Classificar" Icon={Layers}>
                            Enquadrar o desempenho de cada instituição em uma escala de seis categorias, que vai
                            de "Excelente" a "Inexistente", facilitando a interpretação dos resultados.
                        </Card>
                        <Card title="Apoiar a Gestão" Icon={ClipboardCheck}>
                            Fornecer aos gestores ("burocratas de nível de rua") um diagnóstico preciso que
                            possa orientar o planejamento, a tomada de decisão e o aprimoramento da política de compras.
                        </Card>
                        <Card title="Promover a Transparência" Icon={Eye}>
                            Funcionar como uma ferramenta de governança e controle social,
                            permitindo que a comunidade acadêmica e a sociedade em geral fiscalizem a aplicação dos recursos públicos e o cumprimento da legislação.
                        </Card>
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
                    <ul className="list-disc list-inside space-y-3 text-base text-muted-foreground leading-relaxed">
                        <li>
                            <span className="font-semibold">Para Gestores Universitários:</span>  Funciona como uma ferramenta de governança e diagnóstico,
                            permitindo avaliar a eficácia da política, justificar a alocação de recursos e planejar ações para o
                            cumprimento da meta de 30%.
                        </li>
                        <li>
                            <span className="font-semibold">Para Agricultores Familiares:</span> A transparência gerada pelo índice pode estimular um diálogo mais
                            qualificado com as universidades, permitindo que as organizações de produtores compreendam a dinâmica da demanda institucional e se preparem para atendê-la.
                        </li>
                        <li>
                            <span className="font-semibold">Para Órgãos de Controle e Sociedade:</span> O IPCAF é um instrumento de controle social que possibilita
                            o monitoramento da aplicação da lei e do uso de recursos públicos, em consonância com os
                            princípios da transparência.
                        </li>
                        <li>
                            <span className="font-semibold">Para Pesquisadores:</span> Oferece um instrumento quantitativo padronizado que possibilita a
                            realização de novas pesquisas, diagnósticos institucionais precisos e a avaliação da eficiência,
                            eficácia e efetividade das políticas públicas.
                        </li>
                    </ul>
                </section>

                {/* 4 - Observações finais (texto apenas) */}
                <section className="mt-10 max-w-3xl mx-auto text-sm text-muted-foreground">
                    <h3 className="text-2xl font-semibold mb-3"></h3>
                    <p className="mb-3 leading-relaxed">
                        O IPCAF utiliza dados primários oficiais e abertos das contratações públicas federais, sendo a principal
                        fonte o Painel de Compras do Governo Federal, que oferece consultas e filtros por órgão, município,
                        modalidade e etc. Os dados cobrem o período de 2017 a 2024 e permitem acompanhar a ocorrência de
                        compras e seus valores por universidade federal.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default IPCAF;
