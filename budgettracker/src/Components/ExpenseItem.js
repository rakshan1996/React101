import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2023, 8, 5);
  const expenseTitle = "Food";
  const expenseAmount = 190;

  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">Rs {expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
