import React from 'react'
import {shallow} from 'enzyme'
import {NotFoundPage} from '../../components/NotFoundPage'
import expenses from '../fixtures/expenses'

test('Should set up not found page' ,() =>{
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
})