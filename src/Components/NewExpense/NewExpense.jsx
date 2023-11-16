import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const[showForm,setshowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
       ...enteredExpenseData,
       id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setshowForm(false);
  };

  const showAddFormButton = () => {
    setshowForm(true);
  };
  const cancelAddFormButton = () => {
    setshowForm(false);
  };
  return (
    <div>
    {
      !showForm && (<button onClick={showAddFormButton}>Add New Expense</button>)
    }
    {
      showForm && (
    <ExpenseForm 
    onSaveExpenseData={saveExpenseDataHandler}
    onCancel={cancelAddFormButton}
    />
    )}
    </div>
  )
}

export default NewExpense