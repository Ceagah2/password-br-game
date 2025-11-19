import { normalize } from "./normalize";
import { Validator } from "./types";

const WINNERS = [
  "Aldair", // Aldair
  "Altair", // Altair
  "Amarildo", // Amarildo
  "Ânderson", // Anderson Polga
  "Coutinho", // Coutinho
  "Zetti", // Zetti
  "Carlos", // Carlos Alberto Torres
  "Castilho", // Castilho
  "Dunga", // Dunga
  "Branco", // Branco
  "Taffarel", // Taffarel
  "Clodoaldo", // Clodoaldo
  "Zinho", // Zinho
  "Dario", // Dadá Maravilha
  "Denílson", // Denílson
  "Dino", // Dino Sani
  "Djalma", // Djalma Santos
  "Edílson", // Edílson
  "Pele", // Pelé
  "Ado", // Ado
  "Tostao", // Tostão
  "Dida", // Dida (1958)
  "Vava", // Vavá
  "Leal", // Leão
  "Everaldo", // Everaldo
  "Félix", // Félix
  "Gérson", // Gérson
  "Gilberto", // Gilberto Silva
  "Gilmar", // Gilmar (1958/62)
  "GilmarRinaldi", // Gilmar Rinaldi
  "Brito", // Brito
  "Hideraldo", // Bellini
  "Mazinho", // Mazinho
  "Jair", // Jair da Costa
  "JairMarinho", // Jair Marinho
  "Jairzinho", // Jairzinho
  "Jenílson", // Júnior
  "Joel", // Joel (1958)
  "JoelCamargo", // Joel Camargo
  "Edu", // Edu (1970)
  "Jorginho", // Jorginho
  "Baldocchi", // Baldocchi
  "Bebeto", // Bebeto
  "Edilmilson", // Edmílson
  "Fontana", // Fontana
  "Kleberson", // Kléberson
  "Mazzola", // Mazzola
  "Pepe", // Pepe
  "RoqueJunior", // Roque Júnior
  "ZeMaria", // Zé Maria
  "Zequinha", // Zequinha
  "Zito", // Zito
  "Juliano", // Belletti
  "Jurandir", // Jurandir
  "Leonardo", // Leonardo
  "Lucio", // Lúcio
  "Muller", // Muller
  "Luizao", // Luizão
  "Manoel", // Garrincha
  "Márcio", // Márcio Santos
  "MarcoAntonio", // Marco Antônio
  "Cafu", // Cafu
  "Marcos", // Marcos (2002)
  "Vampeta", // Vampeta
  "Zagallo", // Zagallo
  "Mauro", // Mauro (1958/62)
  "MauroSilva", // Mauro Silva
  "Mengálvio", // Mengálvio
  "Moacir", // Moacir
  "Dida", // Dida (2002)
  "Newton", // De Sordi
  "Nílton", // Nilton Santos
  "Orlando", // Orlando
  "JuninhoPaulista", // Juninho Paulista
  "PauloCaju", // Paulo Cézar Caju
  "PauloSergio", // Paulo Sérgio
  "Viola", // Viola
  "Raí", // Raí
  "kaka", // Kaká
  "Ricardo", // Ricardo Rocha
  "Ricardinho", // Ricardinho
  "Rivaldo", // Rivaldo
  "Rivellino", // Rivellino
  "RobertoCarlos", // Roberto Carlos
  "RobertoMiranda", // Roberto Miranda
  "RogérioCeni", // Rogério Ceni
  "Romário", // Romário
  "Ronaldão", // Ronaldão
  "Ronaldinho", // Ronaldinho Gaúcho
  "Ronaldo", // Ronaldo Fenômeno
  "Valdemar", // Oreco
  "Valdir", // Didi
  "Wilson", // Piazza
  "Zozimo", // Zózimo
];

export const worldCupWinner: Validator = (input) => {
  const n = normalize(input);
  const found = WINNERS.some((w) => n.includes(w));
  return found
    ? { valid: true }
    : {
        valid: false,
        message: "Esse todo mundo sabe. Tenta escrever os nomes juntos. Sem espaços.",
      };
};
