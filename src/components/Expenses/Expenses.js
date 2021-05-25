import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpresesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  let expense = props.expenseData;
  let filteredExpense = expense.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  let expensesContent = <p>No Expenses found</p>;
  if (filteredExpense.length > 0) {
    expensesContent = filteredExpense.map((exp) => (
      <ExpenseItem
        key={exp.id}
        title={exp.title}
        amount={exp.amount}
        date={exp.date}
      ></ExpenseItem>
    ));
  }

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
        <ExpresesFilter
          selected={filteredYear}
          getSelectedYear={handleProcessSelectedYear}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
