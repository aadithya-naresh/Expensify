import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should render expense form correctly with default data', () =>{
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('should render expense form correctly with data', () =>{
 
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render error for wrong form submission', () =>{
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit',{
        preventDefault : () =>{}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('Should change desctiption when input changes', () =>{
    const wrapper = shallow(<ExpenseForm />)
    const value = 'simulated event'
    wrapper.find('input').at(0).simulate('change', {
        target :{ value }
    })
    expect(wrapper.state('description')).toBe(value)
})

test('Should change note when textarea changes', () =>{
    const wrapper = shallow(<ExpenseForm />)
    const value = 'simulated event'
    wrapper.find('textarea').simulate('change', {
        target :{ value }
    })
    expect(wrapper.state('note')).toBe(value)
})

test('should set amount when input changes' , () =>{
    const wrapper = shallow(<ExpenseForm />)
    const value = '12.23'

    wrapper.find('input').at(1).simulate('change', {
        target :{ value }
    })
    expect(wrapper
        .state('amount')).toBe(value)   
})

test('should return error when set amount violates conditions' , () =>{
    const wrapper = shallow(<ExpenseForm />)
    const value = '12.2345'

    wrapper.find('input').at(1).simulate('change', {
        target :{ value }
    })
    expect(wrapper
        .state('amount')).toBe('')   
})

test('should call onSubmit prop for valid form submission' , () =>{
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    
    wrapper.find('form').simulate('submit',{
        preventDefault : () =>{}
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        note:expenses[0].note,
        createdAt:expenses[0].createdAt
    })
})

test('should set new date on Date Change picker', () =>{
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendar focus on change', () =>{
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')( {focused : true })
    expect(wrapper.state('calendarFocused')).toEqual(true)

})