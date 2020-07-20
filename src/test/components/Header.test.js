import {shallow} from 'enzyme'
import React from 'react'
import Header from '../../components/Header'
import toJSON from 'enzyme-to-json'
test('Should render the header correctly', () =>{

    const wrapper = shallow(<Header />)
    expect(toJSON(wrapper)).toMatchSnapshot()
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />)

    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})


