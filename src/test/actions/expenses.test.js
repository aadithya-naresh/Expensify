import {addExpense,removeExpense,editExpense} from '../../actions/expenses'

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
    const expenseData = {
        description:'rent',
        amount:19500,
        createdAt:500,
        note:"Last month's rent"
    }
    const action = addExpense(expenseData)

    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    })
})

test('Should set up add expense with given values', () =>{
    const action = addExpense()

    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
        description : '',
        note : '',
        amount :0,
        createdAt : 0,
        id:expect.any(String)
        }
    })
})