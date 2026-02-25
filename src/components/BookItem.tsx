// src/components/BookItem.tsx
import type { Book } from "../types/book";
import "../App.css";

interface BookItemProps {
  book: Book;
  onDelete: (id: string) => void;
}

export default function BookItem({ book, onDelete }: BookItemProps) {
  return (
    <li className="book-item">
      <div>
        <strong>{book.title}</strong>
        <span className="book-author"> — {book.author}</span>
        <span className="book-status">
          {book.status === "Lido" ? "📗 Lido" : "📕 Não lido"}
        </span>
      </div>

      <button
        type="button"
        className="book-delete-button"
        onClick={() => onDelete(book._id)}
      >
        Remover
      </button>
    </li>
  );
}
