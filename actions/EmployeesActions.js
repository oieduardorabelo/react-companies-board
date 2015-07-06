import AppDispatcher from '../dispatcher/AppDispatcher'
import EmployeesConstants from '../constants/EmployeesConstants'

const EmployeesActions = {
  linkCompany (companyId) {
    AppDispatcher.dispatch({
      actionType: EmployeesConstants.LINK_COMPANY,
      companyId: companyId
    })
  },

  unlinkCompany (companyId) {
    AppDispatcher.dispatch({
      actionType: EmployeesConstants.UNLINK_COMPANY,
      companyId: companyId
    })
  },

  addEmployee (companyId) {
    AppDispatcher.dispatch({
      actionType: EmployeesConstants.ADD_EMPLOYEE,
      companyId: companyId
    })
  },

  removeEmployee (companyId, employeeId) {
    AppDispatcher.dispatch({
      actionType: EmployeesConstants.REMOVE_EMPLOYEE,
      companyId: companyId,
      employeeId: employeeId
    })
  },

  updateEmployee (companyId, employeeId, newData) {
    AppDispatcher.dispatch({
      actionType: EmployeesConstants.UPDATE_EMPLOYEE,
      companyId: companyId,
      employeeId: employeeId,
      newData: newData
    })
  }
}

export default EmployeesActions
