import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total'

export const ExpenseSummary = (props) =>{
    const expenseWord = props.expensesCount == 1 ? 'expense' : 'expenses'
   
   return( 
    <div>
     <h1>{<p> Viewing {props.expensesCount} {expenseWord} totalling {'₹'+props.expensesTotal.toLocaleString('en-IN')}</p>} </h1>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
      expensesCount:selectExpenses(state.expenses, state.filters).length,
      expensesTotal: expensesTotal(state.expenses)
    }
}
export default connect(mapStateToProps)(ExpenseSummary);