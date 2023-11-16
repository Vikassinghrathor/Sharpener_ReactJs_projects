import React,{useState} from 'react';

import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpensesFilter.jsx';
import Card from '../UI/Card';


const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items.map((expense)=>(
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