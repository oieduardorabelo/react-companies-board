import React from 'react';
import { mount } from 'enzyme';

import Employee from './Employee';

const generateEmployee = config => mount(<Employee {...config} />);

const defaultConfig = {
  companyId: '',
  editMode: true,
  email: '',
  firstName: '',
  id: 1,
  lastName: '',
};

describe('Suite for <Employee />', () => {
  describe('rendering in no-editMode', () => {
    const underTest = generateEmployee(
      Object.assign(defaultConfig, { editMode: false })
    );

    it('should render <ul> tag', () => {
      const actual = underTest.find('ul').length;
      const result = 1;
      expect(actual).toBe(result);
    });
  });

  describe('rendering in no-editMode', () => {
    const underTest = generateEmployee(Object.assign(defaultConfig));

    it('should render <ul> tag', () => {
      const actual = underTest.find('ul').length;
      const result = 1;
      expect(actual).toBe(result);
    });
  });
});
