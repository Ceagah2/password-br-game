export type Rule = {
  id: number;
  description: string;
  hint: string;
  validatorKey: string; 
};

export const RULES: Rule[] = [
  {
    id: 1,
    description: "Sua senha deve ter pelo menos 8 caracteres",
    hint: "Vamos começar tranquilo?.",
    validatorKey: "initialPasswordLetters",
  },
  {
    id: 2,
    description:
      "Sua senha deve ter pelo menos dois numeros.",
    hint: "Vamos dificultar para que voce nao seja hackeado.",
    validatorKey: "initialPasswordNumbers ",
  },
  {
    id: 3,
    description:
      "Toda senha começa com algo que já está dentro de você: escolha um humor que te representa agora.",
    hint: "Aquele desenho colorido é uma ótima forma de iniciar o jogo!",
    validatorKey: "emotion",
  },

  {
    id: 4,
    description:
      "Vamos testar sua habilidade geográfica. Cite um estado brasileiro, mas só a sigla oficial.",
    hint: "Duas letras te separam da próxima regra...",
    validatorKey: "stateUF",
  },
  {
    id: 5,
    description:
      "Toda boa história precisa de um protagonista. Escolha um animal tipicamente brasileiro.",
    hint: "Vale qualquer um mesmo. Aquele que tem uma armadurinha, aquela pintada, até aquela que come vaca.",
    validatorKey: "animal",
  },
  {
    id: 6,
    description:
      "Sua senha precisa ter movimento. Adicione o nome de um esporte praticado no Brasil.",
    hint: "Pé, mâo, bola, depende só de você.",
    validatorKey: "sports",
  },
  {
    id: 7,
    description:
      "Coloque um toque de brasilidade pop. Cite uma comida típica do nosso país.",
    hint: "Eu sei que voce sabe...",
    validatorKey: "food",
  },
  {
    id: 8,
    description:
      "Sua senha precisa respirar cultura. Adicione um instrumento musical brasileiro.",
    hint: "Guitarra não foi criada no Brasil. Mas aquele la foi ...",
    validatorKey: "instrument",
  },
  {
    id: 9,
    description:
      "Um toque de humor sempre ajuda. Coloque uma gíria tipicamente brasileira.",
    hint: "Você já ouviu um amigo falando algo, que nao entendeu",
    validatorKey: "slang",
  },

  {
    id: 10,
    description:
      "Vamos relembrar histórias. Cite o nome de um mascote de Copa do Mundo.",
    hint: "Eu lembro do paninho, mas quem era o paninho?",
    validatorKey: "mascot",
  },
  {
    id: 11,
    description:
      "Todo brasileiro sabe pelo menos um meme clássico. Coloque o nome de um meme famoso.",
    hint: "Voce lembra daquele? Nem eu ...",
    validatorKey: "meme",
  },
  {
    id: 12,
    description:
      "Sua senha precisa de ritmo. Inclua um gênero musical brasileiro.",
    hint: "Pode ser aquele tuts tuts, ou aquele tchen nem nem.",
    validatorKey: "musicGenre",
  },
  {
    id: 13,
    description:
      "Um pouco de nostalgia nunca fez mal. Mencione um programa infantil famoso no Brasil.",
    hint: "Eu acordava cedo nos sabados para assistir ... Que infância boa!",
    validatorKey: "tvShow",
  },
  {
    id: 14,
    description:
      "Sua senha precisa de um toque de natureza. Coloque uma árvore típica brasileira.",
    hint: "Aquela bem bonita que você conhece. Voce ja viu ela...",
    validatorKey: "tree",
  },
  {
    id: 15,
    description:
      "Para garantir conhecimento geral, cite um rio famoso do Brasil.",
    hint: "Pode ser o fedido, aquele grandão em S, ou aquele com nome de dupla sertaneja",
    validatorKey: "river",
  },
  {
    id: 16,
    description:
      "Agora algo para exercitar a mente. Coloque o nome de uma invenção brasileira.",
    hint: "Aqui eu quero ver...",
    validatorKey: "invention",
  },
  {
    id: 17,
    description:
      "Sua senha precisa de um toque esportivo histórico. Cite um campeão brasileiro de Copa do Mundo (jogador).",
    hint: "Você já gritou o nome dele, na frente da Tv num domingo.",
    validatorKey: "worldCupWinner",
  },
  {
    id: 18,
    description:
      "Um pouco de biografia cultural. Coloque o nome de um escritor brasileiro.",
    hint: "Ferramenta, Inspetora, Gente ... Puxa na mente ai",
    validatorKey: "author",
  },
  {
    id: 19,
    description:
      "Agora pense pequeno. Inclua o nome de um município brasileiro com menos de 50 mil habitantes.",
    hint: "Se vira...",
    validatorKey: "smallTown",
  },
  {
    id: 20,
    description:
      "O toque final: prove que você é persistente. Inclua o dia atual da semana, por extenso.",
    hint: "Precisamos garantir que voce está no presente.",
    validatorKey: "weekday",
  },
];
