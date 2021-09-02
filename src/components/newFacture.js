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
import { useSelector } from 'react-redux'
import ModalClient from './modalClient'

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
    value: 'CFA',
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
  const [open, setOpen] = useState(false)

  const [numFact, setNumFact] = useState('FACT-' + getDate())
  const [devise, setDevise] = useState('CFA')
  const currentInvoice = useSelector(state => state.invoice.value)
  var subTotal = '0.0'
  var tax = '0.0'
  var taxPercent = '0'
  var total = '0.0'

  function valideInvoice() {
    let result = client !== ''
    if (!result) {
      return result
    }
    let subT = 0.0
    let CurrentTax = 0.0
    for (const element of currentInvoice) {
      subT = subT + Number(element.total)
      subTotal = subT.toFixed(2).toString()

      CurrentTax = CurrentTax + Number(element.taxe) / 100
      taxPercent = (CurrentTax * 100).toFixed(0)
      tax = CurrentTax.toFixed(2).toString()
      let t = subT * CurrentTax
      tax = t.toFixed(2).toString()

      let tt = (Number(subTotal) + Number(tax)).toFixed(2)
      total = tt

      console.log('sub ', subTotal)
      console.log('tax ', tax)
      console.log('total ', total)
      if (
        element.description === '' ||
        element.quantite === '' ||
        element.prix === '' ||
        element.total === ''
      ) {
        result = false
      }
    }
    console.log(result)
    return result
  }
  const changeClient = () => {
    setOpen(true)
    
  }
  console.log('client :'+ client)

  return (
    <Fragment>
      <Nav>
        <AppBar position='absolute' color='default' className={classes.appBar}>
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
                    onClick={valideInvoice}
                    disabled={!valideInvoice()}
                    style={{ backgroundColor: '2E99FF' }}
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
                {client === '' ? (
                  <div>
                    <Button
                  variant='contained'
                  onClick={()=>setOpen(true)}
                  style={{
                    width: '250px',
                    backgroundColor: '#8FBC8F',
                    textTransform: 'none',
                    fontSize: '15px'
                  }}
                >
                  Ajouter client
                </Button>
                  <ModalClient client={setClient} open={open} setOpen={setOpen}/>
                  </div>
                ):
              <TextField
                required
                id='client'
                name='client'
                label='Client'
                fullWidth
                value='10'
                select
                size='small'
                variant='outlined'
              >
                <MenuItem value="10">{client}</MenuItem>
                <MenuItem value="20">
                  <Button color='primary' onClick={changeClient} variant='text' style={{textTransform: 'none', width: '100%'}}>
                    Changer le client
                    </Button>
                  </MenuItem>
              </TextField>
              }

              {open && <ModalClient client={setClient} open={open} setOpen={setOpen}/>}
                
                
                
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
            <TableFacture
              subTotal={subTotal}
              devise={devise}
              total={total}
              taxe={tax}
              taxPercent={taxPercent}
            />
          </Paper>
        </MuiPickersUtilsProvider>
      </main>
    </Fragment>
  )
}
