import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Insurance", amount: 154, date: new Date(2023, 8, 6) },
    { title: "Phone", amount: 560, date: new Date(2023, 8, 6) },
    { title: "Rent", amount: 356, date: new Date(2023, 8, 6) },
    { title: "Food", amount: 122, date: new Date(2023, 8, 6) },
  ];

  return (
    <div className="App">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
