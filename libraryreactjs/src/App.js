import React, { Fragment } from "react";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";
import { url } from "./helpers/dataApi";
import { BookList } from "./components/BookList";
import { Form } from "./components/Form";

function App() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({
    // inicializacion
    titulo: "",
    autor: "",
    edicion: 0,
  });

  useEffect(() => {
    const getBooks = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setBooks(data);
    };
    getBooks();
  }, []);

  return (
    <Fragment>
      <Navbar brand="Library App" />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{ textAlign: "center" }}>Book List</h2>
            <BookList books={books} />
          </div>
          <div className="col-5">
            <h2 style={{ textAlign: "center" }}>Book Form</h2>
            <Form book={book} setBook={setBook} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
