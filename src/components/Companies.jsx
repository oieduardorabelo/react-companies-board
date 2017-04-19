import React, { Component } from 'react';
import shortid from 'shortid';

import CompaniesActions from '../actions/CompaniesActions';
import EmployeesActions from '../actions/EmployeesActions';

import CompaniesStore from '../stores/CompaniesStore';
import EmployeesStore from '../stores/EmployeesStore';

export default class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Company: null,
      isLoading: true,
      companies: {},
      employess: {},
    };
  }

  componentDidMount() {
    CompaniesStore.addChangeListener(this.onCompaniesStoreChage);
    EmployeesStore.addChangeListener(this.onEmployeesStoreChage);

    require.ensure(['./Company'], require => {
      setTimeout(() => {
        const Company = require('./Company').default;

        this.setState({
          Company,
          isLoading: false,
        });
      }, 2000);
    });
  }

  componentWillUnmount() {
    CompaniesStore.removeChangeListener(this.onCompaniesStoreChage);
    EmployeesStore.removeChangeListener(this.onEmployeesStoreChage);
  }

  onCompaniesStoreChage = () => {
    this.setState({
      companies: CompaniesStore.getAll(),
    });
  };

  onEmployeesStoreChage = () => {
    this.setState({
      employess: EmployeesStore.getAll(),
    });
  };

  handleClickAddCompany = () => {
    const shortidCompany = shortid.generate();
    CompaniesActions.createCompany(shortidCompany);
    EmployeesActions.linkCompany(shortidCompany);
  };

  renderCompanies() {
    const { Company } = this.state;
    const employess = this.state.employess;
    const companies = this.state.companies;
    const companiesKeys = Object.keys(companies);

    if (!companiesKeys.length) {
      return <h4>Add a new company!</h4>;
    }

    return companiesKeys.map(key => {
      const company = companies[key];
      const companyEmployess = employess[key];
      return (
        <Company
          key={company.id}
          employees={companyEmployess}
          company={company}
        />
      );
    });
  }

  renderCountCompanies() {
    const companiesLen = Object.keys(this.state.companies).length;

    if (companiesLen < 1) {
      return 'Board of Companies';
    }

    if (companiesLen === 1) {
      return `${companiesLen} Company`;
    }

    return `${companiesLen} Companies`;
  }

  render() {
    if (this.state.isLoading) {
      return <h3>Loading Companies...</h3>;
    }

    return (
      <div>
        <h3>{this.renderCountCompanies()}</h3>
        <button
          className="waves-effect waves-light btn blue lighten-1"
          onClick={this.handleClickAddCompany}
        >
          <i className="material-icons left">add</i>Add Company
        </button>
        {this.renderCompanies()}
      </div>
    );
  }
}
