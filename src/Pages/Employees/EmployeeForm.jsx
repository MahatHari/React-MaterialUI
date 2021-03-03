import { FormControl, FormControlLabel, FormLabel, Grid,  Radio,  RadioGroup    } from '@material-ui/core'
import React, { useState } from 'react'
import {Controls} from '../../components/controls/Controls'

import {useForm, Form} from '../../components/useForm'

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', tile: 'Female' },
    {id:'other', title:'Other'}
]

const initialFieldValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isParmanent:false
}
export default function EmployeeForm() {

    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFieldValues)
    
    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input name='fullName'
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />

                    <Controls.Input 
                        variant='outlined'
                        label='Email'
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        />
                    
                </Grid>
                <Grid item xs={6}>


                    <FormControl>
                        <FormLabel>Gender </FormLabel>
                        <RadioGroup row
                            name="gender"
                            value={values.gender}
                            onChange={handleInputChange}
                        >

                            <FormControlLabel value="male"control={<Radio/>}label="Male"></FormControlLabel>
                            <FormControlLabel value="female"control={<Radio/>} label="Female"></FormControlLabel>
                            <FormControlLabel value="other"control={<Radio/>}label="Other"></FormControlLabel>
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </Form>
    )
}
