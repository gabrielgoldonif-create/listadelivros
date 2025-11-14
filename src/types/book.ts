
// status possível do livro: lido ou não lido
export type BookStatus = "Lido" | "Não lido";

// dados básicos de um livro 
export interface BookBase {
  title: string;
  author: string;
  status: BookStatus;
}

// livro completo retornado pela API (vem com _id do crudcrud)
export interface Book extends BookBase {
  _id: string;
}
