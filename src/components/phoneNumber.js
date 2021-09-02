import React from 'react'
import ReactPhoneInput from 'react-phone-input-material-ui'
import { makeStyles, TextField, withStyles } from '@material-ui/core'

const styles = theme => ({
  field: {
    margin: '10px 0'
  },
  countryList: {
    ...theme.typography.body1
  }
})

function PhoneField() {
  const classes = makeStyles()

  return (
    <React.Fragment>
      {/* Simple usage */}
      <ReactPhoneInput
        value={null}
        onChange={null} // passed function receives the phone value
        component={TextField}
      />

      {/* Configure more */}
      <ReactPhoneInput
        value={null}
        defaultCountry={'gb'}
        onChange={null}
        inputClass={classes.field}
        dropdownClass={classes.countryList}
        component={TextField}
      />
    </React.Fragment>
  )
}

export default withStyles(styles)(PhoneField)
