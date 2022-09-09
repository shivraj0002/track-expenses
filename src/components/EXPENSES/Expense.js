import React, {useState} from "react";
import ExpensesFilter from "../EXPENSE-FILTER/ExpenseFilter.js";
import Card from "../UI/Card.js";
import './Expense.css'
import ExpenseChart from "./ExpenseChart.js";
import ExpenseItem from "./ExpenseItem.js";

const Expense = (props) => 
{   
      
    const [onChangeYear,setOnChangeYear]=useState('2022')
    const RenderExpense = props.expense.filter((e)=>{
        return e.date.getFullYear().toString() === onChangeYear
    }).map((e) =>
    {
        return <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />;
    });
    
    let FilteredArray = props.expense.filter((e)=>{
        return e.date.getFullYear().toString() === onChangeYear
    })
    return (
    <div>
        <Card className="expenses">
        <ExpenseChart expenses={FilteredArray} />
         
        <ExpensesFilter  setOnChangeYear={setOnChangeYear} onChangeYear={onChangeYear}/>
        {FilteredArray.length === 0 ? (<Card className="expense-item"><h1 style={{margin:'auto'}} >No Expenses to preview!</h1> </Card>) : RenderExpense}
        </Card>
        </div>
         )
};
export default Expense;
