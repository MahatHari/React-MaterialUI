import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'


const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin:theme.spacing(1)
        }
    }
}))

export function useForm(initialFieldValues) {
    
   
    const [values, setValues] = useState(initialFieldValues)

     const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    return {
            values, setValues, handleInputChange
      }
}


export function Form(props) {
    const classes= useStyle()
    return (
        <form className={classes.root} autoComplete="off">
            {props.children}
        </form>
    )
}
