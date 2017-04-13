import AppDispatcher from '../dispatcher/AppDispatcher';
import EmployeesActions from './EmployeesActions';

AppDispatcher.dispatch = jest.fn();

describe('Suite for <EmployeesActions />', () => {
  afterEach(() => {
    AppDispatcher.dispatch.mockReset();
  });

  it('dipsatch linkCompany correctly', () => {
    EmployeesActions.linkCompany('123companyId');

    expect(AppDispatcher.dispatch).toHaveBeenCalledTimes(1);
    expect(AppDispatcher.dispatch).toHaveBeenCalledWith({
      actionType: 'LINK_COMPANY',
      companyId: '123companyId',
    });
  });

  it('dipsatch unlinkCompany correctly', () => {
    EmployeesActions.unlinkCompany('123companyId');

    expect(AppDispatcher.dispatch).toHaveBeenCalledTimes(1);
    expect(AppDispatcher.dispatch).toHaveBeenCalledWith({
      actionType: 'UNLINK_COMPANY',
      companyId: '123companyId',
    });
  });

  it('dipsatch addEmployee correctly', () => {
    EmployeesActions.addEmployee('123companyId');

    expect(AppDispatcher.dispatch).toHaveBeenCalledTimes(1);
    expect(AppDispatcher.dispatch).toHaveBeenCalledWith({
      actionType: 'ADD_EMPLOYEE',
      companyId: '123companyId',
    });
  });

  it('dipsatch removeEmployee correctly', () => {
    EmployeesActions.removeEmployee('123companyId', '123employeeId');

    expect(AppDispatcher.dispatch).toHaveBeenCalledTimes(1);
    expect(AppDispatcher.dispatch).toHaveBeenCalledWith({
      actionType: 'REMOVE_EMPLOYEE',
      companyId: '123companyId',
      employeeId: '123employeeId',
    });
  });
});
