import React from 'react'
import {ExpenseSummary} from '../../components/ExpenseSummary'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'

test('Should render Expense Summary in dashboard', () =>{
    const wrapper = shallow(<ExpenseSummary expensesCount={5} expensesTotal={150} />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render Expense Summary in dashboard', () =>{
    const wrapper = shallow(<ExpenseSummary expensesCount={5} expensesTotal={150} />)
    expect(wrapper).toMatchSnapshot()
})