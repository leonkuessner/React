const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "stockapp",
});

app.get("/getEverything", (req, res) => {
  const resultConcat = { positions_data: {}, portfolios_data: {} };

  db.query(
    "SELECT positions_history.id, ticker, purchaseDate, cost, portfolioId, action, group_concat(name) as name FROM portfolios_history INNER JOIN positions_history ON portfolios_history.id = positions_history.portfolioId GROUP BY id",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        resultConcat.positions_data = result;
        db.query("SELECT name FROM portfolios_history", (err, result) => {
          console.log(result);
          resultConcat.portfolios_data = result;
          res.send(resultConcat);
        });
      }
    }
  );
});

app.post("/addPosition", (req, res) => {
  const newPosition = req.body.newPosition;

  const portfolio = newPosition.portfolio;
  const ticker = newPosition.ticker;
  const date = newPosition.date;
  const cost = newPosition.cost;
  const currency = newPosition.currency;
  //   const portfolioId = null;

  console.log(newPosition);

  db.query(
    "SELECT id FROM `portfolios` WHERE `name`=?",
    [portfolio],
    (err, result) => {
      console.log("Goteeenn");
      console.log(result.insertId);
      db.query(
        "INSERT INTO positions_history (ticker, purchaseDate, cost, portfolioId) VALUES (?,?,?,?)",
        [ticker, date, cost, result[0].id],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        }
      );
    }
  );
});

app.listen(5000, () => {
  console.log("running");
});
