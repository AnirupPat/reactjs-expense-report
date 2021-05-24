import Expenses from './components/Expenses/Expenses';
import "./App.css";

const App = () => {
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
      <Expenses expenseData={expense}  />
    </div>
  );
}

export default App;
