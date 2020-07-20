import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('Should setup default state',() =>{
    const currentState = filtersReducer(undefined,{type:'@@INIT'})

     expect(currentState).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
     })
})

test('Should sort by amount',() =>{
    const currentState = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'})
    expect(currentState.sortBy).toBe('amount')
})

test('Should set sort by to date', () =>{
    const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }

    const action = {type:'SORT_BY_DATE'}
    const state = filtersReducer(currentState,action)

    expect(state.sortBy).toBe('date')
})

test('Should set text filter', () =>{
    const state = filtersReducer(undefined,{type:'SET_TEXT_FILTER',text:'Aadi'})

    expect(state.text).toBe('Aadi')
})

test('Should set startdate filter' ,() =>{
    const state = filtersReducer(undefined,{type:'SET_START_DATE',date:moment(0)})

    expect(state.startDate).toEqual(moment(0))
})

test('Should set endDate filter', () =>{
    const state = filtersReducer(undefined,{type:'SET_END_DATE',date:moment(0)})

    expect(state.endDate).toEqual(moment(0))
})