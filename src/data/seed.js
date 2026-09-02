export const categories = ["Dados e relatórios", "Acesso a sistemas", "Incidente", "Melhoria", "Dúvida técnica"];
export const priorities = ["Baixa", "Média", "Alta", "Crítica"];

const requestTemplates = [
  ["Acesso ao painel de indicadores", "Acesso a sistemas", "Média", "Solicitação de acesso de demonstração ao painel de indicadores fictícios.", "Concluída"],
  ["Ajuste em categoria de relatório gerencial", "Melhoria", "Baixa", "Revisão de uma categoria de relatório contendo apenas dados de exemplo.", "Concluída"],
  ["Atualização de base de dados para teste", "Dados e relatórios", "Alta", "Atualização controlada de dados fictícios para validação de consulta.", "Concluída"],
  ["Correção de filtro em relatório operacional", "Incidente", "Média", "Filtro de período retornando resultado inconsistente em relatório de demonstração.", "Concluída"],
  ["Inclusão de campo em painel de acompanhamento", "Melhoria", "Média", "Inclusão de campo de referência para facilitar a leitura de indicadores fictícios.", "Concluída"],
  ["Dúvida sobre extração de dados", "Dúvida técnica", "Baixa", "Orientação sobre o fluxo de solicitação de extração de dados anonimizados.", "Concluída"],
  ["Acesso de leitura a ambiente de treinamento", "Acesso a sistemas", "Média", "Liberação de acesso somente leitura ao ambiente de treinamento.", "Concluída"],
  ["Ajuste no agendamento de carga simulada", "Incidente", "Alta", "Carga de demonstração executada fora do horário configurado para o teste.", "Concluída"],
  ["Padronização de nomenclatura de indicadores", "Melhoria", "Baixa", "Revisão de títulos e descrições para aumentar a clareza do painel fictício.", "Concluída"],
  ["Consulta sobre atualização de dashboard", "Dúvida técnica", "Baixa", "Esclarecimento sobre periodicidade de atualização dos dados de demonstração.", "Concluída"],
  ["Validação de consistência em relatório de custos", "Dados e relatórios", "Alta", "Validação de dados fictícios antes da apresentação de um relatório gerencial.", "Concluída"],
  ["Nova visualização de indicadores de produção", "Melhoria", "Média", "Solicitação de protótipo para acompanhar indicadores operacionais fictícios.", "Em atendimento"],
  ["Acesso temporário a relatório de planejamento", "Acesso a sistemas", "Média", "Solicitação de acesso controlado a relatório de planejamento para demonstração.", "Em atendimento"],
  ["Verificação de divergência em dados consolidados", "Dados e relatórios", "Alta", "Análise de divergência identificada em conjunto de dados de teste.", "Em atendimento"],
  ["Inclusão de observação em demanda de teste", "Dúvida técnica", "Baixa", "Solicitação aberta para avaliar o registro de observações no aplicativo.", "Aberta"]
];

// Dados exclusivamente fictícios para demonstrar a rotina de dados e sistemas.
export const initialRequests = requestTemplates.map(([title, category, priority, description, status], index) => {
  const createdAt = `0${index < 8 ? 1 : 2}/09/2026, ${String(8 + (index % 8)).padStart(2, "0")}:${String((index % 4) * 15).padStart(2, "0")}`;
  const history = [{ date: createdAt, text: "Solicitação fictícia registrada para demonstração." }];
  if (status === "Concluída") history.push({ date: `02/09/2026, ${String(10 + (index % 7)).padStart(2, "0")}:30`, text: "Atendimento concluído e disponibilizado para validação." });
  if (status === "Em atendimento") history.push({ date: "02/09/2026, 14:00", text: "Demanda direcionada para análise da equipe responsável." });
  return { id: `DEM-${1001 + index}`, title, category, priority, description, status, createdAt, requester: `Participante fictício ${String((index % 26) + 1).padStart(2, "0")}`, history, rating: null };
});

const feedbackComments = [
  "Fluxo de abertura claro e rápido para uma demonstração.",
  "A consulta de status facilitou o acompanhamento da solicitação.",
  "As categorias apresentadas foram fáceis de compreender.",
  "A organização das informações em um único local foi útil.",
  "A navegação entre as telas foi simples e intuitiva.",
  "O histórico ajudou a visualizar as atualizações do atendimento.",
  "A indicação de prioridade ficou clara durante o teste.",
  "A tela de avaliação foi objetiva e fácil de preencher.",
  "Seria interessante ampliar as categorias em uma versão futura.",
  "A experiência geral foi positiva para o cenário apresentado."
];

// Dados exclusivamente fictícios, usados para demonstrar o painel de resumo.
export const initialFeedbacks = Array.from({ length: 26 }, (_, index) => {
  const rating = index < 21 ? 5 : index < 25 ? 4 : 3;
  return {
    id: `FB-DEMO-${String(index + 1).padStart(2, "0")}`,
    user: `Participante fictício ${String(index + 1).padStart(2, "0")}`,
    rating,
    comment: feedbackComments[index % feedbackComments.length],
    createdAt: `02/09/2026, ${String(9 + Math.floor(index / 4)).padStart(2, "0")}:${String((index % 4) * 15).padStart(2, "0")}`
  };
});
