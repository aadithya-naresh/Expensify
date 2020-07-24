import React from 'react'
import {shallow} from 'enzyme'
import LoginPage from '../../components/LoginPage'

test('should render login page', () =>{
    const wrapper = shallow(<LoginPage startLogin={() => { }}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should call startlogin on login button click', () =>{
    const startLogin= jest.fn()
    const wrappper = shallow(<LoginPage startLogin={startLogin}/>)
    wrappper.find('button').simulate('click')

    expect(startLogin).toHaveBeenCalled()
})