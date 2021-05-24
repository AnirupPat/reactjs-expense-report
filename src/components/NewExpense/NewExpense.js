import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const onExpenseSumbit = (expenseObj) => {
        const expenseData = {
            ...expenseObj,
            id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm handleSaveExpense={onExpenseSumbit}></ExpenseForm>
        </div>
    )
}

export default NewExpense;