import React, { useState } from 'react'

const ExpenseForm = () => {
  const[newInput,setnewInput] = useState('');
  function updateInput(event){
    const inputData = event.target.value;
    setnewInput(inputData);
    console.log(inputData);
  }
  return (
    <div>
      <form>
        <label>Expense title</label>
        <input type='text' onChange={updateInput} value={newInput}/>
        <label>Expense Amount</label>
        <input type='number' onChange={updateInput} value={newInput} />
        <label>Expense Date</label>
        <input type='date' onChange={updateInput} value={newInput}/>
        <button>Add Expense</button>
      </form>
    </div>
  )
}

export default ExpenseForm