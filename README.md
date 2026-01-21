# Project Details – Library Management System

---

## 📌 Project Title

**Library Management System using Node.js, Express, MongoDB, and React**

---

## 📝 Project Description

The Library Management System is a full-stack web application developed to manage library book records efficiently. The system allows users to perform core CRUD (Create, Read, Update, Delete) operations on books while enforcing business rules and proper error handling. The application demonstrates backend API development, database schema design, conditional logic, and exception handling, along with a responsive frontend interface.

---

## 🎯 Project Objective

The main objectives of this project are:

- To design a MongoDB schema for managing library books  
- To implement CRUD operations using RESTful APIs  
- To apply business conditions such as preventing negative stock  
- To allow deletion of books only when available copies are zero  
- To handle errors like invalid ID, book not found, and invalid updates  
- To test APIs thoroughly using Postman  

---

## 🛠️ Technology Stack

### Backend
- **Node.js** – Server-side runtime environment  
- **Express.js** – Framework for building RESTful APIs  
- **MongoDB** – NoSQL database for storing book records  
- **Mongoose** – ODM for schema definition and database interaction  

### Frontend
- **React (Vite)** – User interface development  
- **Tailwind CSS** – Styling and responsive layout  

### Tools
- **Postman** – API testing  
- **MongoDB Shell** – Database-level testing  
- **Visual Studio Code** – Development environment  
- **Git & GitHub** – Version control  

---

## 🗄️ Database Design

### Database Details
- **Database Name:** `libraryDB`  
- **Collection Name:** `books`  

### Schema Structure

| Field Name        | Data Type |
|------------------|-----------|
| title            | String    |
| author           | String    |
| category         | String    |
| publishedYear    | Number    |
| availableCopies  | Number    |

### Schema Highlights
- All fields are mandatory  
- `availableCopies` is restricted to non-negative values  
- Schema validation ensures data consistency  

---

## ⚙️ Functional Features

### CRUD Operations

#### 1️⃣ Create Book
- Add new book records  
- Validates required fields and data types  

#### 2️⃣ Read Books
- View all available books in the library  

#### 3️⃣ Update Book
- Change book category  
- Increase or decrease available copies  
- Prevents negative stock updates  

#### 4️⃣ Delete Book
- Allowed only when `availableCopies = 0`  
- Prevents accidental deletion of available books  

---

## 📏 Business Rules Implemented

- Books cannot have negative available copies  
- Books cannot be deleted if copies are greater than zero  
- Invalid MongoDB ObjectIds are rejected  
- Non-existing books return proper error responses  

---

## ❗ Error Handling

The system handles the following exceptions:

- **Invalid Book ID format** – Returns `400 Bad Request`  
- **Book not found** – Returns `404 Not Found`  
- **Negative stock update** – Blocked by schema validation  
- **Delete not allowed** – Returns `400 Bad Request`  

All errors return meaningful JSON responses without crashing the server.

---

## 🧪 API Testing

- All APIs were tested using **Postman**  
- CRUD operations verified using real MongoDB ObjectIds  
- Exception handling tested using invalid IDs and rule violations  
- Screenshots captured as testing evidence  

---

## 🎨 Frontend Overview

- User-friendly interface with navbar and sidebar  
- Form to add and edit books  
- Card-based layout to display book details  
- Delete button disabled when copies > 0  
- Responsive design for different screen sizes  

---

## ✅ Project Outcome

The Library Management System successfully meets all sprint task requirements by implementing a validated database schema, complete CRUD operations, conditional business logic, and robust error handling. The project demonstrates a clear understanding of backend development, API testing, and full-stack integration.

---

## 🚀 Future Enhancements

- Search functionality  
- Filter books by category and year  
- User authentication and role management  
- Dashboard analytics  

---

## 🏁 Conclusion

This project provides a complete demonstration of a real-world CRUD-based application using modern web technologies. It follows best practices in schema design, API development, validation, and error handling, making it suitable for academic submission, internship evaluation, and portfolio presentation.
