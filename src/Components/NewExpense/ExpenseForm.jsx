import React, { useState } from 'react'

const ExpenseForm = (props) => {
  const[enteredtitle,setenteredtitle] = useState('');
  const[enteredAmount,setenteredAmount] = useState('');
  const[enteredDate,setenteredDate] = useState('');
  function updateTitle(event){
    setenteredtitle(event.target.value);
  }
  function updateAmount(event){
    setenteredAmount(event.target.value);
  }
  function updateDate(event){
    setenteredDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredtitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);
    setenteredtitle('');
    setenteredAmount('');
    setenteredDate('');
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Expense title</label>
        <input type='text' onChange={updateTitle} value={enteredtitle}/>
        <label>Expense Amount</label>
        <input type='number' onChange={updateAmount} value={enteredAmount} />
        <label>Expense Date</label>
        <input type='date' onChange={updateDate} value={enteredDate}/>
        <button type='submit'>Add Expense</button>
        <button type="button" onClick={props.onCancel}>Cancel</button>
      </form>
    </div>
  )
}

export default ExpenseForm