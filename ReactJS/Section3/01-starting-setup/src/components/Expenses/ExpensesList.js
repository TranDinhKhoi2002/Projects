import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <p className="expenses-list__fallback">No expenses found!!!</p>;
  }

  const deleteExpenseHandler = (id) => {
    props.onDeleteExpense(id);
  };

  return (
    <ul className="expenses-list">
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            id={item.id}
            onDeleteExpense={deleteExpenseHandler}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
