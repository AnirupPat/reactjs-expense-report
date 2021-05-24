import { useState } from 'react';
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpresesFilter from './ExpensesFilter';
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');
  let expense = props.expenseData;
  const handleProcessSelectedYear = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  }
  return (
    <div>
    <Card className="expenses">
    <ExpresesFilter selected={filteredYear} getSelectedYear={handleProcessSelectedYear} />
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
  </Card>
    </div>
  );
}

export default Expenses;
