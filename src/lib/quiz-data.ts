export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: { invisivel: number; desconhecida: number; emergente: number; estabelecida: number };
  }[];
}

export interface QuizProfile {
  id: "invisivel" | "desconhecida" | "emergente" | "estabelecida";
  title: string;
  subtitle: string;
  description: string;
  strengths: string[];
  risks: string[];
  cta: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Como seus clientes te encontram hoje?",
    options: [
      {
        text: "Eu corro atrás de todos — DMs, grupos, plataformas de freelance",
        scores: { invisivel: 3, desconhecida: 1, emergente: 0, estabelecida: 0 },
      },
      {
        text: "Misto — busco ativamente mas recebo algumas indicações",
        scores: { invisivel: 1, desconhecida: 3, emergente: 1, estabelecida: 0 },
      },
      {
        text: "Metade vem de indicação, metade eu prospecto",
        scores: { invisivel: 0, desconhecida: 1, emergente: 3, estabelecida: 1 },
      },
      {
        text: "Maioria vem por indicação ou me procura diretamente",
        scores: { invisivel: 0, desconhecida: 0, emergente: 1, estabelecida: 3 },
      },
    ],
  },
  {
    id: 2,
    question: "Com que frequência clientes pedem desconto ou comparam seu preço?",
    options: [
      {
        text: "Sempre — quase todo cliente negocia ou compara",
        scores: { invisivel: 3, desconhecida: 1, emergente: 0, estabelecida: 0 },
      },
      {
        text: "Frequentemente — mais da metade questiona o preço",
        scores: { invisivel: 1, desconhecida: 3, emergente: 1, estabelecida: 0 },
      },
      {
        text: "Às vezes — alguns pedem, mas outros aceitam",
        scores: { invisivel: 0, desconhecida: 1, emergente: 3, estabelecida: 1 },
      },
      {
        text: "Raramente — meu preço é aceito sem grandes objeções",
        scores: { invisivel: 0, desconhecida: 0, emergente: 1, estabelecida: 3 },
      },
    ],
  },
  {
    id: 3,
    question: "Quantas indicações espontâneas você recebe por mês?",
    options: [
      {
        text: "Nenhuma — nunca ou quase nunca sou indicado",
        scores: { invisivel: 3, desconhecida: 1, emergente: 0, estabelecida: 0 },
      },
      {
        text: "1 a 2 indicações por mês, de forma irregular",
        scores: { invisivel: 1, desconhecida: 3, emergente: 1, estabelecida: 0 },
      },
      {
        text: "3 a 5 indicações por mês de forma razoavelmente consistente",
        scores: { invisivel: 0, desconhecida: 1, emergente: 3, estabelecida: 1 },
      },
      {
        text: "Mais de 5 — indicação é minha principal fonte de clientes",
        scores: { invisivel: 0, desconhecida: 0, emergente: 1, estabelecida: 3 },
      },
    ],
  },
  {
    id: 4,
    question: "Como você descreveria seu posicionamento no mercado?",
    options: [
      {
        text: "Não tenho — sou mais um fazendo a mesma coisa",
        scores: { invisivel: 3, desconhecida: 1, emergente: 0, estabelecida: 0 },
      },
      {
        text: "Sei que sou bom, mas o mercado não sabe",
        scores: { invisivel: 1, desconhecida: 3, emergente: 1, estabelecida: 0 },
      },
      {
        text: "Tenho algum reconhecimento, mas inconsistente",
        scores: { invisivel: 0, desconhecida: 1, emergente: 3, estabelecida: 1 },
      },
      {
        text: "Sou reconhecido no meu nicho, mas quero escalar",
        scores: { invisivel: 0, desconhecida: 0, emergente: 1, estabelecida: 3 },
      },
    ],
  },
  {
    id: 5,
    question: "Qual é seu maior desafio hoje?",
    options: [
      {
        text: "Conseguir qualquer cliente — estou sobrevivendo",
        scores: { invisivel: 3, desconhecida: 1, emergente: 0, estabelecida: 0 },
      },
      {
        text: "Ser visto como diferente — clientes me tratam como commodity",
        scores: { invisivel: 1, desconhecida: 3, emergente: 1, estabelecida: 0 },
      },
      {
        text: "Aumentar preço sem perder clientes",
        scores: { invisivel: 0, desconhecida: 1, emergente: 3, estabelecida: 1 },
      },
      {
        text: "Escalar — quero atender mais sem trabalhar mais horas",
        scores: { invisivel: 0, desconhecida: 0, emergente: 1, estabelecida: 3 },
      },
    ],
  },
  {
    id: 6,
    question: "Quando você envia uma proposta, o que geralmente acontece?",
    options: [
      {
        text: "Maioria ignora ou diz que vai pensar e some",
        scores: { invisivel: 3, desconhecida: 1, emergente: 0, estabelecida: 0 },
      },
      {
        text: "Recebo respostas, mas preciso de várias reuniões para fechar",
        scores: { invisivel: 1, desconhecida: 3, emergente: 1, estabelecida: 0 },
      },
      {
        text: "Fecho cerca de metade, mas o ciclo de venda é longo",
        scores: { invisivel: 0, desconhecida: 1, emergente: 3, estabelecida: 1 },
      },
      {
        text: "Fecho a maioria em 1-2 conversas",
        scores: { invisivel: 0, desconhecida: 0, emergente: 1, estabelecida: 3 },
      },
    ],
  },
  {
    id: 7,
    question: "Se um cliente te indicasse para alguém, como ele te descreveria?",
    options: [
      {
        text: "Provavelmente não saberia o que dizer além de 'faz um trabalho legal'",
        scores: { invisivel: 3, desconhecida: 1, emergente: 0, estabelecida: 0 },
      },
      {
        text: "Diria que sou competente, mas sem um diferencial claro",
        scores: { invisivel: 1, desconhecida: 3, emergente: 1, estabelecida: 0 },
      },
      {
        text: "Teria algo específico para falar sobre meu trabalho",
        scores: { invisivel: 0, desconhecida: 1, emergente: 3, estabelecida: 1 },
      },
      {
        text: "Me descreveria como O especialista em [meu nicho]",
        scores: { invisivel: 0, desconhecida: 0, emergente: 1, estabelecida: 3 },
      },
    ],
  },
];

