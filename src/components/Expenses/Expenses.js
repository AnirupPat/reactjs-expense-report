import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  let expense = props.expenseData;
  let filteredExpense = expense.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  

  const handleProcessSelectedYear = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);

    filteredExpense = expense.filter(
      (expense) => expense.date.getFullYear().toString() === selectedYear
    );
    console.log(filteredExpense);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          getSelectedYear={handleProcessSelectedYear}
        />
        <ExpensesList expenses={filteredExpense} />
      </Card>
    </div>
  );
};

export default Expenses;
