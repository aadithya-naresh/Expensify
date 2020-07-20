import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../../actions/filters'
import moment from 'moment'

test('should generate set start object', () =>{
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type:'SET_START_DATE',
        date:moment(0)
    })
})

test('should generate set start object', () =>{
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type:'SET_END_DATE',
        date:moment(0)
    })
})

test('Should set text filter with default value', () =>{
    const action = setTextFilter()

    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})

test('Should set text filter with custom value', () =>{
    const action = setTextFilter('Chennai')

    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'Chennai'
    })
})

test('Should set up a sort to be by amount', () =>{
    const action = sortByAmount()

    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})

test('Should set up a sort to be by date', () =>{
    const action = sortByDate()

    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
})