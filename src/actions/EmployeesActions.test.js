import AppDispatcher from '../dispatcher/AppDispatcher'
import EmployeesActions from './EmployeesActions'

AppDispatcher.dispatch = jest.fn()

describe('Suite for <EmployeesActions />', () => {
  it('dipsatch linkCompany correctly', () => {
    EmployeesActions.linkCompany('123companyId')

    expect(AppDispatcher.dispatch).toHaveBeenCalledTimes(1)
    expect(AppDispatcher.dispatch).toHaveBeenCalledWith({
      actionType: 'LINK_COMPANY',
      companyId: '123companyId',
    })
  })
})
