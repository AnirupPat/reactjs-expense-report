import './ExpenseForm.css';


const ExpenseForm = () => {
    const titleChangeHandler = (event) => {
        console.log(event.target.value);
    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.1" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="text" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" onClick="">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;