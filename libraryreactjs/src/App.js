import React, { Fragment } from "react";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";
import { url } from "./helpers/dataApi";
import { BookList } from "./components/BookList";

function App() {
  const [books, setBook] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setBook(data);
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
            <BookList books={books}/>
          </div>
          <div className="col-5">
            <h2 style={{ textAlign: "center" }}>Book Form</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
