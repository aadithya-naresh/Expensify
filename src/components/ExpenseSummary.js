import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total'
import {Link} from  'react-router-dom'

export const ExpenseSummary = (props) =>{
    const expenseWord = props.expensesCount == 1 ? 'expense' : 'expenses'
   
   return( 
    <div className="page-header">
      <div className="content-container">
      <h1 className="page-header__title">{<p> Viewing <span>{props.expensesCount}</span> {expenseWord} totalling <span>{'₹'+props.expensesTotal.toLocaleString('en-IN')}</span></p>} </h1>
      <div className="page-header__actions">
        <Link className="button" to="/create">Add Expense</Link>
      </div>
      </div>
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