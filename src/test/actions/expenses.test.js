import {startAddExpense,addExpense,removeExpense,editExpense} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const createMockStore = configureMockStore([thunk])

test('Should set up remove expense', () =>{
    const action = removeExpense({id:'123abc'})

    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
})

test('Should set up edit expense', () =>{
    const action = editExpense('123abc',{note: 'New note'})
    
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',   
        updates:{
            note:'New note'
        }
    })
})

test('Should set up add expense with given values', () =>{
    
    const action = addExpense(expenses[2])

    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
        ...expenses[2]
        }
    })
})

// test('Should add expense to db and store', (done) =>{
//     const store = createMockStore({})
//     const expenseData = {
//         description:'Mouse',
//         amount:3000,
//         note:'This is a test',
//         createdAt:1000

//     }
//     store.dispatch(startAddExpense(expenseData)).then(() =>{
//       done()
//     })
 
// })

test('Should add expense to db with default values and store', () =>{
    
})

// test('Should set up add expense with default values', () =>{
//     const action = addExpense()

//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense:{
//         description : '',
//         note : '',
//         amount :0,
//         createdAt : 0,
//         id:expect.any(String)
//         }
//     })
// })