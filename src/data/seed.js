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
