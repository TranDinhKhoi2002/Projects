import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditting, setIsEditting] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditting(false);
  };

  const startEditting = () => {
    setIsEditting(true);
  };

  const stopEditting = () => {
    setIsEditting(false);
  };

  return (
    <div className="new-expense">
      {!isEditting && <button onClick={startEditting}>Add New Expense</button>}
      {isEditting && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onStopEditting={stopEditting}
        />
      )}
    </div>
  );
};

export default NewExpense;
