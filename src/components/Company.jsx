import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CompaniesActions from '../actions/CompaniesActions';
import EmployeesActions from '../actions/EmployeesActions';
import CompanyName from './CompanyName';
import Employees from './Employees';

export default class Company extends Component {
  static propTypes = {
    company: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
    employees: PropTypes.shape({
      isCompleted: PropTypes.string,
      id: PropTypes.string,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      disableSaveAll: true,
      editMode: true,
    };
  }

  componentWillReceiveProps() {
    const hasCompanyName = !!this.props.company.name;
    const employeesKeys = Object.keys(this.props.employees);
    let hasAllEmployeesCompleted = false;

    if (employeesKeys.length) {
      hasAllEmployeesCompleted = employeesKeys
        .map(employee => this.props.employees[employee].isCompleted)
        .every(complete => complete === true);
    }

    if (hasCompanyName && hasAllEmployeesCompleted) {
      return this.setState({
        disableSaveAll: false,
      });
    }

    return this.setState({
      disableSaveAll: true,
    });
  }

  handleClickToggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
  };

  handleClickRemoveCompany = () => {
    CompaniesActions.removeCompany(this.props.company.id);
    EmployeesActions.unlinkCompany(this.props.company.id);
  };

  renderCompanyActions() {
    const btnSaveAll = (
      <button
        className="waves-effect waves-light btn green lighten-1"
        onClick={this.handleClickToggleEditMode}
        disabled={this.state.disableSaveAll}
      >
        <i className="material-icons left">done_all</i>Save All
      </button>
    );
    const btnEditCompany = (
      <button
        className="waves-effect waves-light btn blue-grey lighten-1"
        onClick={this.handleClickToggleEditMode}
      >
        <i className="material-icons left">edit</i>Edit Company
      </button>
    );
    const btnRemoveCompany = (
      <button
        className="waves-effect waves-light btn red lighten-1 right"
        onClick={this.handleClickRemoveCompany}
      >
        <i className="material-icons left">delete</i>Remove Company
      </button>
    );

    if (this.state.editMode) {
      return (
        <div>
          {btnSaveAll}
          {btnRemoveCompany}
        </div>
      );
    }

    return (
      <div>
        {btnEditCompany}
        {btnRemoveCompany}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="card-panel blue-grey lighten-5">
          {this.renderCompanyActions()}
          <CompanyName
            company={this.props.company}
            editMode={this.state.editMode}
          />
          <Employees
            companyId={this.props.company.id}
            editMode={this.state.editMode}
            employees={this.props.employees}
          />
        </div>
      </div>
    );
  }
}
