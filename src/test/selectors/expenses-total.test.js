import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('Should return sum of the expenses(single)', () =>{
    const sum = getExpensesTotal([expenses[0]])
    expect(sum).toBe(50)
})

test('Should return sum of the expenses(multiple)', () =>{
    const sum = getExpensesTotal(expenses)
    expect(sum).toBe(300)
})

test('Should return sum of the expenses(no expense)',() =>{
    const sum = getExpensesTotal([])
    expect(sum).toBe(0)
})