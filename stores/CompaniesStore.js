import AppDispatcher from '../dispatcher/AppDispatcher'
import { EventEmitter } from 'events'

import * as CompaniesConstants from '../constants/CompaniesConstants'

let _companies = {}

function createCompany (companyId) {
  let company = {
    id: companyId,
    name: ''
  }
  _companies[companyId] = company
}

function updateCompany (companyId, company) {
  let newCompany = {..._companies[companyId], ...company}
  _companies[companyId] = newCompany
}

function removeCompany (companyId) {
  delete _companies[companyId]
}

class CompaniesStoreFactory extends EventEmitter {
  getAll () {
    return _companies
  }

  getById (id) {
    return _companies[id]
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

const CompaniesStore = new CompaniesStoreFactory()
export default CompaniesStore

AppDispatcher.register(function (action) {
  switch (action.actionType) {
    case CompaniesConstants.CREATE_COMPANY:
      console.log(action)
      createCompany(action.companyId)
      CompaniesStore.emitChange()
      break

    case CompaniesConstants.UPDATE_COMPANY:
      console.log(action)
      updateCompany(action.companyId, action.company)
      CompaniesStore.emitChange()
      break

    case CompaniesConstants.REMOVE_COMPANY:
      console.log(action)
      removeCompany(action.companyId)
      CompaniesStore.emitChange()
      break
  }
})
