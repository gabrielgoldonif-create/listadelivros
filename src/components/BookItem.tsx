// src/components/BookItem.tsx
import type { Book } from "../types/book";
import "../App.css";

interface BookItemProps {
  book: Book;
}

export default function BookItem({ book }: BookItemProps) {
  return (
    <li className="book-item">
      <strong>{book.title}</strong>
      <span className="book-author"> — {book.author}</span>
      <span className="book-status">
        {book.status === "Lido" ? "📗 Lido" : "📕 Não lido"}
      </span>
    </li>
  );
}
