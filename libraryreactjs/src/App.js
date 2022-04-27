import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { url } from "./helpers/dataApi";
import BookList from "./components/BookList";

function App() {
  const [books, setBook] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setBook(data);
    };
    getBooks();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <h2>Book List</h2>
          <div>
            <h2>Book form</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
