import React from 'react'
import {shallow} from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let startEditExpense,history,wrapper,startRemoveExpense
beforeEach(() =>{
    startEditExpense = jest.fn()
     startRemoveExpense = jest.fn()
     history = {push:jest.fn()}
     wrapper = shallow(<EditExpensePage expense={expenses[1]} startRemoveExpense={startRemoveExpense} startEditExpense={startEditExpense} history={history}/>)
})

test('should render Edit Expense Page with default values', () =>{
    expect(wrapper).toMatchSnapshot()
})

test('should render edit expense', () =>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1])
})

test('should render remove expense', () =>{
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[1].id)
})

