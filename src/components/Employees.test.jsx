import React from 'react'
import shortid from 'shortid'
import { mount } from 'enzyme'

import Employees from './Employees'

const generateEmployees = config => mount(<Employees {...config} />)
const defaultConfig = {
  employees: {},
  editMode: false,
  companyId: shortid.generate(),
}

describe('Suite for <Employess />', () => {
  describe('rendering with 0 employees, and not in edit mode', () => {
    const underTest = generateEmployees(defaultConfig)

    it('if renders without employees, should show warning message', () => {
      const actual = underTest.find('.flow-text').text()
      const result = 'At least, one employee is required'
      expect(actual).toBe(result)
    })

    it('should show heading with 0 and no-plural', () => {
      const actual = underTest.find('.heading-employees').text()
      const result = '0 Employee'
      expect(actual).toBe(result)
    })
  })

  describe('rendering with 1 employee, and not in edit mode', () => {
    const underTest = generateEmployees({
      ...defaultConfig,
      employees: {
        1: {},
      },
    })

    it('if renders with 1 employee, should have 1 panel', () => {
      const actual = underTest.find('.card-panel').length
      const result = 1
      expect(actual).toBe(result)
    })

    it('should show heading with 1 and no-plural', () => {
      const actual = underTest.find('.heading-employees').text()
      const result = '1 Employee'
      expect(actual).toBe(result)
    })
  })

  describe('rendering with 2 employees, and not in edit mode', () => {
    const underTest = generateEmployees({
      ...defaultConfig,
      employees: {
        1: {},
        2: {},
      },
    })

    it('if renders with 2 employees, should have 2 panels', () => {
      const actual = underTest.find('.card-panel').length
      const result = 2
      expect(actual).toBe(result)
    })

    it('should show heading with 2 and plural', () => {
      const actual = underTest.find('.heading-employees').text()
      const result = '2 Employees'
      expect(actual).toBe(result)
    })
  })

  describe('rendering with 0 employees, and in edit mode', () => {
    const underTest = generateEmployees({
      ...defaultConfig,
      editMode: true,
    })

    it('if renders without employees, should show warning message', () => {
      const actual = underTest.find('.flow-text').text()
      const result = 'At least, one employee is required'
      expect(actual).toBe(result)
    })

    it('should show heading with 0 and no-plural', () => {
      const actual = underTest.find('.heading-employees').text()
      const result = '0 Employee'
      expect(actual).toBe(result)
    })

    it('if is in edit mode, should show add employee button', () => {
      const actual = underTest.find('.btn-add-employee').text()
      const result = 'Add Employee'
      expect(actual).toBe(result)
    })
  })

  describe('rendering with 1 employee, and in edit mode', () => {
    const underTest = generateEmployees({
      ...defaultConfig,
      editMode: true,
      employees: {
        1: {},
      },
    })

    it('if renders with 1 employee, should have 1 panel', () => {
      const actual = underTest.find('.card-panel').length
      const result = 1
      expect(actual).toBe(result)
    })

    it('should show heading with 1 and no-plural', () => {
      const actual = underTest.find('.heading-employees').text()
      const result = '1 Employee'
      expect(actual).toBe(result)
    })

    it('if is in edit mode, should show add employee button', () => {
      const actual = underTest.find('.btn-add-employee').text()
      const result = 'Add Employee'
      expect(actual).toBe(result)
    })
  })

  describe('rendering with 2 employees, and in edit mode', () => {
    const underTest = generateEmployees({
      ...defaultConfig,
      editMode: true,
      employees: {
        1: {},
        2: {},
      },
    })

    it('if renders with 2 employees, should have 2 panels', () => {
      const actual = underTest.find('.card-panel').length
      const result = 2
      expect(actual).toBe(result)
    })

    it('should show heading with 2 and plural', () => {
      const actual = underTest.find('.heading-employees').text()
      const result = '2 Employees'
      expect(actual).toBe(result)
    })

    it('if is in edit mode, should show add employee button', () => {
      const actual = underTest.find('.btn-add-employee').text()
      const result = 'Add Employee'
      expect(actual).toBe(result)
    })
  })
})
