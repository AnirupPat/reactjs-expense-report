import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

function App() {
  let expense = [
    {
      title: "Car Insurance",
      amount: 242.56,
      date: new Date(2021, 5, 24),
    },
    {
      title: "Bike Insurance",
      amount: 142.56,
      date: new Date(2021, 5, 23),
    },
    {
      title: "Magazines",
      amount: 24.0,
      date: new Date(2021, 5, 22),
    },
    {
      title: "Groceries",
      amount: 100.0,
      date: new Date(2021, 5, 21),
    },
  ];
  return (
    <div>
      <h2>Lets get started</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
