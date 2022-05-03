import React from "react";

export const BookList = ({ books }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Edition</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.idbooks}>
            <th>{book.idbooks}</th>
            <th>{book.titulo}</th>
            <th>{book.autor}</th>
            <th>{book.edicion}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
