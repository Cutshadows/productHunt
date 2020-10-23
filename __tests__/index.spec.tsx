import * as React from 'react'
import {shallow} from 'enzyme'
import Header from '../components/layout/Header'

describe('Pages', () => {
  describe('Header', () => {
    it('should render without throwing an error', function () {
      const wrap = shallow(<Header></Header>)
      console.log(wrap);
      //expect(wrap.find('div').text()).toBe('Hello Next.js')
    })
  })  
})