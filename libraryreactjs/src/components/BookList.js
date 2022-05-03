import React from "react";
import { url } from "../helpers/dataApi";

export const BookList = ({ book, setBook, books, setListUpdated }) => {
  const handleDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    };
    fetch(`${url}/${id}`, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    setListUpdated(true);
  };
  return (
    <table className="table text-center">
      <thead className="text-center">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Edition</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.idbooks}>
            <td>{book.idbooks}</td>
            <td>{book.titulo}</td>
            <td>{book.autor}</td>
            <td>{book.edicion}</td>
            <td>
              <div className="mb-3">
                <button
                  onClick={() => handleDelete(book.idbooks)}
                  className="btn btn-danger me-3"
                >
                  Delete
                </button>
                <button className="btn btn-warning">Edit</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
