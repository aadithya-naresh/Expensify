import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default state' , () =>{
    const state = expensesReducer(undefined,{type:'@@INIT'})

    expect(state).toEqual([])
})

test('Should remove expense by id',() =>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }

    const state = expensesReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('Should not remove expense for wrong id',() =>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:'ascc'
    }

    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)

})

test('Should add an expense', () =>{
    const action = {
        type:'ADD_EXPENSE',
        expense:{
            amount:500,
            createdAt:0,
            description:'Something',
            note:'Something'
        }
    }

    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses.concat({
        amount:500,
        createdAt:0,
        description:'Something',
        note:'Something'
    }))
})

test('Should edit an expense with id', () =>{
    const action = {
        type:'EDIT_EXPENSE',
        id:expenses[0].id,
        updates:{
            amount:500,
            createdAt:0,
            description:'Something',
            note:'Something'
        }
    }

    const state = expensesReducer(expenses,action)
    expect(state[0]).toEqual({
        id:expenses[0].id,
        amount:500,
        createdAt:0,
        description:'Something',
        note:'Something'
    })
})

test('should not edit if expense is not found', () =>{
    const action = {
        type:'EDIT_EXPENSE',
        updates:{
            id:'abcdef',
            amount:500,
            createdAt:0,
            description:'Something',
            note:'Something'
        }
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})