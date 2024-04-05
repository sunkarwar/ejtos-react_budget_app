import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,dispatch,expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = e =>{
        setNewBudget(e.target.value);
    }


    const handleBudgetUpdate = (event) => {
        const newValue = event.target.value;
        console.log(expenses)
        const totalExpense = expenses.reduce((total,item)=>{
            return (total = total+item.cost)
        },0);
        console.log(totalExpense)
        if(totalExpense>newValue){
            alert("You can not reduce the budget value lower than the spending")
        }
        else if(20000 <newValue){
            alert("Budget value shouldn't exceed £ 20,000")
        }else{
            setNewBudget(newValue);
            dispatch({
                type: 'SET_BUDGET',
                payload: newValue,
            });
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget}
onBlur={handleBudgetUpdate}
 onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;