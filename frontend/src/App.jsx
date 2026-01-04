import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import BookForm from "./components/BookForm";
import BookCard from "./components/BookCard";

export default function App() {
  const [books, setBooks] = useState([]);
  const [editBook, setEditBook] = useState(null);

  const load = async () => {
    const res = await axios.get("http://localhost:5000/api/books");
    setBooks(res.data);
  };

  useEffect(() => { load(); }, []);

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:5000/api/books/${id}`);
    load();
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="p-6 w-full">
          <BookForm
            reload={load}
            editBook={editBook}
            clearEdit={() => setEditBook(null)}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {books.map(b => (
              <BookCard
                key={b._id}
                book={b}
                onDelete={deleteBook}
                onEdit={setEditBook}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
