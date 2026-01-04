const mongoose = require("mongoose");
const Book = require("../models/Book");

// CREATE
exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// READ
exports.getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// UPDATE
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid book ID format" });
    }

    const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE
exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid book ID format" });
    }

    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    if (book.availableCopies > 0) {
      return res
        .status(400)
        .json({ message: "Cannot delete book with copies" });
    }

    await book.deleteOne();
    res.json({ message: "Book deleted successfully" });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
