// ExpenseItem.js
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props) {
  const [changeInput, setChangeInput] = useState(props.amount);

  const expenseHandler = () => {
    setChangeInput('100$');
    console.log(changeInput); // This will log the old value due to the asynchronous nature of state updates
  };

  return (
    <Card className='expense-item' id={`expense-item-${props.id}`}>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${changeInput}</div>
      </div>
      <button onClick={expenseHandler}>Change Expense</button>
    </Card>
  );
}

export default ExpenseItem;
