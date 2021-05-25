import Card from "../UI/Card";
import "./AddExpenseCard.css";

const AddExpenseCard = (props) => {
    const submitHandler = () => {
        props.cardShow(false);
    }
  return (
    <form className="add-expense-card" onSubmit={submitHandler}>
      <div>
      <button className="add-expense__actions" type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default AddExpenseCard;
