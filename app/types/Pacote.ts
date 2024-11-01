// types/Pacote.ts
export interface Item {
  emoji?: string;
  text: string;
}

export interface Pacote {
  titulo: string;
  tipo: string;
  items: Item[];
  preco?: string;
}
