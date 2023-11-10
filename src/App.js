
import Expense from './Components/Expense';


function App() {
  const ItemArr = [
    {
    id: 'e1',
    title: 'Expenses',
    amount: '100',
    LocationOfExpenditure : 'Cricket',
    date: new Date(2023,2,10)
    },
    {
      id: 'e2',
      title: 'Expenses',
      amount: '100',
      LocationOfExpenditure : 'Football',
      date: new Date(2023,2,20)
    },
    {
      id: 'e3',
      title: 'Expenses',
      amount: '100',
      LocationOfExpenditure : 'badminton',
      date: new Date(2023,2,28)
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
          date={item.date}
        />
      ))}
    </div>
  );
}

export default App;
