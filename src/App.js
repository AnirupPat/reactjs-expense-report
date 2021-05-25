import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import "./App.css";

let expense = [
  {
    title: "Car Insurance",
    amount: 242.56,
    date: new Date(2021, 5, 24),
    id:'e1'
  },
  {
    title: "Bike Insurance",
    amount: 142.56,
    date: new Date(2020, 5, 23),
    id:'e2'
  },
  {
    title: "Magazines",
    amount: 24.0,
    date: new Date(2022, 5, 22),
    id:'e3'
  },
  {
    title: "Groceries",
    amount: 100.0,
    date: new Date(2021, 5, 21),
    id:'e4'
  },
];
const App = () => {
  const [expenseList, setExpenseList] = useState(expense);

  const handleAddExpense = (newExpense) => {
    console.log('In App!')
    console.log(newExpense)
    setExpenseList((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={handleAddExpense}></NewExpense>
      <Expenses expenseData={expenseList}  />
    </div>
  );
}

export default App;
