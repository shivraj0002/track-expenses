import React, { useState } from "react";
import "./ExpenseForm.css";
export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDAte] = useState("");
  const [checkValue, setCheckValue] = useState(false);

  const inputChangeHandeler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandeler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangHandeler = (event) => {
    setEnteredDAte(event.target.value);
  };
  const submitHandeler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    cancelBtnHandler();
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDAte("");
  };
  const changeValueBtnHandler = () => {
    setCheckValue(true);
  };
  const cancelBtnHandler = () => {
    setCheckValue(false);
  };
  if (checkValue) {
    return (
      <form onSubmit={submitHandeler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={inputChangeHandeler}
              value={enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandeler}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangHandeler}
              value={enteredDate}
            />
          </div>
          <div className="new-expense__actions">
            <button type="cancel" onClick={cancelBtnHandler}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    );
  } else {
    return <button onClick={changeValueBtnHandler}>Add Expense</button>;
  }
}
