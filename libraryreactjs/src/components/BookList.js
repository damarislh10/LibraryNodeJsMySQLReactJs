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

  let { titulo, autor, edicion } = book;

  const handleUpdate = (id) => {
    edicion = parseInt(edicion, 10);
    // validacion de los datos
    if (titulo === "" || autor === "" || edicion <= 0) {
      alert("Todos los campos son obligatorios");
      return;
    }
    const requestInit = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    };
    fetch(`${url}/${id}`, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));
    setBook({
      titulo: "",
      autor: "",
      edicion: 0,
    });
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
                <button
                  onClick={() => handleUpdate(book.idbooks)}
                  className="btn btn-warning"
                >
                  Update
                </button>
              </div>

            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
