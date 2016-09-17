import { EventEmitter } from 'events'
import AppDispatcher from '../dispatcher/AppDispatcher'
import * as CompaniesConstants from '../constants/CompaniesConstants'

const companiesStore = {}

function createCompany(companyId) {
  const company = {
    id: companyId,
    name: '',
  }
  companiesStore[companyId] = company
}

function updateCompany(companyId, company) {
  const newCompany = { ...companiesStore[companyId], ...company }
  companiesStore[companyId] = newCompany
}

function removeCompany(companyId) {
  delete companiesStore[companyId]
}

class CompaniesStoreFactory extends EventEmitter {
  static getAll() {
    return companiesStore
  }

  static getById(id) {
    return companiesStore[id]
  }

  emitChange() {
    this.emit('change')
  }

  addChangeListener(callback) {
    this.on('change', callback)
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback)
  }
}

const CompaniesStore = new CompaniesStoreFactory()
export default CompaniesStore

AppDispatcher.register((action) => {
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
    default:
      console.log(action)
      break
  }
})
