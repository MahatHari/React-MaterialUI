import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from '@material-ui/core';
import React from 'react';

export default function Select(props) {
  const { name, label, value, onChange, error = null, options } = props;
  return (
    <FormControl variant='outlined' {...(error && { error: true })}>
      <InputLabel> {label} </InputLabel>
      <MuiSelect name={name} value={value} label={label} onChange={onChange}>
        <MenuItem value=''>None</MenuItem>
        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
