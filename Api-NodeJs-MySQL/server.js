const express = require("express");
const mysql = require("mysql"); // modules install
const myconn = require("express-myconnection");

const routes = require("./routes");

const app = express();
app.set("port", process.env.PORT || 9000); // despliega app hosting

const dbOptions = {
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "damaris9348",
  database: "library",
  multipleStatements: true,
};
// middlewares -----------------------------
app.use(myconn(mysql, dbOptions, "single"));
app.use(express.json());

// cors -----------------------------------
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// routes -----------------------------
app.get("/", (req, res) => {
  res.send("Welcome to My API"); // responder
}); // ruta principal

app.use("/api", routes);

// server running ------------------
app.listen(app.get("port"), () => {
  console.log("server running on port", app.get("port"));
}); // escuchar servidor
