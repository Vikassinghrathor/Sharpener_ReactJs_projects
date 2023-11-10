// ExpenseDetails.js
import ExpenseDate from "../Expense/ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  return (
    <Card>
    <div className="expense-details">
      <ExpenseDate date={props.date}/>
      <p>{props.title}</p>
      <p>{props.amount}</p>
      <p>{props.LocationOfExpenditure}</p>
    </div>
    </Card>
  );
}

export default ExpenseItem;
