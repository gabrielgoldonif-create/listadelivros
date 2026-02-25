import "./App.css";
import { useState } from "react";
import type { Book } from "./types/book";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

function App() {
  const [books, setBooks] = useState<Book[]>([
    {
      _id: "1",
      title: "Clean Code",
      author: "Robert C. Martin",
      status: "Lido",
    },
    {
      _id: "2",
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      status: "Não lido",
    },
  ]);

  async function handleAdd(newBook: Omit<Book, "_id">) {
    const newEntry: Book = {
      ...newBook,
      _id: Date.now().toString(),
    };

    setBooks((prev) => [...prev, newEntry]);
  }

  async function handleDelete(id: string) {
    setBooks((prev) => prev.filter((b) => b._id !== id));
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Catálogo de Livros</h1>

      <BookForm onAdd={handleAdd} />

      <BookList books={books} onDelete={handleDelete} />
    </div>
  );
}

export default App;