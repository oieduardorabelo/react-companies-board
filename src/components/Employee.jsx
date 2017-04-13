import shortid from 'shortid';
import React, { Component } from 'react';
import EmployeesActions from '../actions/EmployeesActions';

const ReactPropTypes = React.PropTypes;

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9.!#$%&"*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; // eslint-disable-line max-len
  return emailRegex.test(email);
}

export default class Employee extends Component {
  static propTypes = {
    companyId: ReactPropTypes.string.isRequired,
    editMode: ReactPropTypes.bool.isRequired,
    email: ReactPropTypes.string.isRequired,
    firstName: ReactPropTypes.string.isRequired,
    id: ReactPropTypes.number.isRequired,
    lastName: ReactPropTypes.string.isRequired,
  };

  handleRemoveEmployeeClick = () => {
    EmployeesActions.removeEmployee(this.props.companyId, this.props.id);
  };

  handleEmployeeChange = () => {
    const firstName = this.firstName.value;
    const lastName = this.lastName.value;
    const email = this.email.value;
    const isCompleted = !!firstName && !!lastName && validateEmail(email);
    const newData = {
      firstName,
      lastName,
      email,
      isCompleted,
    };
    EmployeesActions.updateEmployee(
      this.props.companyId,
      this.props.id,
      newData
    );
  };

  renderEmplooye() {
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    const email = this.props.email;

    if (this.props.editMode) {
      const shortidFirstName = shortid.generate();
      const shortidLastName = shortid.generate();
      const shortidEmail = shortid.generate();
      return (
        <div className="card-panel">
          <div className="input-field">
            <input
              id={shortidFirstName}
              type="text"
              defaultValue={firstName}
              onChange={this.handleEmployeeChange}
              ref={c => {
                this.firstName = c;
              }}
            />
            <label className="active" htmlFor={shortidFirstName}>
              Frist Name
            </label>
          </div>
          <div className="input-field">
            <input
              id={shortidLastName}
              type="text"
              defaultValue={lastName}
              onChange={this.handleEmployeeChange}
              ref={c => {
                this.lastName = c;
              }}
            />
            <label className="active" htmlFor={shortidLastName}>
              Last Name
            </label>
          </div>
          <div className="input-field">
            <input
              id={shortidEmail}
              type="email"
              defaultValue={email}
              onChange={this.handleEmployeeChange}
              ref={c => {
                this.email = c;
              }}
            />
            <label className="active" htmlFor={shortidEmail}>Email</label>
          </div>
          <button
            className="waves-effect waves-light btn red lighten-1"
            onClick={this.handleRemoveEmployeeClick}
          >
            <i className="material-icons">delete</i>
          </button>
        </div>
      );
    }

    return (
      <div className="card-panel">
        <ul>
          <li>{firstName}</li>
          <li>{lastName}</li>
          <li>{email}</li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="col s4">
        {this.renderEmplooye()}
      </div>
    );
  }
}
