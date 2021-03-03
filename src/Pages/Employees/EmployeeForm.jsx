import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import Controls from '../../components/controls/Controls';
import * as employeeService from '../../Services/employeeService';

import { useForm, Form } from '../../components/useForm';

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' },
];

const initialFieldValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isParmanent: false,
};
export default function EmployeeForm() {
  const { values, setValues, handleInputChange } = useForm(initialFieldValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name='fullName'
            label='Full Name'
            value={values.fullName}
            onChange={handleInputChange}
          />

          <Controls.Input
            variant='outlined'
            label='Email'
            name='email'
            value={values.email}
            onChange={handleInputChange}
          />
          <Controls.Input
            variant='outlined'
            label='Mobile'
            name='mobile'
            value={values.mobile}
            onChange={handleInputChange}
          />
          <Controls.Input
            variant='outlined'
            label='City'
            name='city'
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name='gender'
            label='Gender'
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          ></Controls.RadioGroup>

          <Controls.Select
            name='departmentId'
            label='Department'
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
          ></Controls.Select>
          <Controls.DatePicker
            name='hireDate'
            value={values.hireDate}
            onChange={handleInputChange}
            label='Hired Date'
          ></Controls.DatePicker>
          <Controls.Checkbox
            name='isParmanent'
            label='Permanent Employee'
            value={values.isParmanent}
            onChange={handleInputChange}
          ></Controls.Checkbox>
          <div>
            <Controls.Button
              text='submit'
              size='large'
              onClick={handleInputChange}
            ></Controls.Button>
            <Controls.Button
              text='reset'
              color='default'
              onClick={handleInputChange}
            ></Controls.Button>
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
