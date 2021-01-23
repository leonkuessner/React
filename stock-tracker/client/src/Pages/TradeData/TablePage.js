import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table } from "../../Components/Tables/Table.js";
import AddNew from "./Add New/AddNew.js";
// import InputComponent from "../InputComponents/InputComponent.js";
import HistoricTrades from "./historic-trades/HistoricTrades.js";
import "./Table Styles/TableStyles.css";

const positions = require("./TableData.json");

function TablePage() {
  const [history, setHistory] = useState();

  function getEverything() {
    axios.get("/getEverything").then((res) => {
      console.log(res.data.portfolios_data);
      setHistory({
        positions: res.data.positions_data,
        portfolios: res.data.portfolios_data,
      });
    });
  }

  useEffect(() => {
    getEverything();
  }, []);

  return (
    <div className="tablePage">
      {console.log(history)}
      <div className="tablePage__overview">
        <div className="overview_header tablePage__portfolio-value">
          Portfolio Value
        </div>
        <div className="overview_header overview_middle tablePage__best-pie">
          Best Pie
        </div>
        <div className="overview_header overview_right tablePage__profit-loss">
          Total P/L
        </div>
      </div>

      <AddNew />
      {/* <InputComponent key="a" /> */}
      {/* <div className="tablePage__table1"> */}
      <Table color="light">
        <thead>All Your Stocks</thead>
        <tbody>
          <tr className="main-table-header">
            <th>Ticker</th>
            <th>Purchase Date</th>
            <th>Cost</th>
            <th>Mkt Value</th>
            <th>Total P/L</th>
          </tr>
          {/* {console.log(positions.currentPositions)} */}
          {positions.currentPositions.map((position, index) => {
            return (
              // <tr>
              <tr key={index}>
                <td>{position.ticker}</td>
                <td>{position.date}</td>
                <td>{position.cost}</td>
                <td>{position.value}</td>
                <td>{position.balance}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {/* </div> */}
      {/* {console.log(history.portfolios)} */}

      {history ? <HistoricTrades props={history} /> : null}
    </div>
  );
}

export default TablePage;
