
import Expense from './Components/Expense';


function App() {
  const ItemArr = [
    {
    id: 'e1',
    title: 'Expenses',
    amount: '100',
    LocationOfExpenditure : 'Cricket'
    },
    {
      id: 'e2',
      title: 'Expenses',
      amount: '100',
      LocationOfExpenditure : 'Football'
    },
    {
      id: 'e3',
      title: 'Expenses',
      amount: '100',
      LocationOfExpenditure : 'badminton'
    }
]
  return (
    <div className="App">
    {ItemArr.map((item) => (
        <Expense
          key={item.id}
          id={item.id}
          title={item.title}
          amount={item.amount}
          LocationOfExpenditure={item.LocationOfExpenditure}
        />
      ))}
    </div>
  );
}

export default App;
