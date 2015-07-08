import React, { Component } from 'react'
const ReactPropTypes = React.PropTypes

import EmployeesActions from '../actions/EmployeesActions'

import Employee from './Employee'

export default class Employees extends Component {
  constructor (props) {
    super(props)
  }

  handleClickAddEmployee () {
    EmployeesActions.addEmployee(this.props.companyId)
  }

  renderCountEmployees () {
    let employeesKeysLen = Object.keys(this.props.employees).length
    let employeesLabel = 'Employees'

    if (employeesKeysLen < 1) {
      return
    }

    if (employeesKeysLen === 1) {
      employeesLabel = 'Employee'
    }

    return (
      <div className='col s12'>
         <h5>{`${employeesKeysLen} ${employeesLabel}`}</h5>
      </div>
    )
  }

  renderEmployeesActions () {
    if (this.props.editMode) {
      return (
        <div className='col s12'>
          <button className='waves-effect waves-light btn blue lighten-1' onClick={this.handleClickAddEmployee.bind(this)}><i className='material-icons left'>add</i>Add Employee</button>
        </div>
      )
    }
  }

  renderEmployees () {
    let employeesKeys = Object.keys(this.props.employees)

    if (!employeesKeys.length) {
      return (
        <div className='col s12'>
          <div className='card-panel red lighten-5'>
            <h5 className='flow-text'>At least, one employee is required</h5>
          </div>
        </div>
      )
    }

    return employeesKeys.map((key, index) => {
      let employee = this.props.employees[key]
      return (
        <div key={index}>
          <Employee
            companyId={this.props.companyId}
            editMode={this.props.editMode}
            email={employee.email}
            firstName={employee.firstName}
            id={employee.id}
            lastName={employee.lastName}
          />
        </div>
      )
    })
  }

  render () {
    return (
      <div className='row'>
        {this.renderCountEmployees()}
        {this.renderEmployeesActions()}
        {this.renderEmployees()}
      </div>
    )
  }
}

Employees.propTypes = {
  companyId: ReactPropTypes.string,
  editMode: ReactPropTypes.bool,
  employees: ReactPropTypes.object
}
