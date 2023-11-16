import React,{useState} from 'react';

import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpensesFilter.jsx';
import ExpensesChart from './ExpensesChart.jsx';
import Card from '../UI/Card';


const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <Card>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      {(filteredExpenses.length === 1 && <p>Only single Expense here. Please add more...</p>) || (filteredExpenses.length === 0 && <p>No Expense item here. Please add some...</p>)}
      {filteredExpenses.map((expense)=>(
        <ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;