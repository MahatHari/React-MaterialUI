import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
import React from 'react';

export default function Checbox(props) {
  const { name, label, value, onChange } = props;

  const convertToDefEventPara = (name, value) => {
    return {
      target: {
        name,
        value,
      },
    };
  };

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color='primary'
            checked={value}
            onChange={(e) =>
              onChange(convertToDefEventPara(name, e.target.checked))
            }
          />
        }
        label={label}
      />
    </FormControl>
  );
}
