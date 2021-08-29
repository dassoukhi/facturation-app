import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Button } from '@material-ui/core'
import ItemRow from './itemRow'
import { useDispatch, useSelector } from 'react-redux'
import { addArticle, deleteArticle } from '../features/invoceSlice'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#eeee',
    color: theme.palette.common.black
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

const TAX_RATE = 0.07

const useStyles = makeStyles({
  table: {
    marginTop: 20,
    width: '100%'
  }
})

function ccyFormat(num) {
  return `${num.toFixed(2)}`
}

function priceRow(qty, unit) {
  return qty * unit
}

function createRow(desc, qty, unit, taxe) {
  const price = priceRow(qty, unit)
  return { desc, qty, unit, price, taxe }
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0)
}

const rows = [
  createRow('Lit', 100, 1.15, 10),
  createRow('Micro-onde', 10, 45.99, 10),
  createRow("Pack d'eau", 2, 17.99, 10)
]

const invoiceSubtotal = subtotal(rows)
const invoiceTaxes = TAX_RATE * invoiceSubtotal
const invoiceTotal = invoiceTaxes + invoiceSubtotal

export default function TableFacture() {
  const classes = useStyles()
  const currentInvoice = useSelector(state => state.invoice.value)
  const dispatch = useDispatch()
  const [counter, setcounter] = useState(1)

  const addItem = () => {
    console.log('before redux ', currentInvoice)
    dispatch(
      addArticle({
        id: counter,
        description: '',
        quantite: 0,
        prix: 0.0,
        tota: 0.0,
        taxe: 0
      })
    )
    setcounter(counter + 1)
  }

  const deleteItem = e => {
    dispatch(deleteArticle(e))
  }
  console.log('pricipal redux ', currentInvoice)

  return (
    <Table className={classes.table} aria-label='spanning table'>
      <TableHead>
        <TableRow key='header'>
          <StyledTableCell>Description</StyledTableCell>
          <StyledTableCell align='right'>Quantité</StyledTableCell>
          <StyledTableCell align='right'>Prix</StyledTableCell>
          <StyledTableCell align='right'>Total</StyledTableCell>
          <StyledTableCell align='right'>Taxe</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {currentInvoice.map(e => (
          // eslint-disable-next-line react/jsx-key
          <ItemRow keyItem={e.id} deleteItem={() => deleteItem(e.id)} />
        ))}
        <Button
          variant='outlined'
          style={{ marginTop: '10px' }}
          size='small'
          color='primary'
          onClick={addItem}
        >
          Ajouter une ligne
        </Button>
        <TableRow key='stotal'>
          <TableCell rowSpan={4} />
          <TableCell colSpan={3}>Sous-total</TableCell>
          <TableCell align='right'>{ccyFormat(invoiceSubtotal)}</TableCell>
        </TableRow>
        <TableRow key='taxe'>
          <TableCell colSpan={2}>Taxe</TableCell>
          <TableCell colSpan={1}>{`${(TAX_RATE * 100).toFixed(
            0
          )} %`}</TableCell>
          <TableCell align='right'>{ccyFormat(invoiceTaxes)}</TableCell>
        </TableRow>
        <TableRow key='total'>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell align='right'>{ccyFormat(invoiceTotal)}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
