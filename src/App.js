import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import AddExpenseCard from './components/NewExpense/AddExpenseCard';
import "./App.css";
import { act } from 'react-dom/test-utils';

let expense = [
  {
    title: "Car Insurance",
    amount: 242.56,
    date: new Date(2021, 4, 24),
    id:'e1'
  },
  {
    title: "Bike Insurance",
    amount: 142.56,
    date: new Date(2020, 2, 23),
    id:'e2'
  },
  {
    title: "Magazines",
    amount: 24.0,
    date: new Date(2022, 0, 22),
    id:'e3'
  },
  {
    title: "Groceries",
    amount: 100.0,
    date: new Date(2021, 8, 21),
    id:'e4'
  },
];
const App = () => {
  const [expenseList, setExpenseList] = useState(expense);
  const [addCardShow, addCardShowSet] = useState(true);

  const handleAddExpense = (newExpense) => {
    console.log('In App!')
    console.log(newExpense)
    setExpenseList((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  }

  const handleCardToggle = action => {
    console.log("Inside handleCardToggle" +action);
    addCardShowSet(action);
  }

  return (
    <div>
    {addCardShow === true ? <AddExpenseCard cardShow={handleCardToggle} /> : 
    <NewExpense cardShow={handleCardToggle} onAddExpense={handleAddExpense}></NewExpense>}
      
      
      <Expenses expenseData={expenseList}  />
    </div>
  );
}

export default App;
