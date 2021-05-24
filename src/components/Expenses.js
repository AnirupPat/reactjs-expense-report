import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    let expense = props.expenseData;
    return (
        <div className="expenses">
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
    )
}

export default Expenses;