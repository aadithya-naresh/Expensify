import {createStore} from 'redux'
import { createRef } from 'react'

const incrementCount = ({incrementBy = 1} = {}) =>({
        type:'INCREMENT',
        incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) =>({
    type:'DECREMENT',
    decrementBy
})

const resetCount = () =>({
    type:'RESET'
})

const setCount = ({value = 1} = {}) =>({
    type:'SET',
    value
})

const countReducer = (state = {count:0},action) =>{
    switch(action.type){
        case 'INCREMENT':
            return {
                count:state.count+ action.incrementBy
            }
        case 'DECREMENT':
            return{
                count:state.count- action.decrementBy
            }
        case 'SET':
            return{
                count:action.value
            }
        case 'RESET':
            return{
                count:0
            }
        default:
            return state
    }
}

const store = createStore(countReducer)
const unsubscribe = store.subscribe(() =>{
    console.log(store.getState())
})
store.dispatch(incrementCount({
    incrementBy:5
}))

store.dispatch(incrementCount({
    incrementBy:5
}))


store.dispatch(resetCount())

store.dispatch(decrementCount({
    decrementBy:10
}))

store.dispatch(setCount({
    value:101
}))
