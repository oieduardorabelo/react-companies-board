import AppDispatcher from '../dispatcher/AppDispatcher'
import * as CompaniesConstants from '../constants/CompaniesConstants'

const CompaniesActions = {
  createCompany (companyId) {
    AppDispatcher.dispatch({
      actionType: CompaniesConstants.CREATE_COMPANY,
      companyId: companyId
    })
  },

  updateCompany (companyId, company) {
    AppDispatcher.dispatch({
      actionType: CompaniesConstants.UPDATE_COMPANY,
      companyId: companyId,
      company: company
    })
  },

  removeCompany (companyId) {
    AppDispatcher.dispatch({
      actionType: CompaniesConstants.REMOVE_COMPANY,
      companyId: companyId
    })
  }
}

export default CompaniesActions
