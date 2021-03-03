import { FormControl, InputLabel, MenuItem, Select as MuiSelect} from '@material-ui/core'
import React from 'react'

export default function Select(props) {
    const { name, label, value, onChange, options}=props
    return (
        
        <FormControl variant="outlined">
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                name={name}
                lable={label}
                value={value}
                onChange={onChange}
            >
                <MenuItem value='None'></MenuItem>
                {
                    options.map(
                        item => (
                            <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                        )
                    )
                }

            </MuiSelect>

            </FormControl>
        
    )
}
