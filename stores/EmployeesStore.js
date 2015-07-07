var AppDispatcher = require('../dispatcher/AppDispatcher')
var EventEmitter = require('events').EventEmitter
var EmployeesConstants = require('../constants/EmployeesConstants')
var assign = require('object-assign')

var CHANGE_EVENT = 'change'

var _employees = {}
var _employeeId = 0

function linkCompany (companyId) {
  let employeeId = ++_employeeId
  var employee = {
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
  _employees[companyId][employeeId] = assign({}, _employees[companyId][employeeId], newData)
}

function addEmployee (companyId) {
  let employeeId = ++_employeeId
  var employee = {
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

var EmployeesStore = assign({}, EventEmitter.prototype, {
  getAll () {
    return _employees
  },

  getById (id) {
    return _employees[id]
  },

  emitChange () {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener (callback) {
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  dispatcherIndex: AppDispatcher.register(function (action) {
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
})

export default EmployeesStore
