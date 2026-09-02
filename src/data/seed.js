export const categories = ["Dados e relatórios", "Acesso a sistemas", "Incidente", "Melhoria", "Dúvida técnica"];
export const priorities = ["Baixa", "Média", "Alta", "Crítica"];

export const initialRequests = [
  {
    id: "DEM-1001",
    title: "Acesso ao painel de indicadores",
    category: "Acesso a sistemas",
    priority: "Média",
    description: "Solicitação de acesso de demonstração ao painel de indicadores fictícios.",
    status: "Em atendimento",
    createdAt: "02/09/2026, 09:30",
    requester: "Usuário demonstração",
    history: [
      { date: "02/09/2026, 09:30", text: "Solicitação registrada." },
      { date: "02/09/2026, 10:10", text: "Demanda direcionada para análise." }
    ],
    rating: null
  },
  {
    id: "DEM-1002",
    title: "Ajuste em categoria de relatório",
    category: "Melhoria",
    priority: "Baixa",
    description: "Exemplo fictício para avaliação do fluxo de acompanhamento.",
    status: "Concluída",
    createdAt: "01/09/2026, 14:05",
    requester: "Usuário demonstração",
    history: [
      { date: "01/09/2026, 14:05", text: "Solicitação registrada." },
      { date: "01/09/2026, 16:20", text: "Ajuste concluído para validação." }
    ],
    rating: null
  }
];

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
