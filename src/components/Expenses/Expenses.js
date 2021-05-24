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
    {expense.map((exp) => 
      <ExpenseItem
      title={exp.title}
      amount={exp.amount}
      date={exp.date}
    ></ExpenseItem>
    )}
    
  </Card>
    </div>
  );
}

export default Expenses;
