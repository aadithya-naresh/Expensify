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
      <h1 className="page-header__title page-header__title--hidden">{<p>(Hidden- <span>{props.hiddenExpenses}</span> expense(s) )</p>} </h1>
      <div className="page-header__actions">
        <Link className="button" to="/create">Add Expense</Link>
      </div>
      </div>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
      expensesCount:selectExpenses(state.expenses, state.filters).calculatedExpenses.length,
      expensesTotal: expensesTotal(selectExpenses(state.expenses, state.filters).calculatedExpenses),
      hiddenExpenses: selectExpenses(state.expenses, state.filters).length
    }
}
export default connect(mapStateToProps)(ExpenseSummary);