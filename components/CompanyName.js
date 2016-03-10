import React, { Component } from 'react'
const ReactPropTypes = React.PropTypes

import CompaniesActions from '../actions/CompaniesActions'

export default class CompanyName extends Component {
  static propTypes = {
    company: ReactPropTypes.shape({
      id: ReactPropTypes.string,
      name: ReactPropTypes.string
    }),
    editMode: ReactPropTypes.bool
  }

  render () {
    return (
      <div className='card-panel'>
        {this.renderCompanyName()}
      </div>
    )
  }

  handleChangeCompanyName = () => {
    let company = this.props.company
    let newName = this.refs[`companyName_${this.props.company.id}`].value
    company.name = newName
    CompaniesActions.updateCompany(this.props.company.id, company)
  }

  renderCompanyName () {
    if (this.props.editMode) {
      return (
        <div className='input-field'>
          <input type='text'
            defaultValue={this.props.company.name}
            onChange={this.handleChangeCompanyName}
            ref={`companyName_${this.props.company.id}`}
          />
          <label className='active'>Company Name</label>
        </div>
      )
    }

    return <h2>{this.props.company.name}</h2>
  }
}