export const profiles: Record<string, QuizProfile> = {
  invisivel: {
    id: "invisivel",
    title: "Competente Invisível",
    subtitle: "Você é bom no que faz, mas o mercado não sabe.",
    description:
      "Você tem habilidade técnica, entrega resultados, mas vive correndo atrás de clientes. Compete por preço porque ninguém te conhece. A boa notícia: seu potencial de crescimento é enorme quando você ativa o posicionamento certo.",
    strengths: [
      "Competência técnica sólida",
      "Capacidade de entrega comprovada",
      "Potencial de crescimento máximo",
    ],
    risks: [
      "Cada mês sem posicionamento = R$ 3.000+ deixados na mesa",
      "Concorrentes menos qualificados estão se posicionando agora",
      "IA está substituindo serviços commoditizados",
    ],
    cta: "O Método M.A.R. foi criado exatamente para o seu perfil. Em 90 dias, você sai do anonimato e vira a escolha óbvia.",
  },
  desconhecida: {
    id: "desconhecida",
    title: "Marca Desconhecida",
    subtitle: "Você sabe que é diferente, mas o cliente não percebe.",
    description:
      "Você tem experiência e entrega valor, mas é visto como 'mais um' no mercado. Clientes comparam seu preço com concorrentes menos qualificados. Falta um sistema para tornar seu valor VISÍVEL.",
    strengths: [
      "Experiência e resultados reais",
      "Alguns clientes reconhecem seu valor",
      "Base para escalar rapidamente",
    ],
    risks: [
      "Você está perdendo vendas para quem é pior mas é mais visível",
      "Sem sistema, indicações são aleatórias e imprevisíveis",
      "O teto de renda só quebra com posicionamento estratégico",
    ],
    cta: "O Pilar 2 do M.A.R. (Personalização) vai transformar como o mercado percebe você. Em 60 dias, clientes param de comparar preço.",
  },
  emergente: {
    id: "emergente",
    title: "Autoridade Emergente",
    subtitle: "Você já tem reconhecimento, mas é inconsistente.",
    description:
      "Você já recebe indicações e tem clientes que valorizam seu trabalho. Mas falta SISTEMA. Um mês é ótimo, outro é fraco. Você precisa transformar resultados esporádicos em uma máquina previsível.",
    strengths: [
      "Já tem prova social real",
      "Alguns clientes pagam premium",
      "Reconhecimento inicial no nicho",
    ],
    risks: [
      "Sem sistema, você depende de sorte para manter resultado",
      "Concorrentes com sistema vão ultrapassar você",
      "O salto de preço depende de prova social estruturada",
    ],
    cta: "O Pilar 3 do M.A.R. (Prova Social Sistemática) é sua alavanca. Em 90 dias, cada cliente gera 2-3 novos automaticamente.",
  },
  estabelecida: {
    id: "estabelecida",
    title: "Autoridade Estabelecida",
    subtitle: "Você já é reconhecido, mas quer multiplicar.",
    description:
      "Você já tem posicionamento e clientes que pagam bem. Mas quer escalar sem trabalhar mais horas. Precisa de um sistema que multiplique seus resultados atuais e te posicione como A referência do mercado.",
    strengths: [
      "Posicionamento consolidado",
      "Clientes premium recorrentes",
      "Autoridade reconhecida no nicho",
    ],
    risks: [
      "Sem escada de valor, você atinge teto de capacidade",
      "Mercado muda rápido — autoridade precisa ser mantida",
      "Oportunidade de multiplicar receita com sistema estruturado",
    ],
    cta: "O M.A.R. completo vai estruturar sua escada de valor. Multiplique receita cobrando 3-5x mais com os mesmos clientes.",
  },
};

export function calculateProfile(answers: number[]): QuizProfile {
  const scores = { invisivel: 0, desconhecida: 0, emergente: 0, estabelecida: 0 };

  answers.forEach((answerIndex, questionIndex) => {
    const question = quizQuestions[questionIndex];
    if (question && question.options[answerIndex]) {
      const option = question.options[answerIndex];
      scores.invisivel += option.scores.invisivel;
      scores.desconhecida += option.scores.desconhecida;
      scores.emergente += option.scores.emergente;
      scores.estabelecida += option.scores.estabelecida;
    }
  });

  const maxProfile = Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a));
  return profiles[maxProfile[0]];
}
