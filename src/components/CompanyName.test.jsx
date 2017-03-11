import React from 'react'
import { mount } from 'enzyme'

import CompaniesActions from '../actions/CompaniesActions'
import CompanyName from './CompanyName'

CompaniesActions.updateCompany = jest.fn()

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

  it('simulates handleChangeCompanyName', () => {
    const underTest = mount(
      <CompanyName
        company={{
          id: 'hjk',
          name: 'HJK',
        }}
        editMode
      />,
    )

    underTest.node.companiesNames.hjk.value = 'New Title'
    underTest.find('input').simulate('change')

    expect(CompaniesActions.updateCompany).toHaveBeenCalledTimes(1)
    expect(CompaniesActions.updateCompany).toHaveBeenCalledWith(
      'hjk',
      { id: 'hjk', name: 'New Title' },
    )
  })
})
