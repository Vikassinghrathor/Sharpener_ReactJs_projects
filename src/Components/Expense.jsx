// Expense.js
import ExpenseDetails from './ExpenseDetails';

function Expense(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='expense-item'>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        LocationOfExpenditure={props.LocationOfExpenditure}
      />
    </div>
  );
}

export default Expense;
