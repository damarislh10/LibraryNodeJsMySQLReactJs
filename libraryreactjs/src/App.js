import React, { Fragment, useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
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
  const [listUpdated, setListUpdated] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setBooks(data);
    };
    getBooks();
    setListUpdated(false);
  }, [listUpdated]);

  return (
    <Fragment>
      <Navbar brand="Library App" />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{ textAlign: "center" }}>Book List</h2>
            <BookList book={book} books={books} setBook={setBook} setListUpdated={setListUpdated} />
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
