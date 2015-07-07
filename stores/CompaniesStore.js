var AppDispatcher = require('../dispatcher/AppDispatcher')
var EventEmitter = require('events').EventEmitter
var CompaniesConstants = require('../constants/CompaniesConstants')
var assign = require('object-assign')

var CHANGE_EVENT = 'change'

var _companies = {}

function createCompany (companyId) {
  var company = {
    id: companyId,
    name: ''
  }
  _companies[companyId] = company
}

function updateCompany (companyId, company) {
  let newCompany = assign({}, _companies[companyId], company)
  _companies[companyId] = newCompany
}

function removeCompany (companyId) {
  delete _companies[companyId]
}

var CompaniesStore = assign({}, EventEmitter.prototype, {
  getAll () {
    return _companies
  },

  getById (id) {
    return _companies[id]
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
})

export default CompaniesStore
