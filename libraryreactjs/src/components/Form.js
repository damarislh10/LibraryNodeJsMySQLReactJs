import React from "react";
import { url } from "../helpers/dataApi";

export const Form = ({ book, setBook }) => {
  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };
  let { titulo, autor, edicion } = book;

  const handleSubmit = () => {
    edicion = parseInt(edicion, 10);
    // validacion de los datos
    if (titulo === "" || autor === "" || edicion <= 0) {
      alert("Todos los campos son obligatorios");
      return;
    }
    // consulta
    const requestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    };
    const res = fetch(url, requestInit);
    const data = res.json();
    console.log(data);

    // reiniciando state de libro
    setBook({
      titulo: "",
      autor: "",
      edicion: 0,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          name="titulo"
          value={titulo}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">
          Author
        </label>
        <input
          name="autor"
          value={autor}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="author"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="edition" className="form-label">
          Edition
        </label>
        <input
          name="edicion"
          value={edicion}
          onChange={handleChange}
          type="number"
          className="form-control"
          id="edition"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
