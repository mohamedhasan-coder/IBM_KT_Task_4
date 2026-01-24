export default function BookCard({ book, onDelete, onEdit }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border">
      <h3 className="text-lg font-bold text-blue-600">
        {book.title}
      </h3>

      <p className="text-sm text-gray-700">
        <b>Author:</b> {book.author}
      </p>
      <p className="text-sm text-gray-700"> 
        <b>Category:</b> {book.category}
      </p>
      <p className="text-sm text-gray-700">
        <b>Year:</b> {book.publishedYear}
      </p>
      <p className="text-sm text-gray-700"> 
        <b>Available:</b> {book.availableCopies}
      </p>

      <div className="flex gap-2 mt-3">
        <button
          onClick={() => onEdit(book)}
          className="flex-1 bg-yellow-500 text-white py-1 rounded"
        >
          Edit
        </button>

        <button
          disabled={book.availableCopies > 0}
          onClick={() => onDelete(book._id)}
          className="flex-1 bg-red-500 text-white py-1 rounded disabled:bg-gray-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

