const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("select * from books", (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    });
  }); // responder ejecutar query datos
});

routes.post("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query("INSERT INTO books set ?", [req.body], (err, rows) => {
      console.log(req.body);
      if (err) return res.send(err);

      res.send("book added!");
    });
  }); // agregar
});

routes.delete("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "DELETE FROM books WHERE idbooks = ?",
      [req.params.id],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("book excluded!");
      }
    );
  }); // delete
});

routes.put("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "UPDATE books set ? WHERE idbooks = ?",
      [req.body, req.params.id],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("book updated!");
      }
    );
  });
});

module.exports = routes;
