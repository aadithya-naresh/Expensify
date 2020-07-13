import {createStore,combineReducers} from 'redux'
import{v4 as uuid} from 'uuid';

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
    ) =>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({id})=>({
    type:'REMOVE_EXPENSE',
    id
})

const editExpense = (id,updates) =>({
    type:'EDIT_EXPENSE',
    id,
    updates
})

const setTextFilter = (text = '') =>({
    type:'SET_TEXT_FILTER',
    text
})

const sortByAmount = () =>({
    type:'SORT_BY_AMOUNT'
})

const sortByDate =() =>({
    type:'SORT_BY_DATE'
})

const setStartDate =  (date) =>({
    type:'SET_START_DATE',
    date
})

const setEndDate = (date) =>({
    type:'SET_END_DATE',
    date
})

const expensesReducerDefaultState = []
const filtersReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}

const expensesReducer = (state = expensesReducerDefaultState,action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state,
            action.expense]
        
        case 'REMOVE_EXPENSE':
            return state.filter((state) =>{
                return state.id != action.id
            })
        case 'EDIT_EXPENSE':
            return state.map((expense) =>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense
                }
            })
        default:
            return state
    }
}

const filtersReducer = (state = filtersReducerDefaultState,action) =>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            state.text=action.text
            return state
        case 'SORT_BY_AMOUNT':
           return {
               ...state,
               sortBy:'amount'
           }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate:action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate:action.date
            }
        default:
            return state
    }
}
const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    })
)

const getVisibleFilters = (expenses,{text,sortBy,startDate,endDate})  =>{
   return expenses.filter((expense) =>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) =>{
        if(sortBy === 'date'){
            return a.createdAt<b.createdAt?1:-1
        }else if(sortBy === 'amount'){
            return a.amount<b.amount?1:-1
        }
    });
}
store.subscribe(() =>{
    const state = store.getState();
    const visibleExpenses = getVisibleFilters(state.expenses,state.filters)
    console.log(visibleExpenses)

})

const expense1 = store.dispatch(addExpense({description:'rent',amount:1000,createdAt:-2000}))
const expense2 = store.dispatch(addExpense({description:'coffee',amount:500000,createdAt:-1000}))

// store.dispatch(removeExpense({id:expense1.expense.id}))
// store.dispatch(editExpense(expense2.expense.id,{amount : 900}))
store.dispatch(setTextFilter(''))

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
//  store.dispatch(setEndDate(1250))
const demoStore = {
    expenses:[{
        id:'dndjbdjndsddx',
        description:'January Rent',
        note:'This is my january rent',
        amount:54500,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
}

