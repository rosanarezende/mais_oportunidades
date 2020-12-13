export const breadcrumbInfo = [
  { nome: "Home", rota: "/" },
  { nome: "Sou Recrutador", rota: "/recrutador" },
  { nome: "Criar vaga" },
];

export const tipos = [
  { value: "CLT", label: "CLT" },
  { value: "PJ", label: "PJ" },
  { value: "FREELANCER", label: "FREELLANCER" },
  { value: "CONTRATO", label: "CONTRATO" },
];

export const areas = [
  { value: "ADMINISTRATIVO", label: "ADMINISTRATIVO" },
  { value: "FINANCEIRO", label: "FINANCEIRO" },
  { value: "RECURSOS HUMANOS", label: "RECURSOS HUMANOS" },
  { value: "LOGÍSTICA", label: "LOGÍSTICA" },
  { value: "COMERCIAL", label: "COMERCIAL" },
  { value: "OPERACIONAL", label: "OPERACIONAL" },
  { value: "PLANEJAMENTO", label: "PLANEJAMENTO" },
  { value: "JURÍDICO", label: "JURÍDICO" },
  { value: "COMUNICAÇÃO/MARKETING", label: "COMUNICAÇÃO/MARKETING" },
  { value: "TECNOLOGIA", label: "TECNOLOGIA" },
];

export const pdc = [
  { value: true, label: "SIM" },
  { value: false, label: "NÃO" },
];

export const niveis = [
  { value: "INICIANTE", label: "INICIANTE" },
  { value: "JUNIOR", label: "JUNIOR" },
  { value: "PLENO", label: "PLENO" },
  { value: "SENIOR", label: "SENIOR" },
];

export const cargos = [
  { value: "ASSISTENTE", label: "ASSISTENTE" },
  { value: "ANALISTA", label: "ANALISTA" },
  { value: "COORDENADOR", label: "COORDENADOR" },
  { value: "GERENTE", label: "GERENTE" },
  { value: "DIRETOR", label: "DIRETOR" },
  { value: "VICE-PRESIDENTE", label: "VICE-PRESIDENTE" },
  { value: "PRESIDENTE", label: "PRESIDENTE" },
];

export const textFieldsContent = [
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
    data: tipos
  },
  { 
    name: "area", 
    label: "ÁREA", 
    type: "text",
    className: "trinta",
    select: true,
    data: areas
  },
  { 
    name: "nivel", 
    label: "NÍVEL", 
    type: "text",
    className: "trinta",
    select: true,
    data: niveis
  },
  { 
    name: "cidade", 
    label: "CIDADE", 
    type: "text",
    className: "trinta",
  },
  { 
    name: "pcd", 
    label: "PCD", 
    type: "text",
    className: "dez",
    select: true,
    data: pdc
  },
  { 
    name: "cargo", 
    label: "CARGO", 
    type: "text",
    className: "quarenta",
    select: true,
    data: cargos
  }
 ];
