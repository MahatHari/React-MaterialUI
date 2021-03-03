import { FormControlLabel, FormLabel, RadioGroup as MuiRadioGroup } from '@material-ui/core'
import React from 'react'

export default function RadioGroup(props) {
    const{ name, label, value, onChange, items}=props
    return (
        <FormControlLabel>
            <FormLabel>
                <RadioGroup>

                </RadioGroup>
            </FormLabel>
        </FormControlLabel>
    )
}
