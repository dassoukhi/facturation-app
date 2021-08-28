/* eslint-disable react/prop-types */
import React, { Fragment, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import {
  AppBar,
  Button,
  makeStyles,
  MenuItem,
  Paper,
  Toolbar,
  Typography
} from '@material-ui/core'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import TableFacture from './tableFacture'
import styled from 'styled-components'

function getDate() {
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()

  today = mm + '-' + dd + '-' + yyyy
  return today
}
const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;
`
const currencies = [
  {
    value: 'XAF',
    label: 'Franc CFA'
  },
  {
    value: 'USD',
    label: 'Dollar ($)'
  },
  {
    value: 'EUR',
    label: 'Euro (€)'
  }
]
const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1000 + theme.spacing(2) * 2)]: {
      width: 1000,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}))

export default function NewFacture({ handleStatus }) {
  const classes = useStyles()
  const [selectedDate, setSelectedDate] = useState(new Date())
  const handleDateChange = date => {
    setSelectedDate(date)
  }
  const [client, setClient] = useState('')
  const [numFact, setNumFact] = useState('FACT-' + getDate())
  const [devise, setDevise] = useState('XAF')

  return (
    <Fragment>
      <Nav>
        <AppBar position='absolute' color='white' className={classes.appBar}>
          <Toolbar>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <Typography variant='h6' color='inherit' noWrap>
                  <Button
                    variant='contained'
                    onClick={handleStatus}
                    color='secondary'
                  >
                    Annuler
                  </Button>
                </Typography>
              </div>
              <div>
                <Typography variant='h6' color='inherit' noWrap>
                  <Button
                    variant='contained'
                    onClick={handleStatus}
                    color='default'
                  >
                    Enregistrer
                  </Button>
                </Typography>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Nav>
      <main className={classes.layout}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={12}></Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  required
                  id='client'
                  name='client'
                  label='Client'
                  fullWidth
                  value={client}
                  onChange={e => setClient(e.target.value)}
                  size='small'
                  variant='outlined'
                  autoComplete='given-name'
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id='numFacture'
                  name='numFacture'
                  label='Numéro de Facture'
                  value={numFact}
                  onChange={e => setNumFact(e.target.value)}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  id='devise'
                  select
                  label='Devise'
                  value={devise}
                  onChange={e => setDevise(e.target.value)}
                  variant='outlined'
                  size='small'
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid
                container
                spacing={0}
                direction='row'
                justifyContent='center'
                color='#252831'
              >
                <Grid item xs={1} sm={4}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant='outlined'
                    format='MM/dd/yyyy'
                    margin='normal'
                    id='date-creation'
                    label='Date de la création'
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </Grid>
                <Grid item xs={1} sm={4}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant='outlined'
                    format='MM/dd/yyyy'
                    margin='normal'
                    id='date-echance'
                    label="Date d'échéance"
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <TableFacture />
          </Paper>
        </MuiPickersUtilsProvider>
      </main>
    </Fragment>
  )
}
