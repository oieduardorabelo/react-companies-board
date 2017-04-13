/* eslint-disable no-console */
import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import * as EmployeesConstants from '../constants/EmployeesConstants';

const employeesStore = {};
let employeeIdIndex = 0;

function linkCompany(companyId) {
  employeeIdIndex += 1;
  const employeeId = employeeIdIndex;
  const employee = {
    _companyId: companyId,
    isCompleted: false,
    id: employeeId,
    firstName: '',
    lastName: '',
    email: '',
  };
  employeesStore[companyId] = {
    [employeeId]: employee,
  };
}

function unlinkCompany(companyId) {
  delete employeesStore[companyId];
}

function updateEmployee(companyId, employeeId, newData) {
  employeesStore[companyId][employeeId] = {
    ...employeesStore[companyId][employeeId],
    ...newData,
  };
}

function addEmployee(companyId) {
  employeeIdIndex += 1;
  const employeeId = employeeIdIndex;
  const employee = {
    _companyId: companyId,
    isCompleted: false,
    id: employeeId,
    firstName: '',
    lastName: '',
    email: '',
  };
  employeesStore[companyId][employeeId] = employee;
}

function removeEmployee(companyId, employeeId) {
  delete employeesStore[companyId][employeeId];
}

class EmployeesStoreFactory extends EventEmitter {
  getAll = () => employeesStore;

  getById = id => employeesStore[id];

  emitChange() {
    this.emit('change');
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
}

const EmployeesStore = new EmployeesStoreFactory();
export default EmployeesStore;

AppDispatcher.register(action => {
  switch (action.actionType) {
    case EmployeesConstants.LINK_COMPANY:
      console.log(action);
      linkCompany(action.companyId);
      EmployeesStore.emitChange();
      break;

    case EmployeesConstants.UNLINK_COMPANY:
      console.log(action);
      unlinkCompany(action.companyId);
      EmployeesStore.emitChange();
      break;

    case EmployeesConstants.ADD_EMPLOYEE:
      console.log(action);
      addEmployee(action.companyId);
      EmployeesStore.emitChange();
      break;

    case EmployeesConstants.UPDATE_EMPLOYEE:
      console.log(action);
      updateEmployee(action.companyId, action.employeeId, action.newData);
      EmployeesStore.emitChange();
      break;

    case EmployeesConstants.REMOVE_EMPLOYEE:
      console.log(action);
      removeEmployee(action.companyId, action.employeeId);
      EmployeesStore.emitChange();
      break;
    default:
      console.log(action);
      break;
  }
});
