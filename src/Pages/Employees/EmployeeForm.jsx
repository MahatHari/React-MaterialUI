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
  id: '0',
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
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName ? '' : 'Name is Required';
    if ('email' in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ''
        : 'Email is not valid';
    if ('mobile' in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 ? '' : 'Name Minimum 10 numbers Required';
    if ('departmentId' in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length !== 0 ? '' : 'Choose department';

    setErrors({ ...temp });
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === '');
  };
  const {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
    resetForm,
  } = useForm(initialFieldValues, true, validate);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      employeeService.insertEmployee(values);
      resetForm();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name='fullName'
            label='Full Name'
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />

          <Controls.Input
            variant='outlined'
            label='Email'
            name='email'
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            variant='outlined'
            label='Mobile'
            name='mobile'
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
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
            error={errors.departmentId}
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
              type='submit'
            ></Controls.Button>
            <Controls.Button
              text='reset'
              color='default'
              onClick={resetForm}
            ></Controls.Button>
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
