import AppDispatcher from '../dispatcher/AppDispatcher'
import { EventEmitter } from 'events'

import * as EmployeesConstants from '../constants/EmployeesConstants'

let _employees = {}
let _employeeId = 0

function linkCompany (companyId) {
  let employeeId = ++_employeeId
  let employee = {
    _companyId: companyId,
    _complete: false,
    id: employeeId,
    firstName: '',
    lastName: '',
    email: ''
  }
  _employees[companyId] = {
    [employeeId]: employee
  }
}

function unlinkCompany (companyId) {
  delete _employees[companyId]
}

function updateEmployee (companyId, employeeId, newData) {
  _employees[companyId][employeeId] = {..._employees[companyId][employeeId], ...newData}
}

function addEmployee (companyId) {
  let employeeId = ++_employeeId
  let employee = {
    _companyId: companyId,
    _complete: false,
    id: employeeId,
    firstName: '',
    lastName: '',
    email: ''
  }
  _employees[companyId][employeeId] = employee
}

function removeEmployee (companyId, employeeId) {
  delete _employees[companyId][employeeId]
}

class EmployeesStoreFactory extends EventEmitter {
  getAll () {
    return _employees
  }

  getById (id) {
    return _employees[id]
  }

  emitChange () {
    this.emit('change')
  }

  addChangeListener (callback) {
    this.on('change', callback)
  }

  removeChangeListener (callback) {
    this.removeListener('change', callback)
  }
}

const EmployeesStore = new EmployeesStoreFactory()
export default EmployeesStore

AppDispatcher.register(function (action) {
  switch (action.actionType) {
    case EmployeesConstants.LINK_COMPANY:
      console.log(action)
      linkCompany(action.companyId)
      EmployeesStore.emitChange()
      break

    case EmployeesConstants.UNLINK_COMPANY:
      console.log(action)
      unlinkCompany(action.companyId)
      EmployeesStore.emitChange()
      break

    case EmployeesConstants.ADD_EMPLOYEE:
      console.log(action)
      addEmployee(action.companyId)
      EmployeesStore.emitChange()
      break

    case EmployeesConstants.UPDATE_EMPLOYEE:
      console.log(action)
      updateEmployee(action.companyId, action.employeeId, action.newData)
      EmployeesStore.emitChange()
      break

    case EmployeesConstants.REMOVE_EMPLOYEE:
      console.log(action)
      removeEmployee(action.companyId, action.employeeId)
      EmployeesStore.emitChange()
      break
  }
})
