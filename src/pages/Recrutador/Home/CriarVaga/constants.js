export const breadcrumbInfo = [
  { nome: "Home", rota: "/" },
  { nome: "Sou Recrutador", rota: "/recrutador" },
  { nome: "Criar vaga" },
];

export const pcd = [
  { id: "SIM", name: "SIM" },
  { id: "NÃO", name: "NÃO" },
];

export const textFieldsContent = (workerCategories, areas, seniorities) => [
  {
    name: "titulo",
    label: "TÍTULO DA VAGA",
    type: "text",
    className: "setenta",
  },
  {
    name: "tipo",
    label: "TIPO DE CONTRATAÇÃO",
    type: "text",
    className: "trinta",
    select: true,
    data: workerCategories,
  },
  {
    name: "area",
    label: "ÁREA",
    type: "text",
    className: "trinta",
    select: true,
    data: areas,
  },
  {
    name: "nivel",
    label: "NÍVEL",
    type: "text",
    className: "trinta",
    select: true,
    data: seniorities,
  },
  {
    name: "cidade",
    label: "CIDADE",
    type: "text",
    className: "trinta",
    shrink: true,
  },
  {
    name: "pcd",
    label: "ACEITA PcD",
    type: "text",
    className: "dez",
    select: true,
    data: pcd,
  },
  {
    name: "cargo",
    label: "CARGO",
    type: "text",
    className: "quarenta",
  },
];
