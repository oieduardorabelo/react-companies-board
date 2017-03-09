import React from 'react'
import { mount } from 'enzyme'

import CompanyName from './CompanyName'

describe('Suite for <CompanyName />', () => {
  it('should render in no-editMode', () => {
    const underTest = mount(
      <CompanyName
        company={{
          id: 'hjk',
          name: 'HJK',
        }}
        editMode={false}
      />,
    )
    expect(underTest.find('h2').text()).toBe('HJK')
  })

  it('should render in editMode', () => {
    const underTest = mount(
      <CompanyName
        company={{
          id: 'hjk',
          name: 'HJK',
        }}
        editMode
      />,
    )
    expect(underTest.find('.input-field').length).toBe(1)
  })
})
