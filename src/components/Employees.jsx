import React from 'react'
import shortid from 'shortid'

import EmployeesActions from '../actions/EmployeesActions'
import Employee from './Employee'

const ReactPropTypes = React.PropTypes

const Employees = ({ companyId, editMode, employees }) => {
  const handleClickAddEmployee = () => {
    EmployeesActions.addEmployee(companyId)
  }

  const renderCountEmployees = () => {
    const employeesKeysLen = Object.keys(employees).length
    const employeesLabel = employeesKeysLen > 1 ? 'Employees' : 'Employee'

    return (
      <div className="col s12">
        <h5 className="heading-employees">{`${employeesKeysLen} ${employeesLabel}`}</h5>
      </div>
    )
  }

  const renderEmployeesActions = () => (
    <div className="col s12">
      <button
        className="waves-effect waves-light btn blue lighten-1 btn-add-employee"
        onClick={handleClickAddEmployee}
      >
        <i className="material-icons left" />Add Employee
      </button>
    </div>
  )

  const renderEmployees = () => {
    const employeesKeys = Object.keys(employees)

    if (!employeesKeys.length) {
      return (
        <div className="col s12">
          <div className="card-panel red lighten-5">
            <h5 className="flow-text">At least, one employee is required</h5>
          </div>
        </div>
      )
    }

    return employeesKeys.map((key) => {
      const employee = employees[key]
      return (
        <div key={shortid.generate()}>
          <Employee
            companyId={companyId}
            editMode={editMode}
            email={employee.email}
            firstName={employee.firstName}
            id={employee.id}
            lastName={employee.lastName}
          />
        </div>
      )
    })
  }

  const editActions = editMode && renderEmployeesActions()

  return (
    <div className="row">
      {renderCountEmployees()}
      {editActions}
      {renderEmployees()}
    </div>
  )
}

Employees.defaultProps = {
  employees: {},
}

Employees.propTypes = {
  companyId: ReactPropTypes.string.isRequired,
  editMode: ReactPropTypes.bool.isRequired,
  employees: ReactPropTypes.shape({
    emai: ReactPropTypes.string,
    firstName: ReactPropTypes.string,
    id: ReactPropTypes.string,
  }),
}

export default Employees
