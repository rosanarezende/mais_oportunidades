export const breadcrumbInfo = [
  { nome: "Home", rota: "/" },
  { nome: "Sou Recrutador", rota: "/recrutador" },
  { nome: "Criar vaga" },
];

// export const areas = [
//   { id: 9, name: "COMUNICAÇÃO/MARKETING" },
// ];

export const pdc = [
  { id: "SIM", name: "SIM" },
  { id: "NÃO", name: "NÃO" },
];

export const cargos = [
  { id: 1, name: "ASSISTENTE" },
  { id: 2, name: "ANALISTA" },
  { id: 3, name: "COORDENADOR" },
  { id: 4, name: "GERENTE" },
  { id: 5, name: "DIRETOR" },
  { id: 6, name: "VICE-PRESIDENTE" },
  { id: 7, name: "PRESIDENTE" },
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
    data: pdc,
  },
  // ainda não tem endpoint
  {
    name: "cargo",
    label: "CARGO",
    type: "text",
    className: "quarenta",
    select: true,
    data: cargos,
  },
];
