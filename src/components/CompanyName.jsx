import React, { Component } from 'react';
import CompaniesActions from '../actions/CompaniesActions';

const ReactPropTypes = React.PropTypes;

export default class CompanyName extends Component {
  static propTypes = {
    company: ReactPropTypes.shape({
      id: ReactPropTypes.string,
      name: ReactPropTypes.string,
    }).isRequired,
    editMode: ReactPropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.companiesNames = {};
  }

  handleChangeCompanyName = () => {
    const company = this.props.company;
    const newName = this.companiesNames[this.props.company.id].value;
    company.name = newName;
    CompaniesActions.updateCompany(this.props.company.id, company);
  };

  renderCompanyName() {
    if (this.props.editMode) {
      return (
        <div className="input-field">
          <input
            id={this.props.company.id}
            type="text"
            defaultValue={this.props.company.name}
            onChange={this.handleChangeCompanyName}
            ref={c => {
              this.companiesNames[this.props.company.id] = c;
            }}
          />
          <label className="active" htmlFor={this.props.company.id}>
            Company Name
          </label>
        </div>
      );
    }

    return <h2>{this.props.company.name}</h2>;
  }

  render() {
    return (
      <div className="card-panel">
        {this.renderCompanyName()}
      </div>
    );
  }
}
