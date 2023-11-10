function Expense(){
  const LocationOfExpenditure = 'games';
  return(
    <>
    <h1>Expense Item</h1>
      <p>Food Rs 10</p>
      <p>Petrol Rs 100</p>
      <p>Movies Rs 200</p>
      <p>{LocationOfExpenditure} Rs 300</p>
    </>
  )
}

export default Expense;