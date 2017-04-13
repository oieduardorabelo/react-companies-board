import AppDispatcher from '../dispatcher/AppDispatcher';
import * as EmployeesConstants from '../constants/EmployeesConstants';

const EmployeesActions = {
  linkCompany(companyId) {
    AppDispatcher.dispatch({
      actionType: EmployeesConstants.LINK_COMPANY,
      companyId,
    });
  },

  unlinkCompany(companyId) {
    AppDispatcher.dispatch({
      actionType: EmployeesConstants.UNLINK_COMPANY,
      companyId,
    });
  },

  addEmployee(companyId) {
    AppDispatcher.dispatch({
      actionType: EmployeesConstants.ADD_EMPLOYEE,
      companyId,
    });
  },

  removeEmployee(companyId, employeeId) {
    AppDispatcher.dispatch({
      actionType: EmployeesConstants.REMOVE_EMPLOYEE,
      companyId,
      employeeId,
    });
  },

  updateEmployee(companyId, employeeId, newData) {
    AppDispatcher.dispatch({
      actionType: EmployeesConstants.UPDATE_EMPLOYEE,
      companyId,
      employeeId,
      newData,
    });
  },
};

export default EmployeesActions;
