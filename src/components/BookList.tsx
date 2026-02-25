// src/components/BookList.tsx
import type { Book } from "../types/book";
import BookItem from "./BookItem";
import "../App.css";

interface BookListProps {
  books: Book[];
  onDelete: (id: string) => void;
}

export default function BookList({ books, onDelete }: BookListProps) {
  if (books.length === 0) {
    return <p className="text-muted">Nenhum livro cadastrado.</p>;
  }

  return (
    <ul className="book-list">
      {books.map((b) => (
        <BookItem key={b._id} book={b} onDelete={onDelete} />
      ))}
    </ul>
  );
}
