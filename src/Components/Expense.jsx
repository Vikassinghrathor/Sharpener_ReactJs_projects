function Expense(props){
  console.log(props);
  return(
    <>
    <h1>Expense Item</h1>
      <div>
        <p>{props.title}</p>
        <p>{props.amount}</p>
        <p>{props.LocationOfExpenditure}</p>
      </div>
    </>
  )
}

export default Expense;