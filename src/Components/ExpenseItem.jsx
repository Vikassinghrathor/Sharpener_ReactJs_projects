// ExpenseDetails.js
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  return (
    <div className="expense-details">
      <ExpenseDate date={props.date}/>
      <p>{props.title}</p>
      <p>{props.amount}</p>
      <p>{props.LocationOfExpenditure}</p>
    </div>
  );
}

export default ExpenseItem;
