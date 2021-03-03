import React from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../components/PageHeader';
import PeopleIcon from '@material-ui/icons/People';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding:theme.spacing(3)
    }
}))
export default function Employees() {
    const classes= useStyles()
    return (
        <>
             <PageHeader
            title='Employee Form'
            subTitle='Form design with validation'
            icon={<PeopleIcon fontSize='large' />}
            />
            <Paper className={classes.pageContent}>
                <EmployeeForm />
            </Paper>
        </>
    )
}
