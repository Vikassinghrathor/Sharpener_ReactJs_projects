// ExpenseDetails.js
function ExpenseDetails(props) {
  return (
    <div className="expense-details">
      <p>{props.title}</p>
      <p>{props.amount}</p>
      <p>{props.LocationOfExpenditure}</p>
    </div>
  );
}

export default ExpenseDetails;
