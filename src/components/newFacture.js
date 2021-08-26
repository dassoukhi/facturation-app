/* eslint-disable react/prop-types */
import React, { Fragment, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import {
  AppBar,
  Button,
  makeStyles,
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

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;
`

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
  const [selectedDate, setSelectedDate] = useState(
    new Date('2014-08-18T21:11:54')
  )
  const handleDateChange = date => {
    setSelectedDate(date)
  }

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
                    color='primary'
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
                  variant='outlined'
                  size='small'
                  fullWidth
                  autoComplete='family-name'
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  id='devise'
                  name='devise'
                  label='Devise'
                  variant='outlined'
                  size='small'
                  fullWidth
                  autoComplete='family-name'
                />
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
