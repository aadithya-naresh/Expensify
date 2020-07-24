import {shallow} from 'enzyme'
import React from 'react'
import Header from '../../components/Header'
import toJSON from 'enzyme-to-json'
test('Should render the header correctly', () =>{
    const wrapper = shallow(<Header startLogout={() => { }}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should call startlogout on logout button click', () =>{
    const startLogout = jest.fn()
    const wrappper = shallow(<Header startLogout={startLogout}/>)
    wrappper.find('button').simulate('click')

    expect(startLogout).toHaveBeenCalled()
})


