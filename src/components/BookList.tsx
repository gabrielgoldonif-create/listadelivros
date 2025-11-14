// src/components/BookList.tsx
import type { Book } from "../types/book";
import BookItem from "./BookItem";
import "../App.css";

interface BookListProps {
  books: Book[];
}

export default function BookList({ books }: BookListProps) {
  if (books.length === 0) {
    return <p className="text-muted">Nenhum livro cadastrado.</p>;
  }

  return (
    <ul className="book-list">
      {books.map((b) => (
        <BookItem key={b._id} book={b} />
      ))}
    </ul>
  );
}
