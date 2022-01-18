import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [edittedTitle, setEdittedTitle] = useState("");
  const [edittedAmount, setEdittedAmount] = useState("");
  const [edittedDate, setEdittedDate] = useState("");

  const deleteHandler = () => {
    props.onDeleteExpense(props.id);
  };

  const startEditting = () => {
    setIsUpdating(true);
  };

  const stopEditting = () => {
    setIsUpdating(false);
  };

  const editTitleHandler = (event) => {
    setEdittedTitle(event.target.value);
  };

  const editAmountHandler = (event) => {
    setEdittedAmount(event.target.value);
  };

  const editDateHandler = (event) => {
    setEdittedDate(event.target.value);
  };

  const edittedExpense = {
    title: edittedTitle,
    amount: +edittedAmount,
    date: new Date(edittedDate),
    id: props.id,
  };

  const editExpense = () => {
    props.onEditExpense(edittedExpense);
    stopEditting();
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button
            type="button"
            className="button"
            style={{ backgroundColor: "rgb(133, 59, 59)" }}
            onClick={deleteHandler}
          >
            Delete
          </button>
          <button
            type="button"
            className="button"
            style={{ backgroundColor: "rgb(33, 100, 33)" }}
            onClick={startEditting}
          >
            Edit
          </button>
        </div>
      </Card>
      {isUpdating && (
        <form>
          <div className="edit-expense__controls">
            <div className="edit-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={edittedTitle}
                onChange={editTitleHandler}
              />
            </div>
            <div className="edit-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={edittedAmount}
                onChange={editAmountHandler}
              />
            </div>
            <div className="edit-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={edittedDate}
                onChange={editDateHandler}
              />
            </div>
          </div>
          <div className="edit-expense__buttons">
            <button
              type="button"
              onClick={stopEditting}
              className="button"
              style={{
                backgroundColor: "rgb(133, 59, 59)",
                marginRight: "1rem",
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={editExpense}
              className="button"
              style={{ backgroundColor: "rgb(33, 100, 33)" }}
            >
              Edit
            </button>
          </div>
        </form>
      )}
    </li>
  );
};

export default ExpenseItem;
