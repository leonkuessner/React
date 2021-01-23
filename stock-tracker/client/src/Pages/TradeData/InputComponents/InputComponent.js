import React, { useState, useEffect } from "react";
import axios from "axios";
import "./InputComponent Styles/InputComponent.css";

const initialState = {
  portfolio: "EV",
  ticker: "",
  date: "",
  cost: "",
  currency: "USD",
};

const InputComponent = () => {
  const [newInput, setNewInput] = useState(initialState);

  const formSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/addPosition", {
        newPosition: newInput,
      })
      .then((response) => {
        console.log(response);
      });

    setNewInput(initialState);
  };

  return (
    <div className="input__container">
      <table className="input__headers">
        <tbody>
          <tr className="input__main-header">
            <th className="input__label">Portfolio</th>
            <th className="input__label">Purchase Date</th>
            <th className="input__label">Ticker</th>
            <th className="input__label">Cost</th>
            <th className="input__label">Currency</th>
          </tr>
        </tbody>
      </table>
      <form className="input__form" onSubmit={formSubmit}>
        <select
          className="input__portfolio-option"
          name="Portfolio"
          onChange={(e) =>
            setNewInput({ ...newInput, portfolio: e.target.value })
          }
        >
          <option value="EV">EV</option>
          <option value="SPAC">SPAC</option>
        </select>
        <input
          className="input__date-input"
          type="date"
          onChange={(e) => setNewInput({ ...newInput, date: e.target.value })}
        />
        <input
          type="text"
          onChange={(e) => setNewInput({ ...newInput, ticker: e.target.value })}
        />
        <input
          type="text"
          onChange={(e) => setNewInput({ ...newInput, cost: e.target.value })}
        />
        <select
          className="input__currency-option"
          name="currency"
          onChange={(e) =>
            setNewInput({ ...newInput, currency: e.target.value })
          }
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
        {/* <div className="input__item">
          <div className="input__label portfolio-label">Portfolio</div>
          <select
            className="input__portfolio-option"
            name="Portfolio"
            onChange={(e) =>
              setNewInput({ ...newInput, portfolio: e.target.value })
            }
          >
            <option value="EV">EV</option>
            <option value="SPAC">SPAC</option>
          </select>
        </div>

        <div className="input__item">
          <div className="input__label date-label">Date</div>
          <input
            className="input__date-input"
            type="date"
            onChange={(e) => setNewInput({ ...newInput, date: e.target.value })}
          />
        </div>

        <div className="input__item">
          <div className="input__label">Ticker</div>
          <input
            type="text"
            onChange={(e) =>
              setNewInput({ ...newInput, ticker: e.target.value })
            }
          />
        </div>
        <div className="input__item">
          <div className="input__label">Cost</div>
          <input
            type="text"
            onChange={(e) => setNewInput({ ...newInput, cost: e.target.value })}
          />
        </div>
        <div className="input__item">
          <div className="input__label">currency</div>
          <select
            className="input__portfolio-option"
            name="Portfolio"
            onChange={(e) =>
              setNewInput({ ...newInput, currency: e.target.value })
            }
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputComponent;
