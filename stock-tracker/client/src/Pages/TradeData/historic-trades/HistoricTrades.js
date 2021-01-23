import React from "react";
import { Table } from "../../../Components/Tables/Table";
import "./HistoricTrades.css";

function HistoricTrades(props) {
  const history = props.props;
  console.log(history);
  return (
    <div className="historicTrades">
      <div className="historicTrades__title">Trade Log</div>

      {history
        ? history.portfolios.map((portfolio, index) => {
            console.log(history.positions);
            return (
              <Table key={index} color="light">
                <thead>{portfolio.name}</thead>
                <tbody>
                  <tr className="main-table-header">
                    <th>Ticker</th>
                    <th>Action</th>
                    <th>Purchase Date</th>
                    <th>Cost</th>
                  </tr>
                  {history.positions.map((position, index) => {
                    console.log(position);
                    return (
                      <tr key={index}>
                        <td>{position.ticker}</td>
                        <td>{position.action}</td>
                        <td>{position.purchaseDate}</td>
                        <td>{position.cost}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            );
          })
        : null}
    </div>
  );
}

export default HistoricTrades;
