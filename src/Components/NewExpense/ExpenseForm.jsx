import React, { useState } from 'react'

const ExpenseForm = () => {
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
  return (
    <div>
      <form>
        <label>Expense title</label>
        <input type='text' onChange={updateTitle} value={enteredtitle}/>
        <label>Expense Amount</label>
        <input type='number' onChange={updateAmount} value={enteredAmount} />
        <label>Expense Date</label>
        <input type='date' onChange={updateDate} value={enteredDate}/>
        <button>Add Expense</button>
      </form>
    </div>
  )
}

export default ExpenseForm