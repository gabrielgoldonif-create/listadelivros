// src/api/bookApi.ts
import axios from "axios";
import type { Book, BookBase } from "../types/book";

// ⚠️ IMPORTANTE: mantenha o /livros no final
const API_URL =
  "https://crudcrud.com/api/255d482dec6c40d091a4058e6bc5d097/livros";

// GET - listar livros
export async function getBooks(): Promise<Book[]> {
  const { data } = await axios.get<Book[]>(API_URL);
  return data;
}

// POST - adicionar novo livro
export async function addBook(payload: BookBase): Promise<Book> {
  const { data } = await axios.post<Book>(API_URL, payload);
  return data;
}

// DELETE - remover livro
export async function deleteBook(id: string): Promise<void> {
  await axios.delete(`${API_URL}/${id}`);
}
