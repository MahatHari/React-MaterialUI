import React, { useState } from 'react';
import EmployeeForm from './EmployeeForm';
import PageHeader from '../../components/PageHeader';
import PeopleIcon from '@material-ui/icons/People';
import {
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import useTable from '../../components/useTable';
import * as EmployeeService from '../../Services/employeeService';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));
const headCells = [
  { id: 'fullnName', label: 'Employee Name' },
  { id: 'email', label: 'Email Address Name' },
  { id: 'mobile', label: 'Phone' },
  { id: 'department', label: 'Department Name' },
];
export default function Employees() {
  const classes = useStyles();
  const [records, setRecords] = useState(EmployeeService.getAllemployees());
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells);

  return (
    <>
      <PageHeader
        title='Employee Form'
        subTitle='Form design with validation'
        icon={<PeopleIcon fontSize='large' />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />

        <TblContainer>
          <TblHead></TblHead>
          <TableBody>
            {recordsAfterPagingAndSorting().map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.fullName}</TableCell>
                <TableCell>{record.email}</TableCell>
                <TableCell>{record.mobile}</TableCell>
                <TableCell>{record.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination></TblPagination>
      </Paper>
    </>
  );
}
