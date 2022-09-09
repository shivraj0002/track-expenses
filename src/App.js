import React, {useState} from "react";
import Expense from "./components/EXPENSES/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const DUMMYeXPENSE = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'New Phone',
      amount: 500,
      date: new Date(2022, 5, 12),
    },
  ];

  const [expenses , setExpenses] = useState(DUMMYeXPENSE)
 const addExpenseHandler = expense =>{
        setExpenses(preExpense=>{return [expense , ...preExpense]})
}
  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expense={expenses} />
    
    </div>
  );
}

export default App;
