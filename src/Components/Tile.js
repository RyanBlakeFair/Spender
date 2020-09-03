import React, { useState, useEffect } from "react";
import "../App.css";
import { v4 as uuidv4 } from "uuid";

function Tile(props) {
  const [tile, setTile] = useState(
    JSON.parse(localStorage.getItem(props.id) || "null") || {
      week: props.id,
      pay: "",
      expenses: [],
    }
  );

  useEffect(() => {
    localStorage.setItem(tile.week, JSON.stringify(tile));
  }, [tile]);

  const [toAdd, setToAdd] = useState({ item: "", cost: 0 });

  function setPay(p) {
    let payNum = p.target.value;
    if (!Number(payNum)) {
      return;
    }
    setTile({ ...tile, pay: p.target.value });
  }

  function setCost(c) {
    setToAdd({ ...toAdd, cost: c.target.value });
  }

  function setItem(i) {
    setToAdd({ ...toAdd, item: i.target.value });
  }

  function submitAdd(event) {
    event.preventDefault();
    if (!toAdd.item || !toAdd.cost) return;
    setTile({
      ...tile,
      expenses: [...tile.expenses, toAdd],
    });
    document.getElementById(spendList).reset();
    document.getElementById(expenseItem).focus();
    setToAdd({ item: "", cost: 0 });
  }

  function removeExpense(i) {
    setTile({
      ...tile,
      expenses: [...tile.expenses.filter((expense, index) => index !== i)],
    });
  }

  const payList = tile.expenses.map((tile, i) => (
    <li className="pl-1 flex flex-row" key={i}>
      {tile.item} <p className="ml-auto pr-4">${tile.cost}</p>
      <button
        onClick={() => {
          removeExpense(i);
        }}
        style={{ outline: "none" }}
      >
        <span role="img" aria-label="cross">
          ❌
        </span>
      </button>
    </li>
  ));

  let totalSpent = 0;
  tile.expenses.forEach((expense) => (totalSpent += Number(expense.cost)));

  let totalSaved = Math.round((tile.pay - totalSpent) * 100) / 100;

  const showPay = tile.pay.length > 0 ? tile.pay : "Enter Pay";

  const pay = uuidv4();
  const spendList = uuidv4();
  const expenseCost = uuidv4();
  const expenseItem = uuidv4();

  return (
    <div className="scale-up-center paper bg-white rounded px-4 pt-2 pb-2 pl-10">
      <h1 className="font-bold text-lg">
        {" "}
        <span role="img" aria-label="cal" className="flex flex-row">
          📅 {tile.week}
          <button
            className="ml-auto jiggle"
            style={{ outline: "none" }}
            onClick={() => props.removeTile(props.id)}
          >
            <span role="img" aria-label="bin">
              🗑️
            </span>
          </button>
        </span>
      </h1>
      <hr />
      <div className="flex flex-row pt-2">
        <p>
          <span role="img" aria-label="cash">
            💵 Paycheck:{" "}
          </span>
        </p>
        <input
          id={pay}
          type="text"
          placeholder={showPay}
          className="bg-white ml-auto text-right"
          style={{ width: "5rem" }}
          onChange={setPay}
        />
      </div>
      <div className="flex flex-row mt-1">
        <p>
          <span role="img" aria-label="bag">
            💰 Total Spent:
          </span>
        </p>
        <p className="ml-auto">${totalSpent}</p>
      </div>
      <div className="flex flex-row mt-1">
        <p>
          <span role="img" aria-label="bag">
            🤑 Saved:
          </span>
        </p>
        <p
          className="ml-auto"
          style={totalSaved > 0 ? { color: "green" } : { color: "red" }}
        >
          ${totalSaved}
        </p>
      </div>
      <hr />
      <form id={spendList}>
        <div className="flex flex-row">
          <h1 className="font-bold text-lg mt-2 pb-1 flex flex-row">
            <span role="img" aria-label="fire">
              🔥 Expenses:{" "}
            </span>
          </h1>
          <button
            style={{ outline: "none" }}
            type="submit"
            onClick={submitAdd}
            className="mt-2 ml-auto"
          >
            <span role="img" aria-label="plus">
              ➕
            </span>
          </button>
        </div>
        <div className="pl-1 flex flex-row mb-2">
          <input
            id={expenseItem}
            type="text"
            value={tile.expenses.item}
            placeholder="Item"
            onChange={setItem}
            style={{ width: "90%" }}
          />
          <input
            id={expenseCost}
            type="number"
            value={tile.expenses.cost}
            placeholder="Cost"
            style={{ width: "4rem" }}
            className="ml-auto text-right"
            onChange={setCost}
          />
        </div>
      </form>
      <hr />
      <div>
        <ul>{payList}</ul>
      </div>
    </div>
  );
}

export default Tile;
