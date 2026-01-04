import { useEffect, useState } from "react";
import axios from "axios";

export default function BookForm({ reload, editBook, clearEdit }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    publishedYear: "",
    availableCopies: ""
  });

  useEffect(() => {
    if (editBook) setBook(editBook);
  }, [editBook]);

  const submit = async () => {
    const payload = {
      ...book,
      publishedYear: Number(book.publishedYear),
      availableCopies: Number(book.availableCopies)
    };

    if (editBook) {
      await axios.put(
        `http://localhost:5000/api/books/${editBook._id}`,
        payload
      );
      clearEdit();
    } else {
      await axios.post("http://localhost:5000/api/books", payload);
    }

    setBook({
      title: "",
      author: "",
      category: "",
      publishedYear: "",
      availableCopies: ""
    });

    reload();
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-3">
        {editBook ? "Edit Book" : "Add Book"}
      </h2>

      {["title","author","category","publishedYear","availableCopies"].map(f => (
        <input
          key={f}
          value={book[f]}
          placeholder={f}
          className="border p-2 w-full mb-2"
          onChange={e => setBook({ ...book, [f]: e.target.value })}
        />
      ))}

      <button
        onClick={submit}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        {editBook ? "Update Book" : "Add Book"}
      </button>
    </div>
  );
}
