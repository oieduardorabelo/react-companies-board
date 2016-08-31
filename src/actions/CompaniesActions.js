import AppDispatcher from '../dispatcher/AppDispatcher'
import * as CompaniesConstants from '../constants/CompaniesConstants'

const CompaniesActions = {
  createCompany(companyId) {
    AppDispatcher.dispatch({
      actionType: CompaniesConstants.CREATE_COMPANY,
      companyId,
    })
  },

  updateCompany(companyId, company) {
    AppDispatcher.dispatch({
      actionType: CompaniesConstants.UPDATE_COMPANY,
      companyId,
      company,
    })
  },

  removeCompany(companyId) {
    AppDispatcher.dispatch({
      actionType: CompaniesConstants.REMOVE_COMPANY,
      companyId,
    })
  },
}

export default CompaniesActions
