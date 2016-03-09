import React, { Component } from 'react'
const ReactPropTypes = React.PropTypes

import EmployeesActions from '../actions/EmployeesActions'

function validateEmail (email) {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  return emailRegex.test(email)
}

export default class Employee extends Component {
  handleRemoveEmployeeClick = () => {
    EmployeesActions.removeEmployee(this.props.companyId, this.props.id)
  }

  handleEmployeeChange = () => {
    let firstName = this.refs.firstName.value
    let lastName = this.refs.lastName.value
    let email = this.refs.email.value
    let _complete = !!firstName && !!lastName && validateEmail(email)
    let newData = {
      firstName,
      lastName,
      email,
      _complete
    }
    EmployeesActions.updateEmployee(this.props.companyId, this.props.id, newData)
  }

  renderEmplooye () {
    let firstName = this.props.firstName
    let lastName = this.props.lastName
    let email = this.props.email

    if (this.props.editMode) {
      return (
        <div className='card-panel'>
          <div className='input-field'>
            <input type='text' defaultValue={firstName} onChange={this.handleEmployeeChange} ref='firstName' />
            <label className='active'>Frist Name</label>
          </div>
          <div className='input-field'>
            <input type='text' defaultValue={lastName} onChange={this.handleEmployeeChange} ref='lastName' />
            <label className='active'>Last Name</label>
          </div>
          <div className='input-field'>
            <input type='email' defaultValue={email} onChange={this.handleEmployeeChange} ref='email' />
            <label className='active'>Email</label>
          </div>
          <button className='waves-effect waves-light btn red lighten-1' onClick={this.handleRemoveEmployeeClick}><i className='material-icons'>delete</i></button>
        </div>
      )
    }

    return (
      <div className='card-panel'>
        <ul>
          <li>{firstName}</li>
          <li>{lastName}</li>
          <li>{email}</li>
        </ul>
      </div>
    )
  }

  render () {
    return (
      <div className='col s4'>
        {this.renderEmplooye()}
      </div>
    )
  }
}

Employee.propTypes = {
  companyId: ReactPropTypes.string,
  editMode: ReactPropTypes.bool,
  email: ReactPropTypes.string,
  firstName: ReactPropTypes.string,
  id: ReactPropTypes.number,
  lastName: ReactPropTypes.string
}
