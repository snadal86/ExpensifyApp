import React from 'react'
import {shallow} from 'enzyme'
import Header from '../../Components/Header'

test('should render header correctly', () => {
	const wrapper = shallow(<Header />);
	expect(wrapper).toMatchSnapshot()

	// expect(wrapper.find('h1').length).toBe(1)
	// expect(wrapper.find('h1').text()).toBe('Expensify')
})

