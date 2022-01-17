import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const deleteHandler = () => {
    props.onDeleteExpense(props.id);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button type="button" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
