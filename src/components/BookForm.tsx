// src/components/BookForm.tsx
import { useState } from "react";
import type { BookBase, BookStatus } from "../types/book";
import "../App.css";

interface BookFormProps {
  onAdd: (book: BookBase) => Promise<void>;
}

export default function BookForm({ onAdd }: BookFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState<BookStatus>("Não lido");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title.trim() || !author.trim()) {
      alert("Preencha título e autor.");
      return;
    }

    await onAdd({
      title: title.trim(),
      author: author.trim(),
      status,
    });

    // limpa o formulário
    setTitle("");
    setAuthor("");
    setStatus("Não lido");
  }

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <div className="book-form-row">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="book-form-input"
        />
        <input
          type="text"
          placeholder="Autor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="book-form-input"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as BookStatus)}
          className="book-form-select"
        >
          <option value="Não lido">Não lido</option>
          <option value="Lido">Lido</option>
        </select>
        <button type="submit" className="book-form-button">
          + Adicionar
        </button>
      </div>
    </form>
  );
}
