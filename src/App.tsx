// src/App.tsx
import "./App.css";
import { useEffect, useState } from "react";
import type { Book } from "./types/book";
import { getBooks, addBook, deleteBook } from "./api/bookApi";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function loadBooks() {
    try {
      setError(null);
      setLoading(true);
      const data = await getBooks();
      setBooks(data);
    } catch (err) {
      setError("Erro ao carregar livros.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBooks();
  }, []);

  async function handleAdd(newBook: Omit<Book, "_id">) {
    await addBook(newBook);
    await loadBooks(); // recarrega lista após adicionar
  }

  async function handleDelete(id: string) {
    await deleteBook(id);
    // atualiza estado localmente
    setBooks((prev) => prev.filter((b) => b._id !== id));
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Catálogo de Livros</h1>

      <BookForm onAdd={handleAdd} />

      {loading && <p>Carregando...</p>}
      {error && <p className="text-error">{error}</p>}

      {!loading && !error && (
        <BookList books={books} onDelete={handleDelete} />
      )}
    </div>
  );
}

export default App;
